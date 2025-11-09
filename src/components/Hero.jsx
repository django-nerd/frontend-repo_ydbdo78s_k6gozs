import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Fresh beverages, delivered cold
        </span>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Sip the Future
          <span className="block text-emerald-300">Cold Brew. Cooler Web.</span>
        </h1>
        <p className="mt-4 max-w-xl text-slate-200">
          A clean, modern storefront for premium drinks with secure checkout, order history, and a cozy journal.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#shop" className="rounded-md bg-emerald-400 px-5 py-3 text-slate-900 font-semibold hover:bg-emerald-300 transition-colors">Shop now</a>
          <a href="#pricing" className="rounded-md bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 transition-colors">View pricing</a>
        </div>
      </div>
    </section>
  );
}
