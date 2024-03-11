import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesRender({ pieces }) {
  return (
    <div>
      {/* <h1>Random Art Piece</h1>
      <Spotlight pieces={pieces}></Spotlight> */}
      <h1>Art Pieces</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
