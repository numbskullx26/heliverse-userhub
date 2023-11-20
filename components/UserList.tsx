import React, { useState } from "react";
import UserCard from "./UserCard";
import { data } from "./data";

const itemsPerPage = 20;

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="px-4 flex flex-col items-center">
      <h1 className="text-white font-semibold text-2xl">User Carousel</h1>
      <UserCard users={currentItems} />
      <div className="flex justify-center items-center mt-4 mb-6">
        <button
          onClick={prevPage}
          className="mx-2 cursor-pointer bg-violet-500 hover:bg-violet-100 hover:text-black duration-300 transition rounded-xl px-4 py-2"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="mx-2 cursor-pointer bg-violet-500 hover:bg-violet-100 hover:text-black duration-300 transition rounded-xl px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
