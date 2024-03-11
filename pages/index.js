import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Random Art Piece</h1>
      <Spotlight pieces={pieces}></Spotlight>
      {/* <h1>Art Pieces</h1>
      <ArtPieces pieces={pieces}></ArtPieces> */}
    </div>
  );
}
