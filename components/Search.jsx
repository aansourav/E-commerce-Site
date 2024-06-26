const Search = () => {
    return (
        <div className="border border-[##49525A] rounded-3xl flex gap-4 items-center py-2 px-6 mt-6">
            <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.25 16.2126L11.8855 12.8421M13.75 8.33765C13.75 10.0284 13.0784 11.6499 11.8828 12.8455C10.6873 14.041 9.06576 14.7126 7.375 14.7126C5.68424 14.7126 4.06274 14.041 2.86719 12.8455C1.67165 11.6499 1 10.0284 1 8.33765C1 6.64689 1.67165 5.02539 2.86719 3.82984C4.06274 2.6343 5.68424 1.96265 7.375 1.96265C9.06576 1.96265 10.6873 2.6343 11.8828 3.82984C13.0784 5.02539 13.75 6.64689 13.75 8.33765Z"
                    stroke="#212529"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
            <input
                type="text"
                className="text-[#5F5F5F] text-[16px] w-full border-none outline-none"
                placeholder="Search An Item"
            />
        </div>
    );
};

export default Search;
