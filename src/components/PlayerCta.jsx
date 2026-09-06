import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {
    Terminal,
    LockKeyhole,
    ArrowRight,
    Gamepad2,
} from "lucide-react";
export const PlayerCta = () => {
    const { user } = useAuth();
    return (
        <>
            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08),transparent_60%)]" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-8">

                    <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-emerald-400/30 bg-emerald-400/5">
                        <Terminal
                            size={24}
                            className="text-emerald-400"
                        />
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-emerald-400">
                        PLAYER ACCESS TERMINAL
                    </p>

                    <h2 className="mt-5 font-mono text-4xl font-black uppercase tracking-tight sm:text-6xl">
                        Ready to
                        <span className="text-emerald-400"> deploy?</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl font-mono text-xs leading-6 text-gray-600">
                        Join THE GAMER network and start topping up your favorite
                        games in seconds.
                    </p>

                    {!user ? (
                        <Link
                            to="/login"
                            className="group mt-9 inline-flex items-center gap-3 bg-emerald-400 px-8 py-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]"
                        >
                            <LockKeyhole size={15} />
                            Enter Network
                            <ArrowRight
                                size={14}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    ) : (
                        <Link
                            to="/shopping"
                            className="group mt-9 inline-flex items-center gap-3 bg-emerald-400 px-8 py-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]"
                        >
                            <Gamepad2 size={15} />
                            Start Shopping
                            <ArrowRight
                                size={14}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    )}

                </div>
            </section>
        </>
    )
}