import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../store/actions/actionsCreators";
import Cards from "../components/Cards/Cards";

const CardsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return <Cards />;
};

export default CardsContainer;
