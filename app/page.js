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
                <Cart />
                <Pagination />
            </main>
        </>
    );
}
