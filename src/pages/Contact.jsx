import {
    Mail,
    MessageCircle,
    MapPin,
    Send,
    ArrowUpRight,
    Terminal,
    ShieldCheck,
} from "lucide-react";

export const Contact = () => {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden border-b border-white/5">

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[130px]" />
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:50px_50px]" />

                <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">

                    <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-emerald-400/30 bg-emerald-400/5">
                        <Terminal
                            size={24}
                            className="text-emerald-400"
                        />
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-emerald-400">
                        COMMUNICATION TERMINAL
                    </p>

                    <h1 className="mt-5 font-mono text-4xl font-black uppercase tracking-tight sm:text-6xl">
                        Let's
                        <span className="text-emerald-400"> connect.</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl font-mono text-xs leading-6 text-gray-500">
                        Have a question, business idea, technical issue, or
                        just want to talk gaming? Send a message.
                    </p>

                </div>
            </section>

            {/* ================= ADMIN PROFILE ================= */}
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* PROFILE CARD */}
                    <div className="relative overflow-hidden border border-white/10 bg-white/[0.02]">

                        {/* Top accent */}
                        <div className="h-px w-full bg-emerald-400/40" />

                        <div className="p-7 sm:p-9">

                            <div className="mb-8 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-emerald-400">
                                    ADMIN_PROFILE
                                </span>

                                <span className="ml-auto font-mono text-[8px] text-gray-700">
                                    ONLINE
                                </span>
                            </div>

                            {/* PHOTO */}
                            <div className="relative mx-auto w-fit">

                                <div className="absolute -inset-2 border border-emerald-400/10" />

                                <div className="relative h-40 w-40 overflow-hidden border border-emerald-400/30 bg-black">
                                    <img
                                        src="/games/admin.jpeg"
                                        alt="Admin"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Online indicator */}
                                <div className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center border border-black bg-emerald-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                                </div>

                            </div>

                            {/* NAME */}
                            <div className="mt-7 text-center">

                                <h2 className="font-mono text-2xl font-black uppercase">
                                    ME!
                                </h2>

                                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-400">
                                    Founder / Developer
                                </p>

                            </div>

                            {/* ABOUT */}
                            <div className="mt-8 border-t border-white/5 pt-7">

                                <p className="mb-3 font-mono text-[8px] uppercase tracking-[0.25em] text-gray-500">
                                    ABOUT
                                </p>

                                <p className="font-mono text-[10px] leading-6 text-gray-500">
                                    THE GAMER is built by a developer who loves
                                    gaming, technology, and creating simple
                                    digital experiences for gamers.
                                </p>

                                <p className="mt-4 font-mono text-[10px] leading-6 text-gray-500">
                                    The goal is simple — make game top-ups
                                    faster, easier, and more reliable for
                                    everyone.
                                </p>

                            </div>

                            {/* SOCIALS */}
                            <div className="mt-7 flex gap-2">

                                <a
                                    href="#"
                                    aria-label="GitHub"
                                    className="flex h-10 w-10 items-center justify-center border border-white/10 font-mono text-xs font-bold text-gray-500 transition hover:border-emerald-400/30 hover:text-emerald-400"
                                >
                                    GH
                                </a>

                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="flex h-10 w-10 items-center justify-center border border-white/10 font-mono text-xs font-bold text-gray-500 transition hover:border-emerald-400/30 hover:text-emerald-400"
                                >
                                    IN
                                </a>

                                <a
                                    href="mailto:support@thegamer.com"
                                    aria-label="Email"
                                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-gray-500 transition hover:border-emerald-400/30 hover:text-emerald-400"
                                >
                                    <Mail size={16} />
                                </a>

                            </div>

                        </div>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="border border-white/10 bg-white/[0.02]">

                        <div className="border-b border-white/10 px-7 py-5">
                            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400">
                                CONTACT_CHANNELS
                            </p>
                        </div>

                        <div className="divide-y divide-white/5">

                            {/* EMAIL */}
                            <a
                                href="mailto:support@thegamer.com"
                                className="group flex items-center gap-5 p-7 transition hover:bg-white/[0.02]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black">
                                    <Mail
                                        size={18}
                                        className="text-gray-500 transition group-hover:text-emerald-400"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="font-mono text-[8px] uppercase tracking-widest text-gray-400">
                                        EMAIL
                                    </p>

                                    <p className="mt-2 truncate font-mono text-xs text-blue-600">
                                        support@thegamer.com
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={15}
                                    className="text-gray-700 transition group-hover:text-emerald-400"
                                />
                            </a>

                            {/* CHAT */}
                            <button
                                className="group flex w-full items-center gap-5 p-7 text-left transition hover:bg-white/[0.02]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black">
                                    <MessageCircle
                                        size={18}
                                        className="text-gray-500 transition group-hover:text-emerald-400"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="font-mono text-[8px] uppercase tracking-widest text-gray-400">
                                        LIVE CHAT
                                    </p>

                                    <p className="mt-2 font-mono text-xs text-gray-300">
                                        Talk directly with support
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={15}
                                    className="text-gray-700 transition group-hover:text-emerald-400"
                                />
                            </button>

                            {/* LOCATION */}
                            <div className="flex items-center gap-5 p-7">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black">
                                    <MapPin
                                        size={18}
                                        className="text-gray-500"
                                    />
                                </div>

                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-widest text-gray-400">
                                        BASE
                                    </p>

                                    <p className="mt-2 font-mono text-xs text-gray-300">
                                        Bangladesh
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* STATUS */}
                        <div className="m-7 flex items-center gap-3 border border-emerald-400/10 bg-emerald-400/[0.03] p-4">

                            <ShieldCheck
                                size={16}
                                className="text-emerald-400"
                            />

                            <p className="font-mono text-[9px] text-gray-500">
                                Usually responds within
                                <span className="text-emerald-400">
                                    {" "}24 hours
                                </span>
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= MESSAGE SECTION ================= */}
            <section className="border-y border-white/5 bg-white/[0.015]">

                <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400">
                                SEND TRANSMISSION
                            </p>

                            <h2 className="mt-4 font-mono text-3xl font-black uppercase sm:text-4xl">
                                Drop us a
                                <span className="text-emerald-400">
                                    {" "}message.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md font-mono text-xs leading-6 text-gray-500">
                                Whether you have an order problem, feedback,
                                partnership proposal, or just want to say
                                hello — we'd love to hear from you.
                            </p>
                        </div>

                        {/* FORM */}

                        <form className="space-y-4">

                            {/* Name + Email */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="YOUR NAME"
                                    className="w-full border border-white/20 bg-black px-4 py-4 font-mono text-[10px] text-white outline-none transition placeholder:text-gray-400 focus:border-emerald-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full border border-white/20 bg-black px-4 py-4 font-mono text-[10px] text-white outline-none transition placeholder:text-gray-400 focus:border-emerald-400"
                                />

                            </div>

                            {/* Gamer ID */}
                            <input
                                type="text"
                                name="gamerId"
                                placeholder="GAMER ID (OPTIONAL)"
                                className="w-full border border-white/20 bg-black px-4 py-4 font-mono text-[10px] text-white outline-none transition placeholder:text-gray-400 focus:border-emerald-400"
                            />

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="SUBJECT"
                                className="w-full border border-white/20 bg-black px-4 py-4 font-mono text-[10px] text-white outline-none transition placeholder:text-gray-400 focus:border-emerald-400"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="WRITE YOUR MESSAGE..."
                                className="w-full resize-none border border-white/20 bg-black px-4 py-4 font-mono text-[10px] text-white outline-none transition placeholder:text-gray-400 focus:border-emerald-400"
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 border border-emerald-400 bg-emerald-400 px-7 py-4 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.2)]"
                            >
                                <Send size={14} />

                                Send Transmission

                                <ArrowUpRight
                                    size={14}
                                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>

                        </form>


                    </div>

                </div>
            </section>

        </main>
    );
};

