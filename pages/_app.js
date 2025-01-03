import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import Layout from "./layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
