import React from "react";
import renderer from "react-test-renderer";
import CustomTextInput from "../../src/components/CustomTextInput";

describe("<CustomTextInput />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CustomTextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    const tree = renderer.create(<CustomTextInput />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("has a specific child component", () => {
    const tree = renderer.create(<CustomTextInput />).toJSON();
    expect(tree.children[0].type).toBe("Text");
  });

  it("has a specific prop value", () => {
    const tree = renderer.create(<CustomTextInput prop1="value1" />).toJSON();
    expect(tree.props.prop1).toBe("value1");
  });

  it("has a default placeholder value", () => {
    const tree = renderer.create(<CustomTextInput />).toJSON();
    expect(tree.props.placeholder).toBe("Enter text");
  });

  it("triggers onChange event", () => {
    const mockOnChange = jest.fn();
    const tree = renderer
      .create(<CustomTextInput onChange={mockOnChange} />)
      .toJSON();
    tree.props.onChangeText("Hello");
    expect(mockOnChange).toHaveBeenCalledWith("Hello");
  });

  it("has a specific style applied", () => {
    const tree = renderer
      .create(<CustomTextInput style={{ color: "red" }} />)
      .toJSON();
    expect(tree.props.style).toEqual({ color: "red" });
  });
});
