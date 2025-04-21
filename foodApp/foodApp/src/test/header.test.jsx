import {screen, render, fireEvent } from "@testing-library/react"
import {Provider} from "react-redux"
import Header from "./../component/Header"
import store from "./../utils/watchListstore"
import { BrowserRouter } from "react-router-dom"

it('should load Header component with a login button', ()=>{
    render(
        <BrowserRouter>
            <Provider store = {store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
})

test('should load watchlist 0 items',()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const watchlist = screen.getByText('Watchlist (0 items)');
    expect(watchlist).toBeInTheDocument()
})

test('should render logout button on click of login button',()=>{
    render(
        <BrowserRouter>
            <Provider store = {store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button',{name:'LogIn'});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button',{name:'Logout'});
    expect(logoutButton).toBeInTheDocument()
})