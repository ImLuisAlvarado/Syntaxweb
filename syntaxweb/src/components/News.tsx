import { news } from '../data/content';

export default function News() {
  return (
    <section id="news" className="py-20 bg-syntax-charcoal relative border-b-4 border-syntax-purple">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
            Cartelera
          </div>
          <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white">NOTICIAS</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            Nuestra recapitulación de noticias, sucesos importantes y demás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((news) => (
            <div
              key={news.title}
              className="bg-syntax-black border-2 border-zinc-800 overflow-hidden group hover:border-syntax-purple transition duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.src = news.fallback;
                  }}
                />
                <div className="absolute top-2 left-2 bg-syntax-purple text-white text-xs font-black px-2 py-1 uppercase">
                  Noticia
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-black text-xl mb-1">{news.title}</h3>
                <p className="text-syntax-purple text-xs font-bold uppercase mb-3">{news.genre}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">"{news.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
