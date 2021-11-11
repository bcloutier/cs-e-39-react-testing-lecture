import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import List from "./lecture/2_List";
import User from "./lecture/3_User";
import CreateList from "./lecture/4_CreateList";
import Cube from "./lecture/5_Cube";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ margin: 30 }}>
      <Router>
        <nav style={{ marginBottom: 20 }}>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            <li>
              <Link to="/example1">Example 1 (Jest)</Link>
            </li>
            <li>
              <Link to="/example2">Example 2 (Jest)</Link>
            </li>
            <li>
              <Link to="/example3">Example 3 (Jest)</Link>
            </li>
            <li>
              <Link to="/example4">Example 4 (Cypress)</Link>
            </li>
            <li>
              <Link to="/example5">Example 5 (Cypress)</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/example1">
            <code>
              <pre>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// adds two numbers
const add = (a, b) => {
  if (!_isNumber(a) || !_isNumber(b)) {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// caculates the average
const average = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('parameter must be an array');
  }

  return (
    array.reduce((prev, curr) => {
      prev += curr;
      return prev;
    }, 0) / array.length
  );
};`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// calculates bounding box of a list of points
const boundingBox = (points) => {
  if (!Array.isArray(points)) {
    throw new Error("parameter must be an array");
  }
  const min = { x: Infinity, y: Infinity };
  const max = { x: -Infinity, y: -Infinity };

  points.forEach((point) => {
    if (point.x < min.x) {
      min.x = point.x;
    }
    if (point.x > max.x) {
      max.x = point.x;
    }
    if (point.y < min.y) {
      min.y = point.y;
    }
    if (point.y > max.y) {
      max.y = point.y;
    }
  });

  return { min, max };
};`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// clamps an array of points
const clamp = (points, min, max) => {
  if (!Array.isArray(points)) {
    throw new Error("parameter must be an array");
  }
  if (!_isNumber(min) || !_isNumber(max)) {
    throw new Error("parameters must be numbers");
  }

  return points.map((point) => {
    return {
      x: Math.max(min, Math.min(max, point.x)),
      y: Math.max(min, Math.min(max, point.y)),
    };
  });
};`}
                </SyntaxHighlighter>
              </pre>
            </code>
          </Route>
          <Route path="/example2">
            <List
              title="New List"
              items={["First item", "Second item", "Third item"]}
            />
          </Route>
          <Route path="/example3">
            <User />
          </Route>
          <Route path="/example4">
            <CreateList />
          </Route>
          <Route path="/example5">
            <Cube />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
