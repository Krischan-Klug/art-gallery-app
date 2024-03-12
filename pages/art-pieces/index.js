import ArtPieces from "@/components/ArtPieces";
import { useRouter } from "next/router";

export default function ArtPiecesRender({ pieces, onToggleFavorite }) {
  return (
    <div>
      {/* <h1>Random Art Piece</h1>
      <Spotlight pieces={pieces}></Spotlight> */}
      <h1>Art Pieces</h1>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
      ></ArtPieces>
    </div>
  );
}
