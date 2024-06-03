import React from "react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Api = () => {
  const [p, setphoto] = useState("");
  const [results, setResult] = useState([]);

  let Changephoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${p}&client_id=7UXZSlHFySm3F2uC8gBfi8IFUEpUDkQ-SX7qal11BLU`
      )
      .then((response) => {
        console.log(response);
        setResult(response.data.results);
      });
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "7rem 0 10rem 0",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label  className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          style={{ width: "400px", marginBottom: "1.2rem" }}
          value={p}
          onChange={(e) => {
            setphoto(e.target.value);
          }}
        ></input>
        <button
          className="btn btn-primary"
          style={{ marginBottom: "4.5rem" }}
          onClick={Changephoto}
        >
          search
        </button>
        <ul
          style={{
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {results.map((val) => {
            return (
              <motion.li
                whileHover={{
                  rotate: 360,
                  scale: 1.5,
                  transition: { duration: 1 },
                }}
                style={{ display: "inline-block" }}
              >
                <img src={val.urls.small} height={200} width={200} alt="xyz" />
              </motion.li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Api;
