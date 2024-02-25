import {act, screen} from "@testing-library/react";

import NavBar from "./navBar";
import {renderWithRouter} from "../../lib/renderWithRouter";
import userEvent from "@testing-library/user-event";

describe('NavBar', () => {
    beforeEach(() => {
        renderWithRouter(<NavBar/>)
    })
    it('test mainLink', () => {
        const mainLink = screen.getByTestId('main-page-link')

        act(() => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('main-page')).toBeInTheDocument()

    })

    it('test aboutLink', () => {
        const aboutLink = screen.getByTestId('about-page-link')

        act(() => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    it('test usersLink', () => {
        const usersLink = screen.getByTestId('users-page-link')

        act(() => {
            userEvent.click(usersLink)
        })
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})