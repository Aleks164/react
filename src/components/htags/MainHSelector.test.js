import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HSelector } from "./MainHSelector";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";

describe("HSelector", () => {
    it("HSelector in start condition", () => {
        render(<HSelector />)
        screen.debug();
        expect(screen.getByText("Выберите тег \"h\"")).toBeInTheDocument();
        expect(screen.getByText("h1")).toBeInTheDocument();
        expect(screen.getByText("Some text in h1 element")).toBeInTheDocument();
    })
    it("HSelector after click on h2 element", () => {
        render(<HSelector />);
        userEvent.selectOptions(screen.getByTestId('h-select'), 'h2');
        expect((screen.getByText('h2')).selected).toBeTruthy();
        expect(screen.getByText("Some text in h2 element")).toBeInTheDocument();
    })
})