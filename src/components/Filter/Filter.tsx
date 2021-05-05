import { useEffect, useState } from "react";
import { FilterWrapper } from "./style";
import useCards from "../../hooks/useCards";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import {
  chooseCategory,
  choosePagination,
} from "../../store/actions/actionsCreators";

const Filter = () => {
  const { categories } = useCards();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  function onCategoryChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value);
    dispatch(chooseCategory(e.target.value));
  }

  function onPaginationChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(choosePagination(+e.target.value));
  }

  useEffect(() => {
    if (categories.includes(selected)) {
      return;
    }
    setSelected("");
    dispatch(chooseCategory(""));
  }, [categories,dispatch, selected]);

  return (
    <FilterWrapper>
      <select value={selected} onChange={onCategoryChange}>
        <option value="">All categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select onChange={onPaginationChange}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </FilterWrapper>
  );
};

export default Filter;
