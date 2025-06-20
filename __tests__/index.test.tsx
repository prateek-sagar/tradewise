import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("Home", () => {
  //
  render(<Home />);
  expect(screen.getByRole("heading")).toBeDefined();
  expect(screen.getByRole("heading").textContent).toMatch(/home/i);
  expect(screen.getByRole("banner")).toBeDefined();
  expect(screen.getByRole("contentInfo")).toBeDefined();
});
