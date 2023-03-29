import './App.css';
import {useState, useEffect} from "react";
import Output from "./Output";

function App() {
  const [post, setPost] = useState({
    title: "User roles",
    date: "March 10, 2023",
    platform: "Cloud",
    quarter: "2023 q1",
    imageName: "61-use-roles.png"
  });

  return (
    <div className="App">
      <div class="fields">
        <label class="field">
          Title
          <input type="text" value={post.title} onInput={e => setPost({...post, title: e.target.value }) } />
        </label>
        <label class="field">
          Date
          <input type="text" value={post.date} onInput={e => setPost({...post, date: e.target.value }) } />
        </label>
        <label class="field">
          Plaform
          <input type="text" value={post.platform} onInput={e => setPost({...post, platform: e.target.value }) } />
        </label>
        <label className="field">
          Quarter
          <input type="text" value={post.quarter} onInput={e => setPost({...post, quarter: e.target.value})}/>
        </label>
        <label className="field">
          Image name
          <input type="text" value={post.imageName} onInput={e => setPost({...post, imageName: e.target.value})}/>
        </label>
      </div>
      <Output post={post} />
    </div>
  );
}

export default App;
