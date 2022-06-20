import React, { useState } from "react";
import "./search.css";
import search from "./img/search.svg";
import SearchInput from "../SearchInput/SearchInput";

const Search = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const invertIsSearchOpen = () => {
    setIsSearchOpened(!isSearchOpened);
    console.log(isSearchOpened);
  };

  return (
    <div className="block__search">
      {isSearchOpened && <SearchInput />}
      <div className="block__icon">
        <img
          className="icon"
          onClick={invertIsSearchOpen}
          src={search}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
