import {render, screen, fireEvent, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from './App';
import {MemoryRouter} from "react-router-dom";

describe('App', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
    })
    test('renders learn react link', () => {
        const titleElem = screen.getByText(/title/i);
        const btnElem = screen.getByRole('button');
        const inputElem = screen.getByPlaceholderText('text input1');
        expect(titleElem).toBeInTheDocument();
        expect(btnElem).toBeInTheDocument();
        expect(inputElem).toBeInTheDocument();
        expect(inputElem).toMatchSnapshot();
    });

    test('async', async () => {
        // const titleElem = screen.queryByText(/title2/i)
        // expect(titleElem).toBeNull()

        screen.debug()
        const dataElem = await screen.findByText(/data/i)
        expect(dataElem).toBeInTheDocument()
        expect(dataElem).toHaveStyle({color: 'green'})
        screen.debug()
    })

    test('click event', () => {
        const btnElem = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('toggle-div')).toBeNull()
        fireEvent.click(btnElem)
        expect(screen.queryByTestId('toggle-div')).toBeInTheDocument()
        fireEvent.click(btnElem)
        expect(screen.queryByTestId('toggle-div')).toBeNull()
    })

    test('input event', () => {
        const inputElem = screen.getByTestId('input-elem')
        expect(screen.queryByTestId('input-value-elem')).toHaveTextContent('')
        // fireEvent.change(inputElem, {
        //     target: {
        //         value: 'value for test'
        //     }
        // })
        act(() => {
            userEvent.type(inputElem, 'value for test')
        })
        expect(screen.queryByTestId('input-value-elem')).toHaveTextContent('value for test')
    })
})
