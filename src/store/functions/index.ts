import { CardsState, Dislike, Like } from "../reducers/types";

export const processLike = (state: CardsState, action: Like) => {
  if (state.liked.includes(action.payload)) {
    const liked = state.liked.filter(
      (movieTitle) => movieTitle !== action.payload
    );
    const cards = state.cards.map((card) => {
      return card.title === action.payload
        ? { ...card, likes: (card.likes -= 1) }
        : card;
    });
    return {
      ...state,
      liked,
      cards,
    };
  } else {
    const liked = [...state.liked, action.payload];
    const cards = state.cards.map((card) => {
      return card.title === action.payload
        ? { ...card, likes: (card.likes += 1) }
        : card;
    });
    return {
      ...state,
      liked,
      cards,
    };
  }
};

export const processDislike = (state: CardsState, action: Dislike) => {
  if (state.disliked.includes(action.payload)) {
    const disliked = state.disliked.filter(
      (movieTitle) => movieTitle !== action.payload
    );
    const cards = state.cards.map((card) => {
      return card.title === action.payload
        ? { ...card, dislikes: (card.dislikes -= 1) }
        : card;
    });
    return {
      ...state,
      disliked,
      cards,
    };
  } else {
    const disliked = [...state.disliked, action.payload];
    const cards = state.cards.map((card) => {
      return card.title === action.payload
        ? { ...card, dislikes: (card.dislikes += 1) }
        : card;
    });
    return {
      ...state,
      disliked,
      cards,
    };
  }
};
