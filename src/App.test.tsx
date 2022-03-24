import React from "react";
import { App } from "./App";
import { render, screen } from "@testing-library/react";
import { textP } from "./components/DefultPage/DefultPage";
import "@testing-library/jest-dom";

describe("DefultPage", () => {
  it("test hr at DOM", () => {
    let spyPrompt = jest.spyOn(window, "prompt");
    spyPrompt.mockReturnValueOnce("Hr").mockReturnValueOnce("");
    const { container } = render(<App />);
    const classAllHr = container.querySelector(".hr");
    expect(classAllHr).toBeInTheDocument();
  });
  it("test Paragraph components", () => {
    let spyPrompt = jest.spyOn(window, "prompt");
    spyPrompt.mockReturnValueOnce("Paragraph").mockReturnValueOnce("");
    render(<App />);

    expect(screen.getByText(textP)).toBeInTheDocument();
  });
  it("test Title components", () => {
    let spyPrompt = jest.spyOn(window, "prompt");
    spyPrompt.mockReturnValueOnce("Title").mockReturnValueOnce("");
    render(<App />);
    expect(screen.getByText("Click on me")).toBeInTheDocument();
  });
  it("test DefultPage components", () => {
    let spyPrompt = jest.spyOn(window, "prompt");
    spyPrompt.mockReturnValueOnce("");
    const { container, getByText } = render(<App />);
    screen.debug();
    expect(getByText(textP)).toBeInTheDocument();
    expect(getByText("Click on me")).toBeInTheDocument();
    expect(getByText("Some text in h1 element")).toBeInTheDocument();
    expect(getByText('Выберите тег "h"')).toBeInTheDocument();
    expect(getByText("h1")).toBeInTheDocument();

    const classImage = container.querySelector(".image");
    expect(classImage).toBeInTheDocument();
    const classHr = container.querySelector(".hr");
    expect(classHr).toBeInTheDocument();
  });
  it("test Image components", () => {
    let spyPrompt = jest.spyOn(window, "prompt");
    spyPrompt.mockReturnValueOnce("Image").mockReturnValueOnce("left").mockReturnValueOnce("");
    const { container } = render(<App />);
    const classImage = container.querySelector(".image");
    expect(classImage).toBeInTheDocument();
    if (classImage) {
      expect((classImage as HTMLElement).style.float).toBe("left");
    }
  });
  it("test HSelector components", () => {
    let spyPrompt = jest.spyOn(window, "prompt");
    spyPrompt.mockReturnValueOnce("HSelector").mockReturnValueOnce("h3").mockReturnValueOnce("");
    render(<App />);
    expect(screen.getByText("Some text in h3 element")).toBeInTheDocument();
    expect(screen.getByText('Выберите тег "h"')).toBeInTheDocument();
    expect(screen.getByText("h3")).toBeInTheDocument();
  });
});