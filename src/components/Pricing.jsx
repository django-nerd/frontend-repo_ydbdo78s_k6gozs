export default function Pricing() {
  const tiers = [
    {
      name: 'Single Can',
      price: 2.99,
      features: ['250ml can', 'Classic flavor', 'Chilled delivery'],
    },
    {
      name: 'Six Pack',
      price: 15.99,
      features: ['6 x 250ml', 'Mix flavors', 'Best value'],
      highlight: true,
    },
    {
      name: 'Case',
      price: 29.99,
      features: ['12 x 250ml', 'Free shipping', 'VIP support'],
    },
  ];

  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Simple pricing</h2>
          <p className="mt-2 text-slate-600">Pick the pack that fits your thirst.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'} p-6 shadow-sm`}>
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-2 text-4xl font-bold text-slate-900">${t.price.toFixed(2)}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 font-semibold ${t.highlight ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
