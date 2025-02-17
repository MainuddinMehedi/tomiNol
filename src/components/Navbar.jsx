import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
      }}
    >
      <img src={logo} alt="logo" height={45} style={{ paddingRight: "5px" }} />{" "}
      tomiNol
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
