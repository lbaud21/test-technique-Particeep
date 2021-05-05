import React from "react";
import Cards from "../containers/CardsContainer";
import { Wrapper } from "../components/Cards/style";
import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";

const MoviesPage = () => {
  return (
    <Wrapper>
      <Filter />
      <Cards />
      <Pagination />
    </Wrapper>
  );
};

export default MoviesPage;
