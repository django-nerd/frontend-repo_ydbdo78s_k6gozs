import { useState } from 'react';

export default function Shop() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="shop" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Cold Brew Can</h2>
            <p className="mt-3 text-slate-600">
              Crisp, refreshing, and brewed to perfection. Choose your quantity and checkout securely.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <label htmlFor="qty" className="text-sm font-medium text-slate-700">Quantity</label>
              <input
                id="qty"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-24 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button className="rounded-md bg-emerald-500 px-5 py-2.5 font-semibold text-white hover:bg-emerald-600">Order now</button>
            </div>
            <p className="mt-3 text-sm text-slate-500">$2.99 per can. Free returns within 30 days.</p>
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-full items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-gradient-to-br from-emerald-300 to-sky-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
