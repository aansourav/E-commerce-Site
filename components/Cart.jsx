"use client";
import { CartContext } from "@/context/cart-context";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import CartProduct from "./CartProduct";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    const path = usePathname();

    return (
        <>
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
            <p
                className={`text-baseBlack text-[12px] font-bold tracking-[.25em]  my-6 ${
                    path === "/cart" ? "text-center" : "text-right"
                } `}
            >
                TOTAL: ${total.toFixed(2)}
            </p>
            <div className="flex items-center gap-8">
                <div className="w-3 h-3">
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className="border-none block ring-2 ring-baseBlack w-3 h-3 rounded-none appearance-none"
                    />
                </div>
                <p
                    className={`font-inter text-[12px] text-baseBlack tracking-[.20em]`}
                >
                    I&apos;ve read and agree to the{" "}
                    <span className="underline">
                        terms and {path !== "/cart" && <br />}
                        conditions,
                    </span>{" "}
                    <span className="underline">refund policy & </span>
                    <span className="underline">privacy policy</span>
                </p>
            </div>
            <button
                className={`bg-baseBlack mt-6 py-3 px-2 rounded-md font-inter text-[12px] font-bold tracking-[.25em] text-baseWhite flex  ${
                    path === "/cart" ? "mx-auto" : "ml-auto"
                } `}
            >
                CHECKOUT
            </button>
        </>
    );
};

export default Cart;
