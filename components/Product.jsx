"use client";
import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import StarIcon from "./StarIcon";

const Product = ({ product }) => {
    const {
        title,
        price,
        image,
        rating: { rate, count },
    } = product;

    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const handleCart = () => {
        addToCart(product);
        localStorage.setItem("cart", JSON.stringify([...cart, product]));
    };

    return (
        <div className="col-span-4 border border-[#D4D5D9] rounded-md pt-3 px-1">
            <div>
                <div
                    className={`relative delay-150 w-full h-[180px] bg-[#f8f8f8] bg-contain bg-no-repeat bg-center transition-all duration-3000 ease-in-out transform rounded-t-md`}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <div className="p-4">
                    <p className="text-[16px] text-baseBlack font-inter">
                        {title?.length > 45
                            ? `${title.substring(0, 45)} ...`
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

export default Product;
