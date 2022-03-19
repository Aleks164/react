import React from "react";
import { render, screen } from "@testing-library/react";
import { Hr } from "./hr";
import "@testing-library/react"

describe("hr", () => {
    it("hr is work", () => {
        render(<Hr />)
    })
    expect(screen.queryAllByLabelText("hr").toBe(1))
})