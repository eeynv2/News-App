import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [newsItem, setNewsItem] = useState({ articles: [] });

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3aee9847ad0a41f99e125b988556e3fe')
      .then(response => response.json())
      .then(json => setNewsItem(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Navbar firstNav={"Home"} secondNav={"News"}></Navbar>
      <div className="container">
        <div className="row">
          {newsItem.articles.map((article, index) => (
            <Card key={index} title={article.title} content = {article.description} img= {article.urlToImage} author={article.author} url = {article.url} source = {article.source.name}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
