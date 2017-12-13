import React, { Component } from "react";

//
// ─── VAR ────────────────────────────────────────────────────────────────────────
//

let search = "";

//
// ────────────────────────────────────────────────────────────────────── VAR ─────
//

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  //
  // ─── HANDLERS ───────────────────────────────────────────────────────────────────
  //

  //
  // ──────────────────────────────────────────────────────────────── HANDLERS ─────
  //

  // Click function do not work !!!

  render() {
    return (
      <div className="topnav">
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Buscar"
            />
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button">
                <i className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
