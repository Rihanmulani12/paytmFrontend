import React, { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
// require("dotenv").config();

export const Dashboard = () => {
  const [balance, setBalance] = useState("");
  const getBalanceUrl = `https://paytmbackend-g7dt.onrender.com/api/account/balance`;
  const bearerToken = "Bearer " + localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(getBalanceUrl, {
        headers: {
          Authorization: bearerToken,
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          // Handle 403 error (Unauthorized)
          console.error("Unauthorized: Token expired or invalid");
          // Redirect user to login page or display error message
        } else {
          console.error("Error fetching balance:", error.message);
        }
      });
  }, []);

  return (
    <div>

      <AppBar />
      <Balance value={balance} />
      <Users />
    </div>
  );
};
