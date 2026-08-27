import { events } from '../data/content';

export default function Events() {
  return (
    <section id="dedications" className="py-20 bg-syntax-charcoal relative border-b-4 border-syntax-purple">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
            Nuestra proxima cita
          </div>
          <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white">PROXIMOS EVENTOS</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            Eventos en puerta esperando tu presencia para ser realmente inolvidables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.number}
              className="bg-syntax-black border-2 border-syntax-purple p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-syntax-purple font-black text-xs uppercase tracking-widest">
                      Evento #{event.number}
                    </span>
                    <h3 className="text-white font-black text-2xl mt-1">{event.title}</h3>
                  </div>
                  <div className="bg-syntax-purple text-white p-3 text-lg rounded-full">
                    <i className={event.icon} />
                  </div>
                </div>
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">"{event.quote}"</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-3 flex items-center justify-between text-xs font-bold">
                <span className="text-zinc-400">{event.status}</span>
                <span className="text-syntax-yellow">
                  <i className="fa-solid fa-heart" /> {event.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
