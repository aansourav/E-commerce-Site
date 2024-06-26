/* eslint-disable @next/next/no-img-element */
"use client";

import { CartContext } from "@/context/cart-context";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import StarIcon from "./StarIcon";

const CartProduct = ({ product }) => {
    const {
        title,
        price,
        image,
        rating: { rate, count },
    } = product;

    const path = usePathname();
    const { cart, removeFromCart } = useContext(CartContext);

    const handleDelete = () => {
        removeFromCart(product.id);
    };

    return (
        <div className="flex items-center border justify-between border-[#D4D5D9] bg-[#f7f8f8] mt-4 rounded-md gap-4 h-[160px] pl-2 pr-2">
            <div className="flex-shrink-0 w-[130px] h-[130px]">
                <img
                    src={image}
                    alt="product"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-grow flex-col justify-between py-2 pr-2">
                <p className="text-[16px] text-baseBlack font-inter ">
                    {title?.length > 35
                        ? `${title.substring(
                              0,
                              path === "/cart" ? 55 : 35
                          )} ...`
                        : title}
                </p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: Math.round(rate) }, (_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>
                    <button onClick={handleDelete} className="ml-4">
                        <svg
                            width="18"
                            height="21"
                            viewBox="0 0 18 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 16.4626C7.26522 16.4626 7.51957 16.3573 7.70711 16.1698C7.89464 15.9822 8 15.7279 8 15.4626V9.46265C8 9.19743 7.89464 8.94308 7.70711 8.75554C7.51957 8.568 7.26522 8.46265 7 8.46265C6.73478 8.46265 6.48043 8.568 6.29289 8.75554C6.10536 8.94308 6 9.19743 6 9.46265V15.4626C6 15.7279 6.10536 15.9822 6.29289 16.1698C6.48043 16.3573 6.73478 16.4626 7 16.4626ZM17 4.46265H13V3.46265C13 2.667 12.6839 1.90394 12.1213 1.34133C11.5587 0.778717 10.7956 0.462646 10 0.462646H8C7.20435 0.462646 6.44129 0.778717 5.87868 1.34133C5.31607 1.90394 5 2.667 5 3.46265V4.46265H1C0.734784 4.46265 0.48043 4.568 0.292893 4.75554C0.105357 4.94308 0 5.19743 0 5.46265C0 5.72786 0.105357 5.98222 0.292893 6.16975C0.48043 6.35729 0.734784 6.46265 1 6.46265H2V17.4626C2 18.2583 2.31607 19.0214 2.87868 19.584C3.44129 20.1466 4.20435 20.4626 5 20.4626H13C13.7956 20.4626 14.5587 20.1466 15.1213 19.584C15.6839 19.0214 16 18.2583 16 17.4626V6.46265H17C17.2652 6.46265 17.5196 6.35729 17.7071 6.16975C17.8946 5.98222 18 5.72786 18 5.46265C18 5.19743 17.8946 4.94308 17.7071 4.75554C17.5196 4.568 17.2652 4.46265 17 4.46265ZM7 3.46265C7 3.19743 7.10536 2.94308 7.29289 2.75554C7.48043 2.568 7.73478 2.46265 8 2.46265H10C10.2652 2.46265 10.5196 2.568 10.7071 2.75554C10.8946 2.94308 11 3.19743 11 3.46265V4.46265H7V3.46265ZM14 17.4626C14 17.7279 13.8946 17.9822 13.7071 18.1698C13.5196 18.3573 13.2652 18.4626 13 18.4626H5C4.73478 18.4626 4.48043 18.3573 4.29289 18.1698C4.10536 17.9822 4 17.7279 4 17.4626V6.46265H14V17.4626ZM11 16.4626C11.2652 16.4626 11.5196 16.3573 11.7071 16.1698C11.8946 15.9822 12 15.7279 12 15.4626V9.46265C12 9.19743 11.8946 8.94308 11.7071 8.75554C11.5196 8.568 11.2652 8.46265 11 8.46265C10.7348 8.46265 10.4804 8.568 10.2929 8.75554C10.1054 8.94308 10 9.19743 10 9.46265V15.4626C10 15.7279 10.1054 15.9822 10.2929 16.1698C10.4804 16.3573 10.7348 16.4626 11 16.4626Z"
                                fill="#F2415A"
                            />
                        </svg>
                    </button>
                </div>
                <p className="font-[14px] font-inter text-[#ADB0B7]">
                    ({count} Review{count !== 1 && "s"})
                </p>

                <div className="font-inter text-[18px] text-price font-bold mt-2 ">
                    ${price}
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
