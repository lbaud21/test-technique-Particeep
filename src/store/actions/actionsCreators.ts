import {
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAILLURE,
  CHOOSE_CATEGORY,
  CHOOSE_PAGINATION,
  INCREMENT_PAGINATION,
  DECREMENT_PAGINATION,
  RESET_PAGINATION,
  DELETE_CARD,
  LIKE,
  DISLIKE
} from "./actionsTypes";
import {
  Card,
  ChooseCategory,
  ChoosePagination,
  IncrementPagination,
  DecrementPagination,
  ResetPagination,
  GetCardRequest,
  GetCardsFaillure,
  GetCardsSuccess,
  DeleteCard,
  Like,
  Dislike
} from "../reducers/types";
import { Dispatch } from "redux";
import { movies$ } from "../../services/movies";

export function getCardsRequest(): GetCardRequest {
  return {
    type: GET_CARDS_REQUEST,
  };
}

export function getCardsSuccess(cards: Card[]): GetCardsSuccess {
  return {
    type: GET_CARDS_SUCCESS,
    payload: cards,
  };
}

export function getCardsFaillure(error: Error): GetCardsFaillure {
  return {
    type: GET_CARDS_FAILLURE,
    error,
  };
}

export function getCards() {
  return async function (dispatch: Dispatch) {
    dispatch(getCardsRequest());

    try {
      const cards = await movies$;
      dispatch(getCardsSuccess(cards));
    } catch (error) {
      dispatch(getCardsFaillure(error));
    }
  };
}

export function chooseCategory(payload: string): ChooseCategory {
  return {
    type: CHOOSE_CATEGORY,
    payload,
  };
}

export function choosePagination(payload: number): ChoosePagination {
  return {
    type: CHOOSE_PAGINATION,
    payload,
  };
}

export function incrementPagination(): IncrementPagination {
  return {
    type: INCREMENT_PAGINATION,
  };
}

export function decrementPagination(): DecrementPagination {
  return {
    type: DECREMENT_PAGINATION,
  };
}

export function resetPagination(): ResetPagination {
  return {
    type: RESET_PAGINATION,
  };
}

export function deleteCard(payload: string): DeleteCard {
  return {
    type: DELETE_CARD,
    payload,
  };
}

export function like(payload: string): Like {
  return {
    type: LIKE,
    payload,
  };
}

export function dislike(payload: string): Dislike {
  return {
    type: DISLIKE,
    payload,
  };
}