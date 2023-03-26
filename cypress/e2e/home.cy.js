describe("open the home page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
});
describe("open the first info comic page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".comic-info").first().click();
    cy.url().should("include", "/82967");
  });
});
describe("open the cart page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".cart").click();
    cy.url().should("include", "/cart");
  });
});
describe("open the cart page and then click the continue shopping button", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".cart").click();
    cy.get(".btn").click();
  });
});
