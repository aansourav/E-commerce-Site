"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className="bg-baseBlack py-3 text-baseWhite font-bold text-sm">
            <div className="container mx-auto font-inter">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-9/12">
                        <Link href="/">
                            <Logo />
                        </Link>
                        <div className="flex items-baseline gap-8">
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
                    <button className="tracking-widest ml-auto block bg-baseBlue px-6 py-3 rounded-md">
                        LOGIN
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
