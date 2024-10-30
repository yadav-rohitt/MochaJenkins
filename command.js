// Custom command for login
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type('rohyadav');
    cy.get('#loginFrm_password').type('rohit@1836');
    cy.get('#loginFrm > fieldset > .btn').click()  });