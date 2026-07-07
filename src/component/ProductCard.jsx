import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({
  image,
  title,
  originalPrice,
  discountPrice,
  discount,
  rating = 5,
}) => {
  return (
    <div className="max-w-md rounded bg-white p-3 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden rounded">
        <img
          src={image || "https://placehold.co/400x300?text=No+Image"}
          alt={title}
          className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      

        {/* Discount */}
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
          {discount}
        </span>

        {/* Wishlist */}
        <button className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="line-clamp-2 text-base font-semibold leading-6 text-slate-800">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex gap-0.5 text-yellow-400">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} size={16} fill="currentColor" />
          ))}
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-black">₹{discountPrice}</span>

          <span className="text-sm font-medium text-red-400 line-through">
            ₹{originalPrice}
          </span>
        </div>

        {/* Button */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-red-500 to-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:scale-[1.02] cursor-pointer">
          <ShoppingCart size={16} />
          Download Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
