import React, {useState, useEffect } from "react";
import '../components/index.css';
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "paws.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  const bgImage = data.file.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className="bg"
      fluid={bgImage}
    >
      <main>
        <div className="border">
          <h1>{data.site.siteMetadata.title}</h1>
          <Kitty />
        </div>
      </main>
    </BackgroundImage>
  )
}

function Kitty() {
  const [kitty, setKitty] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      const img = data[0]
      setKitty(img.url);
    })

  return (
    <div className="image-box">
      <img className="img" src={kitty} alt="api response" />
      <button type="button" onClick={fetchData}>Nova imagem</button>
    </div>
  )
}
export default IndexPage;
