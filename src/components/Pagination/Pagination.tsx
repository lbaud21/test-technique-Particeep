import { useDispatch } from "react-redux";
import { PaginationWrapper, PaginationButton } from "./style";
import { incrementPagination } from "../../store/actions/actionsCreators";
import { decrementPagination } from "../../store/actions/actionsCreators";
import useCards from "../../hooks/useCards";

const Pagination = () => {
  const dispatch = useDispatch();

  const { hasMore, hasLess } = useCards();

  const handleClick = (type: string) => {
    type === "prev"
      ? dispatch(decrementPagination())
      : dispatch(incrementPagination());
  };

  return (
    <PaginationWrapper>
      {hasLess && (
        <PaginationButton onClick={() => handleClick("prev")}>
          PREV
        </PaginationButton>
      )}
      {hasMore && (
        <PaginationButton onClick={() => handleClick("next")}>
          NEXT
        </PaginationButton>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
