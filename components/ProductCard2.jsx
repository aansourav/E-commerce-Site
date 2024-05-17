import StarIcon from "./StarIcon";

const ProductCard2 = () => {
    return (
        <div className="grid grid-cols-12 border border-[#D4D5D9] rounded-md rounded-bl-none">
            <div
                className={`w-full full bg-[#f8f8f8] bg-cover col-span-6 bg-center bg-no-repeat rounded-t-md`}
                style={{
                    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/2531/3fb5/384fcdcacc6932ac64834538c273d449?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibK4nTDL98~Y~zUxYYQ7FT81KaU5Ok2ZeBmiI~TRCmdzEYATOR3IrqAYS7QkLxoIRpcFGqHPFRqBt133bPTx3GKeONimzxx1Uj8Gy-~Y4SrpcbOu1h9u5g6Ta8qDrZa2e~ZscmBbz6gIfEZrR6k3JpaV5BbTXZcLpcS6lLnDD5jakqtdsZwEXps-in6CtK0LVIMXDFSxRyasSxhwPhVg26KNwYaD0kZ8UFZdE8g3AXbucYrtUAosQ~eL4~XSgRb-ADz3F-Kjh5xEhR5sq3ygf5ZZZEowmAqUzl2fNPkspQ00mcI~kby4kJ5YbNxtmCewDoQyj0xYpTNbb03Oc4gaMw__")`,
                }}
            ></div>
            <div className="p-4 col-span-6">
                <p className="text-[16px] text-baseBlack font-inter">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, possimus.
                </p>
                <div className="flex items-center gap-1 mt-3">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>

                <p className="font-[14px] font-inter text-[#ADB0B7] mt-1">
                    (121 Review)
                </p>

                <div className="flex items-center justify-between mt-2">
                    <div className="font-inter text-[18px] text-price font-bold">
                        $12.23
                    </div>
                    <button className="bg-baseBlack py-2 px-3 rounded-md font-inter text-[16px] text-baseWhite">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard2;
