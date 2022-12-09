import React, {useState, useEffect } from "react";

const IndexPage = () => {
  return (
    <div>
      <Kitty />
    </div>
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
