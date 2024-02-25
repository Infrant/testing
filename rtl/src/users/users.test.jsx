import {usersMock} from "./const";
import {act, render, screen} from "@testing-library/react";
import {Users} from "./users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "../pages/userDetailsPage";
import React from "react";
import AppRouter from "../router/AppRouter";
import {renderWithRouter} from "../lib/renderWithRouter";

jest.mock('axios')
describe('Users', () => {
    let response
    beforeEach(() => {
        response = {
            data: usersMock
        }
        axios.get.mockReturnValue(response)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Render users', async () => {
        render(<MemoryRouter>
            <Users/>
        </MemoryRouter>)

        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(10)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })

    test('Render user details page', async () => {
        renderWithRouter(<Users/>)

        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(10)

        act(() => {
            userEvent.click(users[0])
        })
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    })
})
