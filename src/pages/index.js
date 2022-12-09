import React, {useState, useEffect } from "react";
import '../components/index.css';
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <div className="border">
        <h1>{data.site.siteMetadata.title}</h1>
        <Kitty />
      </div>
    </main>
  )
}

function Kitty() {
  const [kitty, setKitty] = useState(0);
  const api_key = 'live_Hl8HPX7qjLncmpIKdhWtVtCvdceV3mqD7W4h9jsFq0Kw5GiXgTy7zHprPV658o9b'

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      "x-api-key": api_key
    }
  })
    .then(res => res.json())
    .then(data => {
      const img = data[0]
      setKitty(img.url);
    })

  return (
    <div className="image-box">
      <img className="img" src={kitty} alt="api response" />
      <button type="button" onClick={fetchData}>New kitty!</button>
    </div>
  )
}
export default IndexPage;
