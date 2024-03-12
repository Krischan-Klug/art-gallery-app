import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPieces, setArtPieces] = useState(data);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  //created a GlobalState artPiecesInfo, should be saved!!! use useLocalStorageState instead !!!
  // setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]); -> OBSOLETE, done in line 32
  //set artPiecesInfo to all artPiecesInfo + new slug with favoriteFlag
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    console.log("clicked!");
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }
  return (
    <>
      <Layout></Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        artPieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
      {/* added artPiecesInfo prop and handleToggleFavorite*/}
    </>
  );
}
