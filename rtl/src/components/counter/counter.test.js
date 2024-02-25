import {act, render} from "@testing-library/react";

import Counter from "./counter";
import userEvent from "@testing-library/user-event";
import {renderWithProvider} from "../../lib/renderWithProvider";
import {renderTestApp} from "../../lib/renderTestApp";

describe('Counter', () => {
    it('increment', () => {
        const {getByTestId} = renderTestApp(null, {initialState: {counter: {value: 100}}})
        const incrementBtn = getByTestId(/increment-btn/i)
        expect(getByTestId(/counter-value/i)).toHaveTextContent(100)

        act(() => {
            userEvent.click(incrementBtn)
        })

        expect(getByTestId(/counter-value/i)).toHaveTextContent(101)
    })
})