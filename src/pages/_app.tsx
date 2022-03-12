import RidesContext, { useRidesContextState } from "../common/RidesContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const ridesContextValue = useRidesContextState();

  return (
    <RidesContext.Provider value={ridesContextValue}>
      <Component {...pageProps} />
    </RidesContext.Provider>
  );
}

export default MyApp;
