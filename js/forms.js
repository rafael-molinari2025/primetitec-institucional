/* RM PrimeTI Tecnologia — forms.js
   Integração Supabase: leads, newsletter, page views */

(function () {
  'use strict';

  /* ---- verifica se o config.js foi preenchido ---- */
  const configured =
    typeof SUPABASE_URL !== 'undefined' &&
    !SUPABASE_URL.includes('SEU_PROJECT_ID');

  if (!configured) {
    console.warn(
      '[PrimeTI] Configure js/config.js com suas credenciais do Supabase.\n' +
      'Veja as instruções no próprio arquivo.'
    );
    setupFormFallback();
    return;
  }

  /* ---- inicializa cliente ---- */
  const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  document.addEventListener('DOMContentLoaded', function () {
    trackPageView();

    const leadForm       = document.getElementById('leadForm');
    const newsletterForm = document.getElementById('newsletterForm');

    if (leadForm)       setupLeadForm(leadForm);
    if (newsletterForm) setupNewsletter(newsletterForm);
  });

  /* ============================================================
     PAGE VIEW TRACKING
  ============================================================ */
  async function trackPageView() {
    try {
      await db.from('page_views').insert({
        pagina:     window.location.pathname || '/',
        referrer:   document.referrer || null,
        user_agent: navigator.userAgent,
      });
    } catch (_) { /* silent — never break the page */ }
  }

  /* ============================================================
     LEAD FORM (contact / budget)
  ============================================================ */
  function setupLeadForm(form) {
    const btn    = document.getElementById('submitLeadBtn');
    const status = document.getElementById('leadStatus');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form));

      if (!data.nome?.trim() || !data.email?.trim()) {
        showStatus(status, 'error', 'Por favor, preencha Nome e E-mail.');
        return;
      }

      if (!isValidEmail(data.email)) {
        showStatus(status, 'error', 'Informe um e-mail válido.');
        return;
      }

      setLoading(btn, true);

      try {
        const { error } = await db.from('leads').insert({
          nome:     data.nome.trim(),
          email:    data.email.trim().toLowerCase(),
          telefone: data.telefone?.trim() || null,
          servico:  data.servico || null,
          mensagem: data.mensagem?.trim() || null,
          origem:   'formulario_site',
        });

        if (error) throw error;

        showStatus(
          status,
          'success',
          '✓ Mensagem enviada com sucesso! Retornaremos em breve.'
        );
        form.reset();

      } catch (err) {
        console.error('[PrimeTI] Erro ao salvar lead:', err);
        showStatus(
          status,
          'error',
          'Erro ao enviar. Tente pelo WhatsApp: (31) 99065-6645'
        );
      }

      setLoading(btn, false);
    });
  }

  /* ============================================================
     NEWSLETTER
  ============================================================ */
  function setupNewsletter(form) {
    const status = document.getElementById('newsletterStatus');

    /* inicializa EmailJS se configurado */
    const ejsReady =
      typeof emailjs !== 'undefined' &&
      typeof EMAILJS_PUBLIC_KEY !== 'undefined' &&
      EMAILJS_PUBLIC_KEY !== 'SUA_PUBLIC_KEY';

    if (ejsReady) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const input  = form.querySelector('input[type="email"]');
      const button = form.querySelector('button[type="submit"]');
      const email  = input?.value?.trim().toLowerCase();

      if (!email || !isValidEmail(email)) {
        if (status) status.textContent = 'Informe um e-mail válido.';
        return;
      }

      button.disabled = true;
      button.textContent = '...';

      try {
        const { error } = await db.from('newsletter').insert({ email });

        if (error?.code === '23505') {
          /* unique constraint — e-mail já cadastrado */
          if (status) status.textContent = 'E-mail já cadastrado. Obrigado!';
          input.value = '';
          button.textContent = '✓';
          setTimeout(function () {
            button.disabled = false;
            button.textContent = 'Assinar';
          }, 3000);
          return;
        }

        if (error) throw error;

        /* ── inscrição salva com sucesso — envia e-mail de confirmação ── */
        input.value = '';
        button.textContent = '✓ Inscrito!';
        button.style.background = '#27c93f';
        if (status) status.textContent = 'Obrigado! Verifique seu e-mail para confirmação.';

        if (ejsReady) {
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email:   email,
            reply_to:   'comercial@primetitec.com.br',
          }).catch(function (err) {
            console.warn('[PrimeTI] EmailJS: falha ao enviar confirmação', err);
          });
        }

      } catch (err) {
        console.error('[PrimeTI] Erro newsletter:', err);
        button.textContent = 'Erro';
        if (status) status.textContent = 'Erro ao cadastrar. Tente novamente.';
      }

      setTimeout(function () {
        button.disabled = false;
        button.textContent = 'Assinar';
        button.style.background = '';
        if (status) status.textContent = '';
      }, 6000);
    });
  }

  /* ============================================================
     FALLBACK (sem Supabase configurado)
     — formulário ainda funciona, redireciona para WhatsApp
  ============================================================ */
  function setupFormFallback() {
    document.addEventListener('DOMContentLoaded', function () {
      const leadForm = document.getElementById('leadForm');
      if (!leadForm) return;

      leadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(leadForm));
        const msg  = encodeURIComponent(
          `Olá! Meu nome é ${data.nome || 'Visitante'}.\n` +
          `Serviço: ${data.servico || 'Não informado'}\n` +
          `${data.mensagem || ''}`
        );
        window.open(`https://wa.me/5531990656645?text=${msg}`, '_blank');
      });
    });
  }

  /* ============================================================
     HELPERS
  ============================================================ */
  function setLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    const span = btn.querySelector('span');
    const icon = btn.querySelector('i');
    if (loading) {
      if (span) span.textContent = 'Enviando...';
      if (icon) icon.className = 'fas fa-circle-notch fa-spin';
    } else {
      if (span) span.textContent = 'Enviar mensagem';
      if (icon) icon.className = 'fas fa-paper-plane';
    }
  }

  function showStatus(el, type, msg) {
    if (!el) return;
    el.className = 'form-status ' + type;
    el.textContent = msg;
    setTimeout(function () {
      el.textContent = '';
      el.className = 'form-status';
    }, 7000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

})();
