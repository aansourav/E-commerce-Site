import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav className="bg-baseBlack py-3 text-baseWhite font-bold text-sm">
            <div className="container mx-auto font-inter">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-9/12">
                        <Logo />
                        <div className="flex items-baseline gap-8">
                            <div className="flex flex-col">
                                <a href="#" className="tracking-[.25em]">
                                    PRODUCTS
                                </a>
                                <div className="bg-baseWhite w-[18px] border-2 h-[2px] rounded-lg"></div>
                            </div>
                            <a href="#" className="tracking-[.25em]">
                                CART
                            </a>
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
