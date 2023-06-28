import React from "react";
import { useRef } from "react";

const SearchBar = (props) => {
  const searchBarRef = useRef();

  const searchChangeHandler = () => {
    props.word(searchBarRef.current.value);
  };

  return (
    <div className="flex justify-center my-5">
      <input
        onChange={searchChangeHandler}
        ref={searchBarRef}
        type="input"
        placeholder="Search here"
        className="text-center text-black text-2xl capitalize w-3/5 font-mono px-3 border-4 border-orange-special border-solid rounded-md shadow-2xl overflow-x-scroll"
      ></input>
    </div>
  );
};

export default SearchBar;
