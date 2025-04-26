describe("end to end testing", () => {
    it("first test", () => {
        cy.visit("http://localhost:3000")

        cy.get('input[placeholder="What needs to be done?"]', { timeout: 10000 }).type("hello")
        cy.get('[data-testid=add-button]').click()
        
    })
})