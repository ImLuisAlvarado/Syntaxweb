import { promises } from '../data/content';

export default function Promises() {
  return (
    <section id="promises" className="py-20 bg-syntax-black relative border-b-4 border-syntax-purple">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
            Nuestro proposito
          </div>
          <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white">PROMESAS DE AMOR</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            Compromisos sagrados que nos guían como sociedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise) => (
            <div
              key={promise.number}
              className="bg-syntax-charcoal border-2 border-syntax-purple p-6 relative group hover:border-syntax-yellow transition duration-300"
            >
              <div className="absolute top-0 right-0 bg-syntax-purple text-white font-black text-xs px-3 py-1 uppercase">
                {promise.number}
              </div>
              <div className="text-syntax-purple text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className={promise.icon} />
              </div>
              <h3 className="text-white font-black text-xl mb-2">{promise.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{promise.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
