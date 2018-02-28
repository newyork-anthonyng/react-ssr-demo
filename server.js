const express = require("express");
const path = require("path");
const app = express();

import React from "react";
import App from "./src/App";
import ReactDOM from "react-dom/server";

app.use(express.static(path.resolve(__dirname, "dist")));

app.use("*", (req, res) => {
  const html = ReactDOM.renderToString(<App />);

  res.send(`
    <!doctype html>
    <html>
      <body>
        <div id="app">${html}</div>
        <!-- <script src="bundle.js"></script> -->
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});