import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPieces, setArtPieces] = useState(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  /* setArtPieces(data);
  console.log(artPieces);
 */
  return (
    <>
      <Layout></Layout>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} artPieces={artPieces} />
    </>
  );
}
