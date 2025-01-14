import React, { useRef, useEffect } from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const navigate = useNavigate();
  const searchText = useRef("");
  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Your Books ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World ..."
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-dusky" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
