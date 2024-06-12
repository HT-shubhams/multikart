import React, { useState } from "react";
import UserCard from "./UserCard";
import UserGridView from "./UserGridView";
import UserListView from "./UserListView";
import useUserStore from "../useUserStore";
import {
  FilterByIcon,
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
  SortByIcon,
} from "../assets/icons";
import classNames from "classnames";

const UserList = () => {
  const users = useUserStore((state) => state.users);
  const [isListView, setIsListView] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-semibold leading-9 bg-[#f9f9f9] m-6 text-2xl">
          Users
        </div>
        <div className="flex items-center">
          <div className="p-4">
            <button
              type="button"
              onClick={() => setIsListView(true)}
              className={classNames("p-2 rounded-sm", {
                "bg-[#641CC0]": isListView,
              })}
            >
              <ListViewIcon
                className={classNames({
                  "text-[#641CC0]": !isListView,
                  "text-white": isListView,
                })}
              />
            </button>
            <button
              type="button"
              onClick={() => setIsListView(false)}
              className={classNames("p-2 rounded-sm mr-2", {
                "bg-[#641CC0]": !isListView,
              })}
            >
              <GridViewIcon
                className={classNames({
                  "text-[#641CC0]": isListView,
                  "text-white": !isListView,
                })}
              />
            </button>
          </div>
          <button className="text-xl font-normal bg-[#641cc0] text-[#ffffff] w-[140px] h-[40px] rounded-md mr-6">
            + Add User
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-4">
          <button className="flex items-center p-2 bg-[#fafafa] border border-[#E0E0E2] text-[#63666b] rounded">
            <SortByIcon className={"mr-2"} />
            Sort By
          </button>
          <button className="flex items-center p-2 bg-[#fafafa] border border-[#E0E0E2] text-[#63666b] rounded">
            <FilterByIcon className={"mr-2"} />
            Filter By
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 border border-[#e0e0e2] rounded-md w-[200px] focus:outline-none"
          />
          <SearchIcon className={"absolute left-3 top-2.5 text-[#641CC0]"} />
        </div>
      </div>
      <div>{isListView ? <UserListView /> : <UserGridView />}</div>
    </div>
  );
};

export default UserList;
