import React from "react";
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="container">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>
            We are very sorry for inconvience. It looks like you're trying to
            access a page that either has been deleted or never even existed.
          </h2>
        </div>
      </div>
    </div>
  );
}
