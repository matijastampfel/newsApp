//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import React, { Component } from "react";
import axios from "axios";
import Image from "react-image-resizer";
//
// ────────────────────────────────────────────────────────────────── IMPORTS ─────
//

//
// ─── VARS ─────────────────────────────────────────────────────────────────────
//

let posts = [];

//
// ─────────────────────────────────────────────────────────────────── VARS ─────
//
//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

export class NewsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  //
  // ────────────────────────────────────────────────────────────── CONSTRUCTOR ─────
  //

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=yugoslavia&apiKey=914f1a282559480ba84f1513c9eb320d"
      )
      .then(res => {
        console.log(res);
        posts = res.data.articles;
        this.setState({
          posts
        });
      });
  }

  //
  // ───────────────────────────────────────────────────────────────── HANDLERS ─────
  //

  render() {
    return (
      <div className="news">
        <ul className="newsList">
          {this.state.posts.map((post, idx) => (
            <div className='newsContainer'>
            <li key={idx}>
              <div className='newsImage'>
                <Image src={post.urlToImage} alt="" width={340} height={140} />
              </div>
              <div className='newsTitle'>
                <h1>{post.title}</h1>
                {post.description}
                <br/>
                <a href={post.url}>Go to page</a>
              </div>
            </li>
            <br/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

//
// ──────────────────────────────────────────────────────────────── COMPONENT ─────
//

//
// ─── NOTES ──────────────────────────────────────────────────────────────────────
//

//
// ──────────────────────────────────────────────────────────────────── NOTES ─────
//
