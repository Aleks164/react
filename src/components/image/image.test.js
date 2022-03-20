import React from "react";
import { render } from "@testing-library/react";
import { Image } from "./image";
import "@testing-library/jest-dom";

describe("Image", () => {
    it("Image is working", () => {
        const { container } = render(<Image />);
        const classImage = container.querySelector('.image');
        expect(classImage).toBeInTheDocument();
    })
})