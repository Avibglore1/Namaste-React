import Contact from "../component/Contact";
import {render,screen} from "@testing-library/react"

test('should load watchlist compoenent',()=>{
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
})