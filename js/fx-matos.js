/* Fundo 3D do site Matos Barreto (three.js, arquivo local em vendor/). Se algo falhar, o site segue normal. */
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
    cam.position.z = 14;
    sc.add(new T.AmbientLight(0xffffff, 1.1));
    const dl = new T.DirectionalLight(0xffffff, 2.2); dl.position.set(5, 8, 6); sc.add(dl);
    const geos = [new T.BoxGeometry(1, 1, 1), new T.OctahedronGeometry(0.8), new T.IcosahedronGeometry(0.75, 0), new T.CylinderGeometry(0.5, 0.5, 1.1, 6)];
    const cols = [0xf5c400, 0xe8f3ea, 0x1b3c8f, 0x3fbf63, 0xf5c400];
    const wide = innerWidth >= 820, n = wide ? 26 : 12, items = [];
    const hw = 6.5 * (host.clientWidth / host.clientHeight);
    for (let i = 0; i < n; i++) {
      const m = new T.Mesh(geos[i % 4], new T.MeshStandardMaterial({ color: cols[i % 5], flatShading: true, roughness: 0.5, metalness: 0.1, transparent: true, opacity: wide ? 0.9 : 0.5 }));
      m.scale.setScalar(0.6 + Math.random() * 1.4);
      m.position.set(wide ? hw * (0.05 + Math.random()) : hw * (Math.random() * 2 - 1), (Math.random() - 0.5) * 13, (Math.random() - 0.5) * 8 - 2);
      m.rotation.set(Math.random() * 6, Math.random() * 6, 0);
      items.push({ m, sx: (Math.random() - 0.5) * 0.01, sy: (Math.random() - 0.5) * 0.012, ph: Math.random() * 6, y0: m.position.y, sp: 0.3 + Math.random() * 0.5 });
      sc.add(m);
    }
    const resize = () => { const w = host.clientWidth, h = host.clientHeight; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
    new ResizeObserver(resize).observe(host); resize();
    if (rm) { cam.lookAt(0, 0, 0); r.render(sc, cam); return; }
    let mx = 0, my = 0, vis = true, t = 0;
    addEventListener("pointermove", e => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });
    new IntersectionObserver(e => { vis = e[0].isIntersecting; }).observe(host);
    (function frame() {
      if (vis) {
        t += 0.016;
        for (const o of items) { o.m.rotation.x += o.sx; o.m.rotation.y += o.sy; o.m.position.y = o.y0 + Math.sin(t * o.sp + o.ph) * 0.5; }
        cam.position.x += (mx * 3 - cam.position.x) * 0.03;
        cam.position.y += (-my * 2 - cam.position.y) * 0.03;
        cam.lookAt(0, 0, 0); r.render(sc, cam);
      }
      requestAnimationFrame(frame);
    })();
  } catch (e) { document.querySelector(".hero canvas")?.remove(); }
}
if (host && !saver) ("requestIdleCallback" in window ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 300));
