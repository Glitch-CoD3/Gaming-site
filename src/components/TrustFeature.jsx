import {
  Zap,
  ShieldCheck,
  Headphones,
} from "lucide-react";


export const TrustFeature = () => {
    return (
        <>
            <section className="border-b border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

                    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">

                        <div className="bg-[#060808] p-7 transition hover:bg-[#080c0c]">

                            <Zap className="mb-6 text-emerald-400" size={22} />

                            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-emerald-400">
                                SPEED // 001
                            </p>

                            <h3 className="mt-2 font-mono text-lg font-bold uppercase">
                                Instant Delivery
                            </h3>

                            <p className="mt-3 font-mono text-[10px] leading-5 text-gray-600">
                                Automated delivery means your credits can reach your
                                game account within moments.
                            </p>

                        </div>


                        <div className="bg-[#060808] p-7 transition hover:bg-[#080c0c]">

                            <ShieldCheck className="mb-6 text-emerald-400" size={22} />

                            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-emerald-400">
                                SECURITY // 002
                            </p>

                            <h3 className="mt-2 font-mono text-lg font-bold uppercase">
                                Secure Payments
                            </h3>

                            <p className="mt-3 font-mono text-[10px] leading-5 text-gray-600">
                                Payment and account flows are designed with modern
                                security practices.
                            </p>

                        </div>


                        <div className="bg-[#060808] p-7 transition hover:bg-[#080c0c]">

                            <Headphones className="mb-6 text-emerald-400" size={22} />

                            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-emerald-400">
                                SUPPORT // 003
                            </p>

                            <h3 className="mt-2 font-mono text-lg font-bold uppercase">
                                24/7 Support
                            </h3>

                            <p className="mt-3 font-mono text-[10px] leading-5 text-gray-600">
                                Something went wrong? Our support network is ready to
                                help with your order.
                            </p>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}