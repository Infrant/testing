import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../store/store";
import AppRouter from "../router/AppRouter";
import {MemoryRouter} from "react-router-dom";

export const renderTestApp = (component, options) => {
    const {initialState, initialRoute = '/'} = options

    return render(
        <Provider store={createReduxStore(initialState)}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    )
}