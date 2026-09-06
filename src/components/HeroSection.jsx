import {
  ArrowRight,
  Terminal,
  Gamepad2,
  CircleDot
} from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    return (
        <>
            <section className="relative min-h-[calc(100vh-72px)] overflow-hidden border-b border-white/10">

                {/* grid */}
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(52,211,153,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* glow */}
                <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[140px]" />

                <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-[120px]" />

                {/* terminal decorations */}
                <div className="absolute left-8 top-28 hidden font-mono text-[8px] leading-5 text-emerald-100/20 lg:block">
                    <p>ACCESSING_NETWORK...</p>
                    <p>AUTH: VERIFIED</p>
                    <p>NODE: BD-DHK-01</p>
                    <p>STATUS: ONLINE</p>
                    <p>ENCRYPTION: AES-256</p>
                    <p>PACKETS: 98.72%</p>
                </div>

                <div className="absolute right-8 top-32 hidden font-mono text-[8px] leading-5 text-gray-600 lg:block">
                    <p>GAME_SERVER_01</p>
                    <p>GAME_SERVER_02</p>
                    <p>GAME_SERVER_03</p>
                    <p>PAYMENT_NODE</p>
                    <p>DELIVERY_NODE</p>
                </div>

                <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-24 lg:px-8">

                    <div className="w-full">

                        {/* status */}
                        <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 lg:justify-start">
                            <CircleDot
                                size={10}
                                className="animate-pulse text-emerald-400"
                            />

                            <span className="text-emerald-400">
                                NETWORK ONLINE
                            </span>

                            <span className="text-gray-500">/</span>

                            <span>INSTANT GAME CREDIT</span>
                        </div>

                        {/* heading */}
                        <h1 className="mx-auto max-w-6xl text-center font-mono text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:mx-0 lg:text-left lg:text-[110px]">

                            <span className="block text-white">
                                ENTER
                            </span>

                            <span className="block text-emerald-400 [text-shadow:0_0_40px_rgba(52,211,153,0.25)]">
                                THE GAME.
                            </span>

                            <span className="mt-3 block text-gray-600">
                                LOAD YOUR POWER.
                            </span>
                        </h1>

                        {/* description */}
                        <p className="mx-auto mt-8 max-w-2xl text-center font-mono text-xs leading-6 text-gray-500 lg:mx-0 lg:text-left">
                            Buy game credits, UC, diamonds, CP and points instantly.
                            Select your game. Enter your player ID. Pay. Done.
                            <span className="text-gray-300">
                                {" "}
                                No unnecessary steps.
                            </span>
                        </p>

                        {/* buttons */}
                        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">

                            <Link
                                to="/games"
                                className="group flex w-full items-center justify-center gap-3 bg-emerald-400 px-7 py-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.25)] sm:w-auto"
                            >
                                <Gamepad2 size={15} />
                                Explore Games
                                <ArrowRight
                                    size={14}
                                    className="transition group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/how-it-works"
                                className="flex w-full items-center justify-center gap-3 border border-white/10 bg-white/[0.02] px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition hover:border-emerald-400/30 hover:text-white sm:w-auto"
                            >
                                <Terminal size={14} />
                                How It Works
                            </Link>

                        </div>

                        {/* stats */}
                        <div className="mt-16 grid max-w-3xl grid-cols-2 border-y border-white/10 sm:grid-cols-4">

                            <div className="border-r border-white/10 px-5 py-5">
                                <p className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
                                    Games
                                </p>
                                <p className="mt-2 font-mono text-xl font-bold text-white">
                                    20+
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-5 py-5">
                                <p className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
                                    Orders
                                </p>
                                <p className="mt-2 font-mono text-xl font-bold text-white">
                                    10K+
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-5 py-5">
                                <p className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
                                    Delivery
                                </p>
                                <p className="mt-2 font-mono text-xl font-bold text-emerald-400">
                                    INSTANT
                                </p>
                            </div>

                            <div className="px-5 py-5">
                                <p className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
                                    Network
                                </p>
                                <p className="mt-2 flex items-center gap-2 font-mono text-xl font-bold text-white">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                    LIVE
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* bottom terminal bar */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/30 px-6 py-2">
                    <div className="mx-auto flex max-w-7xl items-center justify-between font-mono text-[7px] uppercase tracking-[0.2em] text-gray-700">
                        <span>THE_GAMER // CORE_NETWORK</span>

                        <span className="hidden sm:block">
                            SYSTEM STATUS: <span className="text-emerald-500">100%</span>
                        </span>

                        <span>v2.026</span>
                    </div>
                </div>

            </section>

        </>
    )
}

