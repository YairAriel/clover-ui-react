import React from "react";
import { render, within } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress", () => {
  it("should contain 4 bars by default", () => {
    const { getAllByTestId, getByTestId } = render(<Progress />);
    const progress = getByTestId('progress');
    const barsInProgress = within(progress).getAllByTestId('bar');
    expect(barsInProgress.length).toBe(4);
  });

  it("should contain the amount of bars as defiend in the prop 'bars'", () => {
    const { getAllByTestId, getByTestId } = render(<Progress bars="7"/>);
    const progress = getByTestId('progress');
    const barsInProgress = within(progress).getAllByTestId('bar');
    expect(barsInProgress.length).toBe(7);
  });

  it("should receive any valid css color", () => {
    const { getAllByTestId, getByTestId } = render(<Progress color="#FFC107" />);
    const progress = getByTestId('progress');
    const barsInProgress = within(progress).getAllByTestId('bar');
    expect(barsInProgress[0]).toHaveStyleRule("background", "#FFC107");
  });

  it("should have the 'small' optional size", () => {
    const { getAllByTestId, getByTestId } = render(<Progress size="small" />);
    const progress = getByTestId('progress');
    const barsInProgress = within(progress).getAllByTestId('bar');
    expect(barsInProgress[0]).toHaveStyleRule("width", "2px");
    expect(barsInProgress[0]).toHaveStyleRule("height", "9px");
  });

  it("should have the 'large' optional size", () => {
    const { getAllByTestId, getByTestId } = render(<Progress size="large" />);
    const progress = getByTestId('progress');
    const barsInProgress = within(progress).getAllByTestId('bar');
    expect(barsInProgress[0]).toHaveStyleRule("width", "8px");
    expect(barsInProgress[0]).toHaveStyleRule("height", "36px");
  });
});