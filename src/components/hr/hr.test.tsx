import React from "react";
import { render } from "@testing-library/react";
import { Hr } from "./hr";
import "@testing-library/react"

describe("hr", () => {
    it("hr is work", () => {
        render(<Hr />)
    })
})