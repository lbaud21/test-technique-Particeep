import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 10vh;
  margin-bottom: 10vh;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 10vh;
`;

export const Card = styled.div`
  position: relative;
  width: 26%;
  height: 50vh;
  background-color: grey;
  border-radius: 1em;
  border: black solid 0.1em;
  margin-top: 4%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 40%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: x-large;
  text-align: center;
`;

export const CardCategory = styled.p`
  font-weight: normal;
  font-size: medium;
`;

export const CardLikesWrapper = styled.div`
  width: 90%;
  position: absolute;
  bottom: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;
export const CardLikeIcon = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CardLikesBarContainer = styled.div`
  width: 70%;
  background-color: red;
  border-radius: 50px;
`;

interface CardLikesBarProps {
  ratio: number;
}

export const CardLikesBar = styled.div<CardLikesBarProps>`
  height: 100%;
  width: ${(props) => `${props.ratio}%`};
  border-radius: inherit;
  background-color: blue;
  position: relative;
  text-align: right;
`;

export const CardLikesBarFiller = styled.span<CardLikesBarProps>`
  font-size: small;
  color: white;
  margin-right: 0.5em;
`;

export const DeleteIconWrapper = styled.div`
  width: 10%;
  position: absolute;
  top: 0.3em;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
