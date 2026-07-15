(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Quieter waveform / spectrum — speech identity without overpowering photo
  const canvas = document.getElementById("wave");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const bands = 48;
      const gap = w / bands;
      for (let i = 0; i < bands; i++) {
        const n =
          0.28 +
          0.22 * Math.sin(t * 0.75 + i * 0.33) +
          0.16 * Math.sin(t * 1.4 + i * 0.11) +
          0.1 * Math.sin(t * 0.28 + i * 0.55);
        const bh = Math.max(6, n * h * 0.42);
        const x = i * gap + gap * 0.22;
        const y = h * 0.62 - bh * 0.5;
        const grad = ctx.createLinearGradient(0, y, 0, y + bh);
        grad.addColorStop(0, "rgba(62, 198, 176, 0.32)");
        grad.addColorStop(1, "rgba(217, 166, 106, 0.04)");
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, gap * 0.5, bh);
      }

      ctx.globalAlpha = 0.1;
      for (let row = 0; row < 6; row++) {
        const yy = h * 0.2 + row * (h * 0.075);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 10) {
          const yy2 =
            yy +
            Math.sin(x * 0.009 + t * 0.65 + row) * 8 +
            Math.sin(x * 0.0025 - t * 0.35) * 5;
          if (x === 0) ctx.moveTo(x, yy2);
          else ctx.lineTo(x, yy2);
        }
        ctx.strokeStyle = row % 2 === 0 ? "#3ec6b0" : "#d9a66a";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (!reduceMotion) {
        t += 0.012;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", () => {
      resize();
      if (reduceMotion) draw();
    });
    window.addEventListener("beforeunload", () => cancelAnimationFrame(raf));
  }

  // Scroll reveal for content sections
  const items = document.querySelectorAll(".section");
  items.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("visible"));
  }
})();
