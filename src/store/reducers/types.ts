import {
  CHOOSE_CATEGORY,
  CHOOSE_PAGINATION,
  INCREMENT_PAGINATION,
  DECREMENT_PAGINATION,
  RESET_PAGINATION,
  DELETE_CARD,
  GET_CARDS_FAILLURE,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  LIKE,
  DISLIKE
} from "../actions/actionsTypes";

export interface Card {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
}

export interface CardsState {
  loading: boolean;
  cards: Card[];
  pagination: number;
  pageNumber: number;
  category: string | null;
  deleted: string[];
  liked: string[];
  disliked: string[];
  error: Error | null;
}

export type GetCardRequest = {
  type: typeof GET_CARDS_REQUEST;
};

export type GetCardsSuccess = {
  type: typeof GET_CARDS_SUCCESS;
  payload: Card[];
};

export type GetCardsFaillure = {
  type: typeof GET_CARDS_FAILLURE;
  error: Error;
};

export type ChooseCategory = {
  type: typeof CHOOSE_CATEGORY;
  payload: string;
};

export type ChoosePagination = {
  type: typeof CHOOSE_PAGINATION;
  payload: number;
};

export type IncrementPagination = {
  type: typeof INCREMENT_PAGINATION;
};

export type DecrementPagination = {
  type: typeof DECREMENT_PAGINATION;
};

export type ResetPagination = {
  type: typeof RESET_PAGINATION;
};

export type DeleteCard = {
  type: typeof DELETE_CARD;
  payload: string;
};

export type Like = {
  type: typeof LIKE;
  payload: string;
};

export type Dislike = {
  type: typeof DISLIKE;
  payload: string;
};

export type CardActions =
  | Dislike
  | Like
  | ResetPagination
  | DecrementPagination
  | IncrementPagination
  | DeleteCard
  | ChoosePagination
  | ChooseCategory
  | GetCardRequest
  | GetCardsSuccess
  | GetCardsFaillure;
