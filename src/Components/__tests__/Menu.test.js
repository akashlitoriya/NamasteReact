import "@testing-library/jest-dom"
import { fireEvent, getByTestId, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import Body from "../Body"
import Header from "../Header"
import {StaticRouter} from "react-router-dom/server"
import store from "../../util/store"
import { MENU_DATA } from "../../mocks/restaurantData"
import RestaurantMenu from "../RestaurantMenu"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(MENU_DATA)},
    });
});

test("Testing the menu and cart items", async () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => {
        return expect(body.getByTestId("menu"))
    });

    const menu = body.getByTestId("menu");
    const addBtn = body.getAllByTestId("add-btn");
    
    fireEvent.click(addBtn[0]);

    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-1");

    
});