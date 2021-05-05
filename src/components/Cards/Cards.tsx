import useCards from "../../hooks/useCards";
import {
  CardsWrapper,
  Card,
  CardTitle,
  CardCategory,
  CardLikesWrapper,
  CardLikeIcon,
  CardLikesBarContainer,
  CardLikesBar,
  CardLikesBarFiller,
  DeleteIconWrapper,
} from "./style";
import { RiThumbUpLine } from "@react-icons/all-files/ri/RiThumbUpLine";
import { RiThumbUpFill } from "@react-icons/all-files/ri/RiThumbUpFill";
import { RiThumbDownLine } from "@react-icons/all-files/ri/RiThumbDownLine";
import { RiThumbDownFill } from "@react-icons/all-files/ri/RiThumbDownFill";
import { RiDeleteBinFill } from "@react-icons/all-files/ri/RiDeleteBinFill";
import { deleteCard, dislike, like } from "../../store/actions/actionsCreators";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";

const Cards = () => {
  const liked = useAppSelector((state) => state.liked);
  const disliked = useAppSelector((state) => state.disliked);

  const { cards } = useCards();

  const dispatch = useDispatch();

  const handleDeleteClick = (title: string) => {
    dispatch(deleteCard(title));
  };

  const handleLikeClick = (title: string) => {
    dispatch(like(title));
    if (disliked.includes(title)) {
      dispatch(dislike(title));
    }
  };

  const handleDislikeClick = (title: string) => {
    dispatch(dislike(title));
    if (liked.includes(title)) {
      dispatch(like(title));
    }
  };

  return (
    <CardsWrapper>
      {cards?.map((card, index) => (
        <Card key={index}>
          <DeleteIconWrapper onClick={() => handleDeleteClick(card.title)}>
            <RiDeleteBinFill style={{ width: '100%', height: 'auto' }} />
          </DeleteIconWrapper>
          <CardTitle>{card?.title}</CardTitle>
          <CardCategory>{card?.category}</CardCategory>
          <CardLikesWrapper>
            <CardLikeIcon onClick={() => handleLikeClick(card.title)}>
              {liked.includes(card.title) ? (
                <RiThumbUpFill />
              ) : (
                <RiThumbUpLine />
              )}
            </CardLikeIcon>
            <CardLikesBarContainer>
              <CardLikesBar
                ratio={(100 * card.likes) / (card.likes + card.dislikes)}
              >
                <CardLikesBarFiller
                  ratio={(100 * card.likes) / (card.likes + card.dislikes)}
                >{Math.round((100 * card.likes) / (card.likes + card.dislikes))+"%"}</CardLikesBarFiller>
              </CardLikesBar>
            </CardLikesBarContainer>
            <CardLikeIcon onClick={() => handleDislikeClick(card.title)}>
              {disliked.includes(card.title) ? (
                <RiThumbDownFill />
              ) : (
                <RiThumbDownLine />
              )}
            </CardLikeIcon>
          </CardLikesWrapper>
        </Card>
      ))}
    </CardsWrapper>
  );
};

export default Cards;
