import { render,screen } from "@testing-library/react"
import MovieCard from "../component/MovieCard"
import MOCK_DATA from "./../component/mocks/movieObject.json"
import { Provider } from "react-redux"
import store from "../utils/watchListstore"
it('should render movie card with data',()=>{
    render(
        <Provider store={store}>
            <MovieCard movie={MOCK_DATA}/>
        </Provider>
    
)

    const movieName = screen.getByText("A Working Man");
    expect(movieName).toBeInTheDocument();
})