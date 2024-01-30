/* import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { DivRouge, add } from "./components/DivRouge"
describe("The add function :", () => {
    it("should do the addition of two positives number", () => {
        const somme = add(3,4)
        expect(somme).toBe(7)
    })
    it("should do the addition of negatives nulbers", () => {
        const somme = add(-1,-4)
        expect(somme).toBe(-5)
    })
    
})

describe("DivRouge render", () => {
    test("shoul render properlie", () => {
        render(<DivRouge />)
        const redBlock = screen.getByText("erreur")
        expect(redBlock.style.color).toBe("red")
        fireEvent.mouseEnter(redBlock)
        expect(redBlock.style.backgroundColor).toBe("blue")
    })
})
 */