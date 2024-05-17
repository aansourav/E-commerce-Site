"use client";

import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import StarIcon from "./StarIcon";

const ProductCard1 = ({ product }) => {
    const {
        title,
        price,
        image,
        rating: { rate, count },
    } = product;

    const { addToCart } = useContext(CartContext);

    const handleCart = () => {
        addToCart(product);
    };
    return (
        <div className="lg:col-span-4 md:col-span-6 col-span-12 border border-[#D4D5D9] rounded-md pt-3 px-1">
            <div>
                <div
                    className={`relative delay-150 w-full h-[180px] bg-[#f8f8f8] bg-contain bg-no-repeat bg-center transition-all duration-3000 ease-in-out transform rounded-t-md`}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <div className="p-4">
                    <p className="text-[16px] text-baseBlack font-inter">
                        {title?.length > 40
                            ? `${title.substring(0, 40)} ...`
                            : title}
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                        {Array.from({ length: Math.round(rate) }, (_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>

                    <p className="font-[14px] font-inter text-[#ADB0B7] mt-1">
                        ({count} Review)
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="font-inter text-[18px] text-price font-bold">
                            ${price}
                        </div>
                        <button
                            onClick={handleCart}
                            className="bg-baseBlack py-2 px-3 rounded-md font-inter text-[16px] text-baseWhite"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard1;
