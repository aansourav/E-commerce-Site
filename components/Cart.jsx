"use client";
import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import CartProduct from "./CartProduct";

const Cart = () => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="border border-[#D4D5D9] rounded-md px-2 py-3 col-span-4 mt-14 h-fit">
            <p className="text-baseWhite text-[12px] font-bold tracking-[.25em] bg-baseBlack w-full py-3 px-3 uppercase rounded-md text-center">
                Selected Products
            </p>
            {cart.length > 0 ? (
                cart.map((product) => (
                    <CartProduct key={product.id} product={product} />
                ))
            ) : (
                <p className="text-baseBlack text-[12px] font-bold tracking-[.25em] text-center my-6">
                    No products in cart
                </p>
            )}
            <p className="text-baseBlack text-[12px] font-bold tracking-[.25em] text-right my-6">
                TOTAL: ${total.toFixed(2)}
            </p>
            <div className="flex items-center gap-8">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className="border-none block ring-2 ring-baseBlack w-3 h-3 rounded-none appearance-none"
                />
                <p className="font-inter text-[12px] text-baseBlack tracking-[.20em]">
                    I&apos;ve read and agree to the{" "}
                    <span className="underline">
                        terms and <br />
                        conditions,
                    </span>{" "}
                    <span className="underline">refund policy & </span>
                    <span className="underline">privacy policy</span>
                </p>
            </div>
            <button className="bg-baseBlack mt-6 py-3 px-2 rounded-md font-inter text-[12px] font-bold tracking-[.25em] text-baseWhite flex ml-auto">
                CHECKOUT
            </button>
        </div>
    );
};

export default Cart;
