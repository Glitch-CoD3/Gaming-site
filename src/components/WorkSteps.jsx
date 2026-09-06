import { Zap, UserRound, CreditCard } from "lucide-react";

export const WorkSteps = () => {
    return (
        <>
            <section className="border-b border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">

                        <div className="mb-4 flex items-center justify-center gap-3">
                            <span className="font-mono text-[9px] text-emerald-400">
                                03
                            </span>

                            <div className="h-px w-8 bg-emerald-400/40" />

                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
                                Deployment Protocol
                            </span>
                        </div>

                        <h2 className="font-mono text-3xl font-black uppercase sm:text-5xl">
                            Three steps.
                            <span className="text-emerald-400"> Zero headache.</span>
                        </h2>

                        <p className="mt-5 font-mono text-xs leading-6 text-gray-600">
                            Your game credit reaches your account without complicated
                            checkout processes.
                        </p>

                    </div>


                    <div className="relative mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">

                        {/* connecting line */}
                        <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent md:block" />


                        {/* step 1 */}
                        <div className="relative border border-white/10 bg-[#070909] p-7 text-center transition hover:border-emerald-400/30">

                            <div className="relative mx-auto flex h-20 w-20 items-center justify-center border border-emerald-400/20 bg-emerald-400/[0.03]">
                                <UserRound size={25} className="text-emerald-400" />

                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center bg-emerald-400 font-mono text-[8px] font-black text-black">
                                    01
                                </span>
                            </div>

                            <h3 className="mt-7 font-mono text-sm font-bold uppercase">
                                Select Game
                            </h3>

                            <p className="mt-3 font-mono text-[10px] leading-5 text-gray-600">
                                Choose PUBG, Free Fire, COD or any supported game.
                            </p>

                        </div>


                        {/* step 2 */}
                        <div className="relative border border-white/10 bg-[#070909] p-7 text-center transition hover:border-emerald-400/30">

                            <div className="relative mx-auto flex h-20 w-20 items-center justify-center border border-emerald-400/20 bg-emerald-400/[0.03]">
                                <CreditCard size={25} className="text-emerald-400" />

                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center bg-emerald-400 font-mono text-[8px] font-black text-black">
                                    02
                                </span>
                            </div>

                            <h3 className="mt-7 font-mono text-sm font-bold uppercase">
                                Enter Player ID
                            </h3>

                            <p className="mt-3 font-mono text-[10px] leading-5 text-gray-600">
                                Enter your correct game ID and choose your package.
                            </p>

                        </div>


                        {/* step 3 */}
                        <div className="relative border border-white/10 bg-[#070909] p-7 text-center transition hover:border-emerald-400/30">

                            <div className="relative mx-auto flex h-20 w-20 items-center justify-center border border-emerald-400/20 bg-emerald-400/[0.03]">
                                <Zap size={25} className="text-emerald-400" />

                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center bg-emerald-400 font-mono text-[8px] font-black text-black">
                                    03
                                </span>
                            </div>

                            <h3 className="mt-7 font-mono text-sm font-bold uppercase">
                                Receive Credit
                            </h3>

                            <p className="mt-3 font-mono text-[10px] leading-5 text-gray-600">
                                Complete payment and receive your game credit instantly.
                            </p>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}