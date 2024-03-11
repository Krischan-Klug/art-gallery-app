import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  border: 3px solid black;
  color: ${(props) => (props.$isFavorite ? "red" : "white")};
  padding: 0.2rem 0.2rem 0.2rem;
  width: 50px;
  height: 50px;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          onToggleFavorite;
        }}
        isFavorite={isFavorite}
        aria-label={isFavorite ? "like" : "unlike"}
      >
        <Image
          src="/assets/heart.svg"
          width={40}
          height={40}
          alt="heart fav picture"
        />
      </Button>
    </>
  );
}
