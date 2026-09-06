import { Activity } from "lucide-react";

import ProductCard from "../components/ProductCard.jsx";
import { products } from '../data/games'

export const TrendingProduct = () => {
    return (
        <>
            <section className="relative border-b border-white/10 bg-[#040606]">

                <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

                    <div className="mb-12">

                        <div className="mb-4 flex items-center gap-3">
                            <span className="font-mono text-[9px] text-emerald-400">
                                02
                            </span>

                            <div className="h-px w-8 bg-emerald-400/40" />

                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
                                Popular Packages
                            </span>
                        </div>

                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

                            <div>
                                <h2 className="font-mono text-3xl font-black uppercase tracking-tight sm:text-5xl">
                                    Trending
                                    <span className="text-emerald-400"> drops.</span>
                                </h2>

                                <p className="mt-4 font-mono text-xs text-gray-600">
                                    Fast-moving packages from the network.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 border border-white/10 px-3 py-2">
                                <Activity size={12} className="text-emerald-400" />

                                <span className="font-mono text-[8px] uppercase tracking-widest text-gray-500">
                                    Demand: HIGH
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}