import { vi, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@/atoms/input";
test("input for text input", () => {
  const fn = vi.fn();
  fn("hello world");

  render(<Input onChange={fn} placeholder="Type here" />);

  const input = screen.getByPlaceholderText(/type here/i);
  expect(input).toBeDefined();
  expect(input.tagName).toBe("INPUT");
  expect(input.getAttribute("type")).toBe("text");
  // Simulate a change event
  fireEvent.change(input, { target: { value: "hello world" } });

  expect(fn).toHaveBeenCalled();
});
