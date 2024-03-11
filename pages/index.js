import ArtPieces from "@/components/ArtPieces";

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Art Pieces</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
