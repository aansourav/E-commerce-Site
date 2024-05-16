/* eslint-disable @next/next/no-img-element */
import StarIcon from "./StarIcon";

const CartProduct = () => {
    return (
        <div className="flex items-center justify-between border border-[#D4D5D9] bg-[#f7f8f8]  mt-4 rounded-md rounded-bl-none gap-4 max-h-[150px]">
            <div className="w-[240px] h-[150px]">
                <img
                    className="w-full h-full object-fill rounded-t-md"
                    src="https://s3-alpha-sig.figma.com/img/2531/3fb5/384fcdcacc6932ac64834538c273d449?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibK4nTDL98~Y~zUxYYQ7FT81KaU5Ok2ZeBmiI~TRCmdzEYATOR3IrqAYS7QkLxoIRpcFGqHPFRqBt133bPTx3GKeONimzxx1Uj8Gy-~Y4SrpcbOu1h9u5g6Ta8qDrZa2e~ZscmBbz6gIfEZrR6k3JpaV5BbTXZcLpcS6lLnDD5jakqtdsZwEXps-in6CtK0LVIMXDFSxRyasSxhwPhVg26KNwYaD0kZ8UFZdE8g3AXbucYrtUAosQ~eL4~XSgRb-ADz3F-Kjh5xEhR5sq3ygf5ZZZEowmAqUzl2fNPkspQ00mcI~kby4kJ5YbNxtmCewDoQyj0xYpTNbb03Oc4gaMw__"
                    alt="dd"
                />
            </div>

            <div className="py-2 pr-2">
                <p className="text-[16px] text-baseBlack font-inter">
                    Lorem ipsum dolor sit amet consectetur
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 mt-3">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                    <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 16.4626C7.26522 16.4626 7.51957 16.3573 7.70711 16.1698C7.89464 15.9822 8 15.7279 8 15.4626V9.46265C8 9.19743 7.89464 8.94308 7.70711 8.75554C7.51957 8.568 7.26522 8.46265 7 8.46265C6.73478 8.46265 6.48043 8.568 6.29289 8.75554C6.10536 8.94308 6 9.19743 6 9.46265V15.4626C6 15.7279 6.10536 15.9822 6.29289 16.1698C6.48043 16.3573 6.73478 16.4626 7 16.4626ZM17 4.46265H13V3.46265C13 2.667 12.6839 1.90394 12.1213 1.34133C11.5587 0.778717 10.7956 0.462646 10 0.462646H8C7.20435 0.462646 6.44129 0.778717 5.87868 1.34133C5.31607 1.90394 5 2.667 5 3.46265V4.46265H1C0.734784 4.46265 0.48043 4.568 0.292893 4.75554C0.105357 4.94308 0 5.19743 0 5.46265C0 5.72786 0.105357 5.98222 0.292893 6.16975C0.48043 6.35729 0.734784 6.46265 1 6.46265H2V17.4626C2 18.2583 2.31607 19.0214 2.87868 19.584C3.44129 20.1466 4.20435 20.4626 5 20.4626H13C13.7956 20.4626 14.5587 20.1466 15.1213 19.584C15.6839 19.0214 16 18.2583 16 17.4626V6.46265H17C17.2652 6.46265 17.5196 6.35729 17.7071 6.16975C17.8946 5.98222 18 5.72786 18 5.46265C18 5.19743 17.8946 4.94308 17.7071 4.75554C17.5196 4.568 17.2652 4.46265 17 4.46265ZM7 3.46265C7 3.19743 7.10536 2.94308 7.29289 2.75554C7.48043 2.568 7.73478 2.46265 8 2.46265H10C10.2652 2.46265 10.5196 2.568 10.7071 2.75554C10.8946 2.94308 11 3.19743 11 3.46265V4.46265H7V3.46265ZM14 17.4626C14 17.7279 13.8946 17.9822 13.7071 18.1698C13.5196 18.3573 13.2652 18.4626 13 18.4626H5C4.73478 18.4626 4.48043 18.3573 4.29289 18.1698C4.10536 17.9822 4 17.7279 4 17.4626V6.46265H14V17.4626ZM11 16.4626C11.2652 16.4626 11.5196 16.3573 11.7071 16.1698C11.8946 15.9822 12 15.7279 12 15.4626V9.46265C12 9.19743 11.8946 8.94308 11.7071 8.75554C11.5196 8.568 11.2652 8.46265 11 8.46265C10.7348 8.46265 10.4804 8.568 10.2929 8.75554C10.1054 8.94308 10 9.19743 10 9.46265V15.4626C10 15.7279 10.1054 15.9822 10.2929 16.1698C10.4804 16.3573 10.7348 16.4626 11 16.4626Z"
                            fill="#F2415A"
                        />
                    </svg>
                </div>

                <p className="font-[14px] font-inter text-[#ADB0B7] mt-1">
                    (121 Review)
                </p>

                <div className="font-inter text-[18px] text-price font-bold">
                    $13.98
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
