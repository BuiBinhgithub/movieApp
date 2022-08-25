import "antd/dist/antd.variable.min.css";
import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import SearchMovie from "./components/Search";
import ListDataMovie from "./components/List";
import LayoutMovie from "./components/Layout";
import PaginationMovie from "./components/Pagination";
import { api } from "./services/api";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);

  const searchData = async (Keyword = "") => {
    //cap nhat state loading
    setLoading(true); //bat dau tim kiem
    if (Keyword !== "") {
      //cap nhat state keyword
      setName(Keyword);
      //call api
      const data = await api.searchDataMovieByKeyword(Keyword);
      setMovies(data.Search);
    }
    setLoading(false);
  };
  //ngung tim kiem

  return (
    <LayoutMovie>
      <SearchMovie loading={loading} search={searchData} />
      {movies.length > 0 && (
        <>
          <ListDataMovie movies={movies} /> 
          <PaginationMovie />
        </>
      )}
    </LayoutMovie>
  );
};

export default App;
