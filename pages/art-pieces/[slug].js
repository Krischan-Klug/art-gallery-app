import { useRouter } from "next/router";
import Link from "next/link";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces, handleToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      piece={piece}
      handleToggleFavorite={handleToggleFavorite}
    ></ArtPieceDetails>
  );
}
