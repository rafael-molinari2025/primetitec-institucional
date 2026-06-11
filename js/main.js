/* RM PrimeTI Tecnologia — main.js */

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
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el) {
  const target   = +el.dataset.target;
  const duration = 1800;
  const start    = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ============================================================
   SCROLL REVEAL + COUNTER TRIGGER
   ============================================================ */
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.stat-number[data-target]')
        .forEach(animateCounter);
      io.unobserve(entry.target);
    });
  }, { threshold: .12 });

  document.querySelectorAll(
    '.reveal, .service-card, .product-card, .contact-card, .cta-banner, .hero-stats'
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
