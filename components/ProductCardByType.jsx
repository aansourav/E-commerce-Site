"use client";

import { ListContext } from "@/context/list-type-context";
import { useContext } from "react";

const ProductCardByType = () => {
    const { listType } = useContext(ListContext);

    return <div>ProductCardByType</div>;
};

export default ProductCardByType;
