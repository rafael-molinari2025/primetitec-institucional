/* RM PrimeTI Tecnologia — main.js */

function t(key, fallback) {
  return window.i18n ? window.i18n.t(key, fallback) : fallback;
}

/* ============================================================
   PRELOADER
   ============================================================ */
(function initPreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) return;
  const hide = () => pl.classList.add('out');
  if (document.readyState === 'complete') {
    setTimeout(hide, 1200);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 1200));
  }
})();

/* ============================================================
   COOKIE BANNER + ANALYTICS CONSENT
   ============================================================ */
(function initCookies() {
  const banner  = document.getElementById('cookieBanner');
  if (!banner) return;

  const stored = localStorage.getItem('primetiti_cookies');
  if (stored === 'yes')  { banner.classList.add('hidden'); loadAnalytics(); return; }
  if (stored === 'no')   { banner.classList.add('hidden'); return; }

  // First visit — show after 2s
  setTimeout(() => banner.classList.add('visible'), 2000);

  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem('primetiti_cookies', 'yes');
    banner.classList.remove('visible');
    setTimeout(() => banner.classList.add('hidden'), 500);
    loadAnalytics();
  });

  document.getElementById('cookieDecline')?.addEventListener('click', () => {
    localStorage.setItem('primetiti_cookies', 'no');
    banner.classList.remove('visible');
    setTimeout(() => banner.classList.add('hidden'), 500);
  });
})();

function loadAnalytics() {
  // ── Google Analytics 4 ──────────────────────────────────
  // Substitua 'G-XXXXXXXXXX' pelo seu Measurement ID
  // Obtido em: analytics.google.com → Admin → Data Streams
  const GA_ID = 'G-XXXXXXXXXX';
  if (GA_ID !== 'G-XXXXXXXXXX') {
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  // ── Microsoft Clarity ───────────────────────────────────
  // Substitua 'XXXXXXXXXX' pelo seu Project ID
  // Obtido em: clarity.microsoft.com → seu projeto → Settings
  const CLARITY_ID = 'XXXXXXXXXX';
  if (CLARITY_ID !== 'XXXXXXXXXX') {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,'clarity','script',CLARITY_ID);
  }
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 450);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
(function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function() {
      const item   = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // close others
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        i.querySelector('i').className = 'fas fa-plus';
      });
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        this.querySelector('i').className = 'fas fa-minus';
      }
    });
  });
})();

/* ============================================================
   QUICK QUOTE FORM
   ============================================================ */
(function initQuickQuote() {
  const form   = document.getElementById('quickQuoteForm');
  const status = document.getElementById('qqStatus');
  const btn    = document.getElementById('qqSubmitBtn');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome     = form.querySelector('#qq-nome').value.trim();
    const telefone = form.querySelector('#qq-whats').value.trim();
    const servico  = form.querySelector('#qq-servico').value;
    const mensagem = form.querySelector('#qq-descricao').value.trim();

    if (!nome || !telefone || !servico) {
      showQQStatus('error', t('js.qqRequired', 'Preencha os campos obrigatórios (*).'));
      return;
    }

    btn.disabled = true;
    btn.querySelector('span').textContent = t('js.sending', 'Enviando…');

    try {
      if (typeof supabase !== 'undefined') {
        await supabase.from('leads').insert({
          nome, telefone, servico,
          mensagem: mensagem || 'Orçamento rápido via site',
          origem: 'orcamento_rapido'
        });
      }
      showQQStatus('success', t('js.qqSuccess', '✓ Solicitação recebida! Entraremos em contato em breve.'));
      form.reset();
    } catch (_) {
      // fallback: open WhatsApp
      const txt = encodeURIComponent('Olá! Sou ' + nome + ', tenho interesse em: ' + servico + '. ' + mensagem);
      window.open('https://wa.me/5531990656645?text=' + txt, '_blank');
      showQQStatus('success', t('js.qqRedirect', '✓ Redirecionando para o WhatsApp…'));
    } finally {
      btn.disabled = false;
      btn.querySelector('span').textContent = t('qq.submit', 'Solicitar Orçamento Grátis');
    }
  });

  function showQQStatus(type, msg) {
    if (!status) return;
    status.className = 'form-status ' + (type === 'success' ? 'status-ok' : 'status-err');
    status.textContent = msg;
    if (type === 'success') setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 6000);
  }
})();

/* ============================================================
   PARTICLE CANVAS
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const COUNT = 75;
  const MAX_DIST = 130;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    build();
  }

  function build() {
    particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * .45,
      vy: (Math.random() - .5) * .45,
      r:  Math.random() * 1.8 + .6,
      op: Math.random() * .45 + .1,
      hue: Math.random() > .5 ? '#00d4ff' : '#7b2fff'
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < COUNT; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.hue;
      ctx.globalAlpha = p.op;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${(1 - d / MAX_DIST) * .22})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(tick);
  }

  resize();
  tick();
  window.addEventListener('resize', resize);
})();

/* ============================================================
   NAVBAR — scroll & active link
   ============================================================ */
(function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const toggle  = document.getElementById('navToggle');
  const menu    = document.getElementById('navMenu');
  const links   = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    setActive();
  });

  function setActive() {
    let current = '';
    document.querySelectorAll('section[id]').forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }

  /* mobile toggle */
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    const [s1, s2, s3] = toggle.querySelectorAll('span');
    if (open) {
      s1.style.transform = 'rotate(45deg) translate(5px,5px)';
      s2.style.opacity   = '0';
      s3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      s1.style.transform = s3.style.transform = '';
      s2.style.opacity = '';
    }
  });

  links.forEach(l => l.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    const [s1, s2, s3] = toggle.querySelectorAll('span');
    s1.style.transform = s3.style.transform = '';
    s2.style.opacity = '';
  }));
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: .12 });

  document.querySelectorAll(
    '.reveal, .service-card, .product-card, .contact-card, .cta-banner, .hero-badges'
  ).forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
})();

/* ============================================================
   SMOOTH SCROLL (anchor links)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ============================================================
   FOOTER YEAR
   ============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============================================================
   SERVICE CARD SUBTLE MOUSE PARALLAX
   ============================================================ */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - .5) * 10;
    const y = ((e.clientY - rect.top)  / rect.height - .5) * 10;
    card.style.transform = `translateY(-10px) rotateY(${x * .3}deg) rotateX(${-y * .3}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ============================================================
   PRODUCT CARD MOUSE GLOW FOLLOW
   ============================================================ */
document.querySelectorAll('.product-card').forEach(card => {
  const glow = card.querySelector('.product-glow');
  if (!glow) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.left = (x - 80) + 'px';
    glow.style.top  = (y - 80) + 'px';
    glow.style.right = 'auto';
  });
  card.addEventListener('mouseleave', () => {
    glow.style.left = '';
    glow.style.top  = '';
    glow.style.right = '-60px';
  });
});

/* ============================================================
   TILE STAGGER ANIMATION
   ============================================================ */
(function animateTiles() {
  const tileObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.tile').forEach((tile, i) => {
        tile.style.opacity = '0';
        tile.style.transform = 'scale(.8)';
        setTimeout(() => {
          tile.style.transition = 'opacity .5s ease, transform .5s ease';
          tile.style.opacity = '1';
          tile.style.transform = 'scale(1)';
        }, i * 80);
      });
      tileObserver.unobserve(entry.target);
    });
  }, { threshold: .2 });

  const techTiles = document.querySelector('.tech-tiles');
  if (techTiles) tileObserver.observe(techTiles);
})();
