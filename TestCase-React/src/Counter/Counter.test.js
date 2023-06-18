import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const incrementElement = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(incrementElement).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await userEvent.click(incrementButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("10");
  });

                            //Focus
//   test("elements are focused in the right order", async () => {
//     render(<Counter />);
//     const amountInput = screen.getByRole("spinbutton");
//     const setButton = screen.getByRole("button", {
//       name: "Set",
//     });
//     const incrementButton = screen.getByRole("button", {
//       name: /increment/i,
//     });

//     await userEvent.tab();
//     expect(amountInput).toHaveFocus();

//     await userEvent.tab();
//     expect(setButton).toHaveFocus();

//     await userEvent.tab();
//     expect(incrementButton).toHaveFocus();
//   });
});
