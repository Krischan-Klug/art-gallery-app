import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
