function Result({ shortUrl }) {
  if (!shortUrl) return null;

  const link = `http://localhost:3000/${shortUrl}`;

  return (
    <div>
      <p>Your Short URL:</p>
      <a href={link} target="_blank">{link}</a>
    </div>
  );
}

export default Result;
