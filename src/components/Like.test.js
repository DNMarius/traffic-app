import { fireEvent, render, screen } from "@testing-library/react"
import { Like } from "./Like"

describe("Like component", () => {
    let likeComponent, unlikedIcon, likedIcon
    render(<Like />)
    likeComponent = screen.queryByText("J'aime")
    
    it("Must render properly", () => {
        render(<Like />)
        expect(likeComponent).toBeInTheDocument()
    })
    it("Must render unliked icon and hide liked icon", () => {
        render(<Like />)
        unlikedIcon = screen.queryByTestId("unlikedIcon")
        expect(unlikedIcon).toBeInTheDocument()
        likedIcon = screen.queryByTestId("likedIcon")
        expect(likedIcon).toBeNull()
    })
    it("Must render liked icon and hide unliked icon when whe click on the like button", () => {
        render(<Like />)
        likeComponent = screen.queryByText("J'aime")
        fireEvent.click(likeComponent)
        unlikedIcon = screen.queryByTestId("unlikedIcon")
        expect(unlikedIcon).toBeNull()
        likedIcon = screen.queryByTestId("likedIcon")
        expect(likedIcon).toBeInTheDocument()
    })
})

