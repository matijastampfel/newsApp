//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import React, { Component } from "react";
// import newsapi from 'newsapi' //???
// let NewsApi = require('newsapi'); //???
import axios from "axios";
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
        "https://newsapi.org/v2/top-headlines?" +
          "sources=bbc-news&" +
          "apiKey=914f1a282559480ba84f1513c9eb320d"
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
        <ul>
          {" "}
          {this.state.posts.map((post, idx) => (
            <li key={idx}> {post.title} </li>
          ))}{" "}
        </ul>{" "}
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
