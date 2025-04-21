import Contact from "../component/Contact";
import {render,screen} from "@testing-library/react"



describe("test cases of contact section",()=>{
    test('should load watchlist component',()=>{
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
    
    test('should load button from contact component',()=>{
        render(<Contact/>)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
    })
})