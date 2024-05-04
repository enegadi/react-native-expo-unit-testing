import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("has a specific child component", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children[0].type).toBe("Text");
  });
});
