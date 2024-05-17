import Cart from "@/components/Cart";
import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import ProductCardByType from "@/components/ProductCardByType";
import Search from "@/components/Search";

export default async function Home() {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return (
        <>
            <div className="grid grid-cols-12 container mt-20 ">
                <div className="col-span-8 mx-2">
                    <Heading />
                    <Search />
                </div>
            </div>

            <main className="grid grid-cols-12 gap-8 font-openSans container">
                <ProductCardByType products={products} />
                <div className="border hidden lg:block border-[#D4D5D9] rounded-md w-full px-2 py-3 col-span-4 mt-14 h-fit">
                    <Cart />
                </div>
                <Pagination />
            </main>
        </>
    );
}
