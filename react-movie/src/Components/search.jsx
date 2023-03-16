import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div className="search">
      <input
        name="search"
        value={searchParam}
        onChange={handleOnChange}
        placeholder="Enter movie key here"
      />
      <button disabled={searchParam.trim().length <= 2} onClick={handleSubmit}>Submit Search</button>
    </div>
  );
};

export default Search;
