
const categories = ["Beach", "Windmills", "Modern","Countryside", "Pools","Islands", "Lake", "Skiing", "Castles",
"Caves", "Camping", "Arctic", "Desert", "Barns", "Lux"]

describe("Category Bar", ()=> {

    it("checks each category redirects user to its corresponding page",() => {
        cy.visit('/')
        categories.forEach(category => {
            cy.contains(category).click()
            cy.url().should('include', `/?category=${category}`)
            cy.get(`[data-cy=${category}]`).should('be.visible')
        })
    })
})



