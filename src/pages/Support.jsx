import {
    Search,
    MessageCircle,
    Mail,
    HelpCircle,
    ChevronRight,
    ArrowRight,
} from "lucide-react";

import { faqs, quickLinks } from '../data/games.jsx'

export const Support = () => {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* HERO */}
            <section className="relative overflow-hidden border-b border-white/5">

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[120px]" />
                </div>

                {/* Grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:50px_50px]" />

                <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-8">

                    <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-emerald-400/30 bg-emerald-400/5">
                        <MessageCircle
                            size={24}
                            className="text-emerald-400"
                        />
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-emerald-400">
                        SUPPORT TERMINAL
                    </p>

                    <h1 className="mt-5 font-mono text-4xl font-black uppercase tracking-tight sm:text-6xl">
                        How can we
                        <span className="text-emerald-400"> help?</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl font-mono text-xs leading-6 text-gray-500">
                        Find answers, troubleshoot your orders, or connect with
                        our support team.
                    </p>

                    {/* SEARCH */}
                    <div className="mx-auto mt-10 flex max-w-2xl items-center border border-white/10 bg-white/[0.03] px-4 py-4 transition focus-within:border-emerald-400/40">

                        <Search
                            size={18}
                            className="mr-3 shrink-0 text-gray-600"
                        />

                        <input
                            type="text"
                            placeholder="Search help articles..."
                            className="w-full bg-transparent font-mono text-xs text-white outline-none placeholder:text-gray-700"
                        />

                        <span className="hidden border border-white/10 px-2 py-1 font-mono text-[8px] text-gray-500 sm:block">
                            SEARCH
                        </span>
                    </div>

                </div>
            </section>

            {/* QUICK SUPPORT */}
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

                <div className="mb-10">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400">
                        QUICK ACCESS
                    </p>

                    <h2 className="mt-3 font-mono text-2xl font-bold uppercase">
                        What do you need?
                    </h2>
                </div>

                <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

                    {quickLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.title}
                                className="group bg-black p-6 text-left transition hover:bg-white/[0.03]"
                            >
                                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] transition group-hover:border-emerald-400/30 group-hover:bg-emerald-400/5">
                                    <Icon
                                        size={18}
                                        className="text-gray-500 transition group-hover:text-emerald-400"
                                    />
                                </div>

                                <h3 className="font-mono text-xs font-bold uppercase">
                                    {item.title}
                                </h3>

                                <p className="mt-2 font-mono text-[10px] leading-5 text-gray-600">
                                    {item.description}
                                </p>

                                <div className="mt-5 flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-gray-700 transition group-hover:text-emerald-400">
                                    View help
                                    <ChevronRight size={12} />
                                </div>
                            </button>
                        );
                    })}

                </div>
            </section>

            {/* FAQ */}
            <section className="border-y border-white/5 bg-white/[0.015]">

                <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

                    <div className="mb-10 flex items-end justify-between">

                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400">
                                KNOWLEDGE BASE
                            </p>

                            <h2 className="mt-3 font-mono text-2xl font-bold uppercase">
                                Frequently asked
                            </h2>
                        </div>

                        <HelpCircle
                            size={24}
                            className="hidden text-gray-800 sm:block"
                        />

                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                        {faqs.map((faq, index) => {
                            const Icon = faq.icon;

                            return (
                                <div
                                    key={faq.title}
                                    className="group border border-white/10 bg-black p-6 transition hover:border-emerald-400/20"
                                >
                                    <div className="flex gap-5">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02]">
                                            <Icon
                                                size={17}
                                                className="text-emerald-400"
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 font-mono text-[8px] text-gray-700">
                                                FAQ_{String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>

                                            <h3 className="font-mono text-xs font-bold uppercase">
                                                {faq.title}
                                            </h3>

                                            <p className="mt-3 font-mono text-[10px] leading-6 text-gray-600">
                                                {faq.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08),transparent_60%)]" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-8">

                    <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-emerald-400/30 bg-emerald-400/5">
                        <Mail
                            size={23}
                            className="text-emerald-400"
                        />
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-emerald-400">
                        HUMAN SUPPORT
                    </p>

                    <h2 className="mt-5 font-mono text-3xl font-black uppercase sm:text-5xl">
                        Still need
                        <span className="text-emerald-400"> help?</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl font-mono text-xs leading-6 text-gray-600">
                        Our support team is ready to help you with orders,
                        payments, accounts, and game top-ups.
                    </p>

                    <button
                        className="group mt-9 inline-flex items-center gap-3 bg-emerald-400 px-8 py-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]"
                    >
                        <MessageCircle size={15} />
                        Contact Support

                        <ArrowRight
                            size={14}
                            className="transition group-hover:translate-x-1"
                        />
                    </button>

                </div>
            </section>

        </main>
    );
}


