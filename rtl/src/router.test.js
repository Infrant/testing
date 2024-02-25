import {act, render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

describe('Router test', () => {
    it('Routes', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
        const mainLink = screen.getByTestId('main-page-link')
        const aboutLink = screen.getByTestId('about-page-link')

        act(() => {
            userEvent.click(aboutLink)
        })

        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        expect(screen.getByTestId('about-page')).toHaveTextContent(/about page/i)

        act(() => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    it('not found', () => {
        render(
            <MemoryRouter initialEntries={['/123']}>
                <App/>
            </MemoryRouter>
        )
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
})