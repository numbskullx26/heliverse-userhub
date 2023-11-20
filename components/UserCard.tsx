import React, { useState } from "react";
import { data } from "./data";

const UserCard = ({ users }: any) => {
  return (
    <div className="grid grid-cols-4 gap-4 space-x-3 mb-5">
      {users.map((people: any) => {
        const {
          id,
          first_name,
          last_name,
          email,
          gender,
          avatar,
          domain,
          available,
        } = people;
        return (
          <div
            key={id}
            className="relative flex flex-col rounded-xl bg-white shadow-md w-96 bg-clip-border hover:bg-clip-padding hover:bg-violet-100 transition bg-white mt-8"
          >
            <img
              src={avatar}
              alt={first_name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <div className="text-center flex flex-col gap-2 rounded-xl mt-5">
              <h4 className="block mb-5 font-sans text-2xl antialiased font-semibold leading-snug text-violet-900 mt-9">
                {first_name} {last_name}
              </h4>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                {email}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                {gender}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                {domain}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                {available}
              </p>
            </div>
            <div className="flex flex-row items-center justify-center mb-5 mt-4">
              <button
                className="block w-fit  select-none rounded-lg bg-violet-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-black-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Add to team
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
