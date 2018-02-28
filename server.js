const express = require("express");
const path = require("path");
const app = express();

import React from "react";
import App from "./src/App";
import ReactDOM from "react-dom/server";

app.use(express.static(path.resolve(__dirname, "dist")));

app.use("*", (req, res) => {
  // We can pass information from the backend to the frontend
  // const initialCount = req.query.foo || 0;
  const initialCount = 0;
  
  const html = ReactDOM.renderToString(<App initialCount={initialCount} />);

  res.send(`
    <!doctype html>
    <html>
      <body>
        <div id="app">${html}</div>
        <script type="text/javascript">
          // window.__INITIAL_STATE__ = ${initialCount};
        </script>
        <!-- <script src="bundle.js"></script> -->
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});