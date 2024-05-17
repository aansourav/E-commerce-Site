"use client";

import { ListContext } from "@/context/list-type-context";
import { useContext } from "react";
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";

const ProductCardByType = ({ products }) => {
    const { listType } = useContext(ListContext);

    if (listType)
        return (
            <div className="lg:col-span-8 col-span-12 flex flex-col gap-4 mt-12">
                {products.map((product) => (
                    <ProductCard2 key={product.id} product={product} />
                ))}
            </div>
        );
    return (
        <div className="lg:col-span-8 col-span-12  mt-4">
            <div className="grid grid-cols-12 gap-4 mt-10">
                {products.map((product) => (
                    <ProductCard1 key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductCardByType;
