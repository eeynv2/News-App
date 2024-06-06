import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3aee9847ad0a41f99e125b988556e3fe')
        .then(response => response.json())
        .then(json => setNewsItem(json))
        .catch(error => console.error(error));

}, []);
let newsArray = newsItem?.articles;

  return (
    <div className="App">
      <Navbar firstNav={"Home"} secondNav={"News"}></Navbar>
      <div className="container">
        <div className="row">
          {(() => {
            let cards = [];
            for (let i = 1; i <= newsArray.length; i++) {
              cards.push(<Card key={i} title = {i.title}></Card>);
            }
            return cards;
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
