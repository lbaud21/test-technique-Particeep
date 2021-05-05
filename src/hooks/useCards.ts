import _ from "lodash";
import uniqBy from "lodash/uniqBy";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetPagination } from "../store/actions/actionsCreators";
import { useAppSelector } from "../store/hooks";
import {Card} from "../store/reducers/types"

const useCards = () => {
  const cardsData = useAppSelector((state) => state.cards);
  const category = useAppSelector((state) => state.category);
  const pagination = useAppSelector((state) => state.pagination);
  const deleted = useAppSelector((state) => state.deleted);
  const pageNumber = useAppSelector((state) => state.pageNumber);

  const dispatch = useDispatch();

  const [cards, setCards] = useState<Card[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [hasLess, setHasLess] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    dispatch(resetPagination());
  }, [category, dispatch]);

  useEffect(() => {
    const paginatedCards = _.chunk(
      uniqBy(cardsData, "title")
        .filter((card) => !deleted.includes(card.title))
        .filter((card) => (!category ? card : card.category === category)),
      pagination
    );

    if (pageNumber <= paginatedCards.length) {
      setCards(paginatedCards[pageNumber - 1]);
    }

    pageNumber < paginatedCards.length ? setHasMore(true) : setHasMore(false);
    pageNumber > 1 ? setHasLess(true) : setHasLess(false);

    setCategories([
      ...new Set(
        cardsData
          .filter((card) => !deleted.includes(card.title))
          .map((card) => card.category)
      ),
    ]);
  }, [category, pagination, cardsData, deleted, pageNumber, dispatch]);

  return { cards, categories, hasMore, hasLess };
};

export default useCards;
