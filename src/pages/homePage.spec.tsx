import { Character } from "../models/character";
import { store } from "../store/store";
import { render } from "../store/test-utils";
import { HomePage } from "./homePage";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given homePage component", () => {
    describe("When we dispatch characters", () => {
        test("Then it should render", () => {
            const preloadedState = { characters: [] as Array<Character> };
            render(
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>,
                { preloadedState, store }
            );
            expect(screen.getByText(/Game/i)).toBeInTheDocument();
        });
    });
});
