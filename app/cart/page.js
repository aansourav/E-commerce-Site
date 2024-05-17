import Cart from "@/components/Cart";

const CartPage = () => {
    return (
        <div className="w-4/12 flex m-auto">
            <div className="border border-[#D4D5D9] rounded-md w-full px-2 py-3 col-span-4 mt-14 h-fit">
                <Cart />
            </div>
        </div>
    );
};

export default CartPage;
