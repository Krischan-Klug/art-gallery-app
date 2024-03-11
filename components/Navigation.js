import GlobalStyle from "../styles";
import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function Navigation({ pieces }) {
  /* console.log(pieces);
  console.log(pieces.imageSource); */

  return (
    <>
      <Link href="./art-pieces">This is a Link</Link>
      <Link href="./favorites">Favorite Art</Link>;
    </>
  );
}
