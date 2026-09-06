export const GameCard = ({ game }) => {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-[#080c0c] transition duration-500 hover:-translate-y-1 hover:border-emerald-400/30">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover transition duration-700 "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030505] via-black/30 to-transparent" />

        {/* Game status */}
        <div className="absolute left-4 top-4 flex items-center gap-2 border border-emerald-400/20 bg-black/60 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />

          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">
            Available
          </span>
        </div>

        {/* Game name */}
        <div className="absolute bottom-5 left-5">
          <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-400">
            GAME // {game.code}
          </p>

          <h3 className="font-mono text-2xl font-black uppercase text-white">
            {game.name}
          </h3>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between border-t border-white/10 p-4">

        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-blue-200">
            Starting from
          </p>

          <p className="mt-1 font-mono text-sm font-bold text-white">
            ৳{game.startingPrice}
          </p>
        </div>

        <button className="
          border border-emerald-400/30
          bg-emerald-400/[0.05]
          px-4 py-2
          font-mono text-[9px]
          font-bold uppercase
          tracking-widest
          text-emerald-400
          transition
          hover:bg-emerald-400
          hover:text-black
        ">
          Explore →
        </button>

      </div>

    </div>
  );
};
