import { CardActions, CardsState } from "./types";
import {
  GET_CARDS_REQUEST,
  GET_CARDS_FAILLURE,
  GET_CARDS_SUCCESS,
  CHOOSE_CATEGORY,
  CHOOSE_PAGINATION,
  INCREMENT_PAGINATION,
  DECREMENT_PAGINATION,
  RESET_PAGINATION,
  DELETE_CARD,
  LIKE,
  DISLIKE,
} from "../actions/actionsTypes";
import { processLike, processDislike } from "../functions";

const initialState: CardsState = {
  loading: false,
  cards: [],
  pagination: 4,
  pageNumber: 1,
  category: null,
  deleted: [],
  liked: [],
  disliked: [],
  error: null,
};

export const cardsReducer = function (
  state: CardsState = initialState,
  action: CardActions
): CardsState {
  switch (action.type) {
    case GET_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };

    case GET_CARDS_FAILLURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHOOSE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case CHOOSE_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case INCREMENT_PAGINATION:
      return {
        ...state,
        pageNumber: (state.pageNumber += 1),
      };
    case DECREMENT_PAGINATION:
      return {
        ...state,
        pageNumber:
          state.pageNumber > 1 ? (state.pageNumber -= 1) : state.pageNumber,
      };
    case RESET_PAGINATION:
      return {
        ...state,
        pageNumber: 1,
      };
    case DELETE_CARD:
      return {
        ...state,
        deleted: [...state.deleted, action.payload],
      };
    case LIKE:
      return processLike(state, action);
    case DISLIKE:
      return processDislike(state, action);
    default:
      return state;
  }
};
