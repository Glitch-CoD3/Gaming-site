import { Link } from "react-router-dom";
import {
    ArrowRight,
} from "lucide-react";
import { games } from '../data/games'
import { GameCard } from "../components/GameCard.jsx";

export const GameSelector = () => {
    return (
        <>
            <section className="relative border-b border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="font-mono text-[9px] text-emerald-400">
                                    01
                                </span>

                                <div className="h-px w-8 bg-emerald-400/40" />

                                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-green-600">
                                    Game Network
                                </span>
                            </div>

                            <h2 className="font-mono text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                                Choose your
                                <span className="text-emerald-400"> battlefield.</span>
                            </h2>

                            <p className="mt-4 max-w-xl font-mono text-xs leading-6 text-gray-600">
                                Select a game and access available credits, points,
                                diamonds and top-up packages.
                            </p>
                        </div>

                        <Link
                            to="/games"
                            className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-gray-500 transition hover:text-emerald-400"
                        >
                            View all games
                            <ArrowRight size={13} />
                        </Link>

                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {games.map((game) => (
                            <GameCard
                                key={game.id}
                                game={game}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}