import { test, expect, vi } from "vitest";

test("Button", async () => {
  const { render, screen } = await import("@testing-library/react");
  const { default: Button } = await import("@/atoms/button");
  const fn = vi.fn();
  fn("hello world");

  render(<Button onclick={fn}>Click Me</Button>);

  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeDefined();
  expect(button.textContent).toMatch(/click me/i);

  // Simulate a click event
  button.click();

  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith("hello world");
  // Check if the click event was handled (if applicable)
  // This part would depend on the implementation of the Button component
});
