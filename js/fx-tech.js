/* Fundo 3D da página de tecnologia: rede de pontos e linhas + poliedro em arame (three.js local). */
const host = document.querySelector(".hero");
const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const saver = navigator.connection && navigator.connection.saveData;
async function start() {
  try {
    const T = await import("../vendor/three.module.js");
    const cv = document.createElement("canvas");
    cv.setAttribute("aria-hidden", "true");
    host.prepend(cv);
    const r = new T.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
    r.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const sc = new T.Scene(), cam = new T.PerspectiveCamera(50, 1, 0.1, 100);
    cam.position.z = 18;
    const g = new T.Group(); sc.add(g);
    const N = innerWidth < 700 ? 34 : 70, P = new Float32Array(N * 3), V = [];
    for (let i = 0; i < N; i++) {
      P.set([Math.random() * 30 - 15, Math.random() * 14 - 7, Math.random() * 10 - 5], i * 3);
      V.push([(Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.015]);
    }
    const pg = new T.BufferGeometry(); pg.setAttribute("position", new T.BufferAttribute(P, 3));
    g.add(new T.Points(pg, new T.PointsMaterial({ color: 0x19e3ff, size: 0.18, transparent: true, opacity: 0.9 })));
    const pairs = (N * (N - 1)) / 2, LP = new Float32Array(pairs * 6), lg = new T.BufferGeometry();
    const la = new T.BufferAttribute(LP, 3); la.setUsage(T.DynamicDrawUsage); lg.setAttribute("position", la);
    g.add(new T.LineSegments(lg, new T.LineBasicMaterial({ color: 0x1d6bff, transparent: true, opacity: 0.5 })));
    const ico = new T.Mesh(new T.IcosahedronGeometry(3, 1), new T.MeshBasicMaterial({ color: 0x19e3ff, wireframe: true, transparent: true, opacity: innerWidth < 700 ? 0.15 : 0.28 }));
    ico.position.set(innerWidth < 700 ? 0 : 7, innerWidth < 700 ? -6 : 0, -2); g.add(ico);
    const update = () => {
      for (let i = 0; i < N; i++) for (let k = 0; k < 3; k++) {
        const lim = k === 0 ? 15 : k === 1 ? 7 : 5;
        P[i * 3 + k] += V[i][k];
        if (Math.abs(P[i * 3 + k]) > lim) V[i][k] *= -1;
      }
      pg.attributes.position.needsUpdate = true;
      let c = 0;
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const dx = P[i * 3] - P[j * 3], dy = P[i * 3 + 1] - P[j * 3 + 1], dz = P[i * 3 + 2] - P[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < 14) { LP.set([P[i * 3], P[i * 3 + 1], P[i * 3 + 2], P[j * 3], P[j * 3 + 1], P[j * 3 + 2]], c * 6); c++; }
      }
      lg.setDrawRange(0, c * 2); la.needsUpdate = true;
    };
    const resize = () => { const w = host.clientWidth, h = host.clientHeight; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
    new ResizeObserver(resize).observe(host); resize();
    update();
    if (rm) { r.render(sc, cam); return; }
    let mx = 0, vis = true;
    addEventListener("pointermove", e => { mx = e.clientX / innerWidth - 0.5; }, { passive: true });
    new IntersectionObserver(e => { vis = e[0].isIntersecting; }).observe(host);
    (function frame() {
      if (vis) { update(); ico.rotation.x += 0.004; ico.rotation.y += 0.006; g.rotation.y += (mx * 0.5 - g.rotation.y) * 0.03; r.render(sc, cam); }
      requestAnimationFrame(frame);
    })();
  } catch (e) { document.querySelector(".hero canvas")?.remove(); }
}
if (host && !saver) ("requestIdleCallback" in window ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 300));
