import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Art Pieces</h1>
      <ArtPieces pieces={data}></ArtPieces>
    </div>
  );
}
