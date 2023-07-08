import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../util/store";
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering Header", () => {
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
    </StaticRouter>
    )
    console.log(header);

    const logo = header.getAllByTestId("logo");
    console.log(logo);
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
})

test("Cart have 0-items on rendering Header", () => {
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
    </StaticRouter>
    )
    console.log(header);

    const cart = header.getByTestId("cart");
    console.log(cart);
    expect(cart.innerHTML).toBe("Cart-0");
})