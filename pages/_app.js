import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Social from "../components/Social";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <div className="flex flex-row h-screen">
        <div className="absolute w-12 bottom-0 hidden md:block">
          <Social />
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <NavBar />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
