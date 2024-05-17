"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-baseBlack py-3 text-baseWhite font-bold text-sm">
            <div className="container mx-auto font-inter">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-9/12">
                        <Link href="/">
                            <Logo />
                        </Link>
                        <div className="hidden lg:flex items-baseline gap-8">
                            <div className="flex flex-col">
                                <Link href="/" className="tracking-[.25em]">
                                    PRODUCTS
                                </Link>
                                {pathName === "/" && (
                                    <div className="bg-baseWhite w-[18px] border-2 h-[2px] rounded-lg"></div>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <Link href="/cart" className="tracking-[.25em]">
                                    CART
                                </Link>
                                {pathName === "/cart" && (
                                    <div className="bg-baseWhite w-[18px] border-2 h-[2px] rounded-lg"></div>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="hidden lg:block tracking-widest ml-auto bg-baseBlue px-6 py-3 rounded-md">
                        LOGIN
                    </button>

                    <button className="lg:hidden" onClick={toggleNavbar}>
                        <svg
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 14.4813C12.5523 14.4813 13 14.929 13 15.4813C13 16.0336 12.5523 16.4813 12 16.4813H3C2.44772 16.4813 2 16.0336 2 15.4813C2 14.929 2.44772 14.4813 3 14.4813H12ZM17 7.48132C17.5523 7.48132 18 7.92904 18 8.48132C18 9.03361 17.5523 9.48132 17 9.48132H1C0.447716 0.48132 0 9.03361 0 8.48132C0 7.92904 0.447715 7.48132 1 7.48132H17ZM15 0.481323C15.5523 0.481323 16 0.929038 16 1.48132C16 2.03361 15.5523 2.48132 15 2.48132H6C5.44771 2.48132 5 2.03361 5 1.48132C5 0.929038 5.44772 0.481323 6 0.481323H15Z"
                                fill="#F9F9F9"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"} lg:hidden mt-4`}
                >
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="tracking-[.25em]"
                            onClick={toggleNavbar}
                        >
                            PRODUCTS
                            {pathName === "/" && (
                                <div className="bg-baseWhite w-[18px] border-2 h-[2px] rounded-lg mt-1"></div>
                            )}
                        </Link>
                        <Link
                            href="/cart"
                            className="tracking-[.25em]"
                            onClick={toggleNavbar}
                        >
                            CART
                            {pathName === "/cart" && (
                                <div className="bg-baseWhite w-[18px] border-2 h-[2px] rounded-lg mt-1"></div>
                            )}
                        </Link>
                        <button className="tracking-widest bg-baseBlue px-6 py-3 rounded-md">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
