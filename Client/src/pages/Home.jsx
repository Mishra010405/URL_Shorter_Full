import { useState } from "react";
import UrlForm from "../components/UrlForm";
import Result from "../components/result";

function Home() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>URL Shortener</h1>

      <UrlForm setShortUrl={setShortUrl} />
      <Result shortUrl={shortUrl} />
    </div>
  );
}

export default Home;
