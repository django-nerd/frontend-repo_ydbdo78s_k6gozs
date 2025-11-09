import Hero from './components/Hero';
import Shop from './components/Shop';
import Pricing from './components/Pricing';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-emerald-400" />
            <span className="font-bold">ChillCan</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#shop" className="hover:text-emerald-300">Shop</a>
            <a href="#pricing" className="hover:text-emerald-300">Pricing</a>
            <a href="#blog" className="hover:text-emerald-300">Blog</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/20">Sign in</button>
            <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-emerald-300">Create account</button>
          </div>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Shop />
        <Pricing />
        <Blog />
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} ChillCan — All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
