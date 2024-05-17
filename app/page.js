import Cart from "@/components/Cart";
import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import ProductCard1 from "@/components/ProductCard1";
import ProductCard2 from "@/components/ProductCard2";
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
                <div className=" col-span-8 mt-4">
                    <div className="grid grid-cols-12 gap-4 mt-10">
                        {products.map((product) => (
                            <ProductCard1 key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className=" col-span-8 mt-4">
                    <ProductCard2 />
                </div>
                <Cart />
                <Pagination />
            </main>
        </>
    );
}
