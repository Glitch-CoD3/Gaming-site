import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="border-t border-white/10 bg-[#020404]">

                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                        {/* logo */}
                        <div>

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center border border-emerald-400/30 bg-emerald-400/5 font-mono text-sm font-bold text-emerald-400">
                                    &gt;_
                                </div>

                                <div>
                                    <p className="font-mono text-sm font-black tracking-widest">
                                        THE <span className="text-emerald-400">GAMER</span>
                                    </p>

                                    <p className="font-mono text-[7px] tracking-[0.25em] text-yellow-500">
                                        GAMING.NETWORK
                                    </p>
                                </div>

                            </div>

                            <p className="mt-4 max-w-sm font-mono text-[9px] leading-5 text-gray-500">
                                Game credits. Instant delivery. Built for players.
                            </p>

                        </div>


                        {/* links */}
                        <div className="flex flex-wrap gap-6 font-mono text-[8px] uppercase tracking-widest text-gray-400">

                            <Link
                                to="/games"
                                className="transition hover:text-emerald-400"
                            >
                                Games
                            </Link>

                            <Link
                                to="/orders"
                                className="transition hover:text-emerald-400"
                            >
                                Orders
                            </Link>

                            <Link
                                to="/support"
                                className="transition hover:text-emerald-400"
                            >
                                Support
                            </Link>

                            <Link
                                to="/privacy"
                                className="transition hover:text-emerald-400"
                            >
                                Privacy
                            </Link>

                            <Link
                                to="/terms"
                                className="transition hover:text-emerald-400"
                            >
                                Terms
                            </Link>

                        </div>

                    </div>


                    {/* bottom */}
                    <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <p className="font-mono text-[7px] uppercase tracking-widest text-green-700">
                            © 2026 THE GAMER // ALL SYSTEMS RESERVED
                        </p>

                        <div className="flex items-center gap-3 font-mono text-[7px] uppercase tracking-widest text-green-700">

                            <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                All systems operational
                            </span>

                            <span>•</span>

                            <span>BD // NETWORK</span>

                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}