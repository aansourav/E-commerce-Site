import Cart from "@/components/Cart";

export async function generateMetadata() {
    return {
        title: "Cart | E-Commerce Site",
        description: "Your cart items are displayed here",
    };
}

const CartPage = () => {
    return (
        <div className="lg:w-4/12 w-6/12 flex m-auto">
            <div className="border border-[#D4D5D9] rounded-md w-full px-2 py-3 col-span-4 mt-14 h-fit">
                <Cart />
            </div>
        </div>
    );
};

export default CartPage;
