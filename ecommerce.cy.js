describe('E-commerce Platform Test Suite', () => {

    // Login before all tests
    before(() => {
      cy.login('rohyadav', 'rohit@1836');
    });
  
    // Logout after all tests
    
  
    // Test: Check if the search bar is present after login
    it('should display the search bar after login', () => {
      cy.get('#filter_keyword').should('be.visible')
    });
     
    after(() => {
        
        cy.visit('https://automationteststore.com/index.php?rt=account/logout')
        cy.get('.breadcrumb > :nth-child(3)')
       
    });
 
   
  });