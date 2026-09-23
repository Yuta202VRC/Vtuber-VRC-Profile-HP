(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const toggle = document.querySelector('#pause-motion');
  const cards = [...document.querySelectorAll('.activity-card')];
  const tilts = [...document.querySelectorAll('.persona-tilt')];
  const disabled = () => reduced.matches || toggle.checked;
  let observer;

  // Observe each photo card once; content remains visible without JavaScript.
  function setupMotion() {
    observer?.disconnect();
    document.body.classList.toggle('motion-disabled', disabled());
    tilts.forEach(el => el.style.transform = '');
    if (disabled() || !('IntersectionObserver' in window)) {
      cards.forEach(el => el.classList.remove('reveal-pending'));
      return;
    }
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        entry.target.dataset.revealed = 'true';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    cards.forEach(el => {
      if (el.dataset.revealed) return;
      el.classList.add('reveal-pending');
      observer.observe(el);
    });
  }
  tilts.forEach(el => {
    el.addEventListener('pointermove', event => {
      if (disabled() || !finePointer.matches || event.pointerType === 'touch') return;
      const r = el.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX-r.left)/r.width*2-1));
      const y = Math.max(-1, Math.min(1, (event.clientY-r.top)/r.height*2-1));
      el.style.transform = `perspective(800px) rotateX(${-y*4}deg) rotateY(${x*5}deg)`;
    });
    el.addEventListener('pointerleave', () => el.style.transform = '');
  });
  cards.forEach(el => el.addEventListener('focusin', () => {
    el.classList.remove('reveal-pending');
    el.dataset.revealed = 'true';
  }));
  toggle.addEventListener('change', setupMotion);
  reduced.addEventListener('change', setupMotion);
  finePointer.addEventListener('change', () => tilts.forEach(el => el.style.transform = ''));
  setupMotion();
})();
