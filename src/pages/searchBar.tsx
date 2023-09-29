import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div
      className="relative 
    "
    >
      <div className="relative mx-auto  flex  w-full  flex-wrap items-stretch xl:w-4/5">
        <input
          type="search"
          className="focus:border-primary dark:focus:border-primary border-darkb white:placeholder:text-neutral-200 bg-darkb relative  mt-9 block flex-auto rounded-lg border border-solid bg-clip-padding px-3 py-[0.32rem]  text-base font-medium leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-white dark:border-neutral-600 xl:w-4/5"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />

        {/* <!--Search icon--> */}
        <span
          className="input-group-text absolute right-0 top-0 mr-3 flex items-center whitespace-nowrap rounded py-12 text-center text-base font-bold text-white"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3 w-3"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        {/* <!--Clear (X) icon--> */}
        <span
          className="input-group-text absolute right-0 top-0 mr-7 flex cursor-pointer items-center whitespace-nowrap rounded py-11 text-center text-base font-normal text-white"
          id="clear-addon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
