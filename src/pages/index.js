import React, {useState, useEffect } from "react";
import '../components/index.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
        <button type="button">Nova imagem</button>
      </div>
    </main>
  )
}

function Kitty() {
  const [kitty, setKitty] = useState(0);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then(data => {
        const img = data[0]
        setKitty(img);
      })
  }, []);

  return (
    <div>
      <img className="img" src={kitty.url} alt="api response" />
    </div>
  )
}
export default IndexPage;
