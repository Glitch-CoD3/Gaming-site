const ProductCard = ({ product }) => {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-[#070a0a] transition duration-300 hover:border-emerald-400/20">

      {/* Featured */}
      {product.featured && (
        <div className="absolute right-3 top-3 z-10 border border-emerald-400/30 bg-emerald-400/10 px-2 py-1">
          <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-emerald-400">
            Featured
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.12),transparent_65%)]" />

        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 h-28 w-28 object-contain transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Product Info */}
      <div className="border-t border-white/10 p-4">

        <div className="mb-3 flex items-center justify-between">

          <div>
            <p className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
              {product.game}
            </p>

            <h3 className="mt-1 font-mono text-sm font-bold text-white">
              {product.name}
            </h3>
          </div>

          <div className="border border-white/10 px-2 py-1">
            <span className="font-mono text-[9px] text-gray-500">
              {product.amount}
            </span>
          </div>

        </div>

        <div className="flex items-end justify-between">

          <div>
            <p className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
              Price
            </p>

            <p className="mt-1 font-mono text-lg font-black text-emerald-400">
              ৳{product.price}
            </p>
          </div>

          <button className="
            border border-emerald-400/30
            bg-emerald-400
            px-4 py-2.5
            font-mono text-[9px]
            font-black uppercase
            tracking-widest
            text-black
            transition
            hover:bg-emerald-300
            hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]
          ">
            Buy
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;