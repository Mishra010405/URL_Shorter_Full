import { useState } from "react";
import axios from "axios";

function UrlForm({ setShortUrl }) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8001/url", {
        url: url,
      }, {
        withCredentials: true
      });

      setShortUrl(res.data.id);
      setUrl("");
    } catch (err) {
      console.log(err);
      
      alert("Error creating short URL");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />

      <button type="submit">Shorten</button>
    </form>
  );
}

export default UrlForm;
