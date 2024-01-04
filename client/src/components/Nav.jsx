import { CiSearch } from "react-icons/ci";
import Button from "@mui/material/Button";

import SwipeableTemporaryDrawer from "./SwipeableDrawer ";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import TemporaryDrawer from "./Basket";

export default function Nav() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      console.error("token does not exist");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await api.get("/me", {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log("Response Data:", response.data);
        const data = response.data;
        if (data.name) {
          setName(data.name);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <nav className="navbar h-20 flex justify-between items-center pl-5 pr-3">
      <div className="nav-menu flex justify-between w-[23rem] items-center mob:justify-evenly">
        <SwipeableTemporaryDrawer />

        <div className="flex items-center bg-[#EAEAEA] h-10 p-5  rounded-lg  ">
          <input
            className="outline-none border-none px-2 bg-[#EAEAEA] text-[#0D0842]"
            type="text"
            placeholder="What are you looking for ? "
          />
          <CiSearch className="ml-2 bg-[#EAEAEA]" />
        </div>
      </div>
      <div className="nav-account flex items-center w-[24em] justify-between mob:hidden">
        {name ? (
          <div className="flex items-center gap-4">
            <p className="font-bold">{name}</p>
            <div>
              <Button
                variant="contained"
                className="w-15 "
                onClick={() => localStorage.removeItem("token")}
              >
                Log Out
              </Button>
            </div>
            <TemporaryDrawer />
          </div>
        ) : (
          <div className="flex w-[100%] justify-evenly">
            <Button
              variant="contained"
              className="w-15 h-1/2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              className="w-15 h-1/2"
              onClick={() => navigate("/signin")}
            >
              Login
            </Button>
            <TemporaryDrawer />
          </div>
        )}
      </div>
    </nav>
  );
}
