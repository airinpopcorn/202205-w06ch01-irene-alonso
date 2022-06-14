import { render, screen } from "@testing-library/react";
import { Character } from "./character";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));

describe("Given character component", () => {
    describe("When we call it in HomePage", () => {
        test("Then it should render", () => {
            const mockCharacter = {
                name: "Name",
                family: "Family",
                age: 22,
                id: 1,
                category: "king" as "king" | "knight" | "counselor" | "squire",
                lifeState: true,
                message: "message",
            };

            render(<Character character={mockCharacter} />);
            expect(screen.getByText(/Name/i)).toBeInTheDocument();
        });
    });
});
