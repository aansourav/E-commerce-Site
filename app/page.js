import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
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
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Cart */}

                <Cart />

                {/* Cart */}

                <Pagination />
            </main>
            <Footer />
        </>
    );
}
