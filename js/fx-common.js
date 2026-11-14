/* Efeitos compartilhados (sem dependências): aparecer ao rolar e inclinação do logotipo. */
(() => {
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (rm || !("IntersectionObserver" in window)) return;
  const els = [...document.querySelectorAll(".card,.pc,.sh,.tb,.jm,.cat,.note,.gamer,.big,form,.shots,.main,.fl li,.chips")];
  els.forEach((e, i) => { e.classList.add("rv"); e.style.setProperty("--d", (i % 4) * 70 + "ms"); });
  const io = new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
  }), { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
  els.forEach(e => io.observe(e));
  document.querySelectorAll("[data-tilt] img").forEach(img => {
    addEventListener("pointermove", e => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      img.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 14).toFixed(2)}deg)`;
    }, { passive: true });
  });
})();
