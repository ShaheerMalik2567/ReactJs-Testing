import { render, screen } from "@testing-library/react";
import Greeting from "./greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("Greeting Testing", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //nothing

    //Assert

    const hello = screen.getByText("Hello", { exact: false });
    expect(hello).toBeInTheDocument();
  });

  test("rendering paragraph before button", () => {
    render(<Greeting />);

    //Act
    //nothing

    //Assert

    const text = screen.getByText("Welcome to Shaheer's Website", {
      exact: true,
    });
    expect(text).toBeInTheDocument();
  });

  test("rendering paragraph after button", () => {
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);
    //Assert

    const text = screen.getByText("The text is Changed", { exact: true });
    expect(text).toBeInTheDocument();
  });

  test("Displaying the text or not", () => {
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);
    //Assert

    const text = screen.queryByText("Welcome to Shaheer's Website", {
      exact: true,
    });
    expect(text).toBeNull();
  });
});
