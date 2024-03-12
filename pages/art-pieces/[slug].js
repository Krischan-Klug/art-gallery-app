import { useRouter } from "next/router";
import Link from "next/link";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  const piece = pieces.find((piece) => piece.slug === slug);

  return <ArtPieceDetails piece={piece}></ArtPieceDetails>;
}
