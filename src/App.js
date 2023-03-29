import './App.css';
import {useState} from "react";
import Output from "./Output";
import ContentEditor from './ContentEditor';

function App() {
  const [post, setPost] = useState({
    title: "User roles",
    date: "March 10, 2023",
    platform: "Cloud",
    quarter: "2023 q1",
    imageName: "61-use-roles.png",
    contentHtml: "<p>Please put the content here. You can paste from Google Doc.</p>"
  });

  return (
    <div className="App">
      <section className="controls">
        <div className="fields-wrapper">
          <label className="field">
            Title
            <input type="text" value={post.title} onInput={e => setPost({...post, title: e.target.value }) } />
          </label>
          <label className="field">
            Date
            <input type="text" value={post.date} onInput={e => setPost({...post, date: e.target.value }) } />
          </label>
          <label className="field">
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
        <div className="content-editor-wrapper">
          <label>Content</label>
          <ContentEditor initialContent={post.contentHtml} onUpdate={newContentHtml => setPost({...post, contentHtml: newContentHtml })} />
        </div>
      </section>
      <section>
        <p className="section-title">Output</p>
        <Output post={post} />
      </section>
    </div>
  );
}

export default App;
