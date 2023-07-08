import "@testing-library/jest-dom"
import { fireEvent, getByTestId, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import Body from "../Body"
import {StaticRouter} from "react-router-dom/server"
import store from "../../util/store"
import { RESTAURANT_DATA } from "../../mocks/restaurantData"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(RESTAURANT_DATA)},
    });
});

test("Shimmer load on homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer");
    console.log(shimmer);
    expect(shimmer).toBeInTheDocument();
})

test("Shimmer cards are loaded on homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer");
    console.log(shimmer);
    expect(shimmer.children.length).toBe(20);
})

test("Restaurant cards are loaded on homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => {
        return expect(body.getByTestId("search-btn"))
    });
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
})

test("Search(food) on homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => {
        return expect(body.getByTestId("search-btn"))
    });

    const input = body.getByTestId("search-input");
    fireEvent.change(input, {
        target: {
            value: "food",
        },
    });

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);



    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(1);
});
test("Search functionality on homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const searchBtn = body.getByTestId("search-btn");
    console.log(searchBtn);
})