
import React, { useEffect, useState } from "react";
import { Buttons } from "./Buttons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Users = () => {
  //replace with backend call
  //backend call done in the parent component i.e dashboard
  //   const [users, setUsers] = useState([
  //     { firstName: "Aradhana", lastName: "Bhattacharjee", _id: 1 },
  //     { firstName: "Niyati", lastName: "Nath Choudhury", _id: 2 },
  //   console.log("lol");
  //   console.log(users);
  const getUsersUrl = "https://paytmbackend-g7dt.onrender.com/api/user/bulk?filter=";
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(getUsersUrl + filter)
      .then((response) => setUsers(response.data.users));
  }, [filter]);
  //   ]);

  return (
    <div>
      <div className="font-bold mt-6 text-lg ml-10">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="block w-full p-4 ps-5 m-4 mr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};
export const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-5">
      <div className="flex ml-10">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full pr-5 mr-5">
        <Buttons
          label={"Send Money"}
          onClick={() =>
            navigate("/send?id=" + user._id + "&name=" + user.firstName)
          }
        ></Buttons>
      </div>
    </div>
  );
};
