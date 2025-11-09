export default function Blog() {
  const posts = [
    {
      title: 'The Art of Cold Beverage Branding',
      excerpt: 'How playful visuals and tactile motion make drinks irresistible online.',
      date: 'Oct 2025',
    },
    {
      title: 'Brew Science: Perfect Chill Every Time',
      excerpt: 'We dive into the cooling curve for maximum flavor and refreshment.',
      date: 'Sep 2025',
    },
    {
      title: 'Behind the Can: Sustainable Packaging',
      excerpt: 'Our approach to eco-friendly materials without compromising the vibe.',
      date: 'Aug 2025',
    },
  ];

  return (
    <section id="blog" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">From the journal</h2>
          <p className="mt-2 text-slate-600">Updates, stories, and playful sips.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="text-xs font-medium text-slate-500">{p.date}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.excerpt}</p>
              <button className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
