import React, {useState, useEffect } from "react";
import '../components/index.css';


const IndexPage = () => {
  return (
    <main>
      <div className="border">
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
      <img src={kitty.url} alt="api response"></img>
    </div>
  )
}
export default IndexPage;
