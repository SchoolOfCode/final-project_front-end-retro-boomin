

describe('The Home Page', () => {
it('does not show create recipe when not logged in', () => {
     cy.visit('https://craveaway.vercel.app/');
     cy.get(
      '.mui-style-0 > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root'
    ).click();
    cy.url().should('include', '/createrecipe');
    cy.get('.mui-style-n6kfzp > .MuiButtonBase-root').contains('Login');
  });
});

//generic visit test
it('visits site', () => {
    cy.visit('https://craveaway.vercel.app/');
  });

//searching displays correct info

  describe('Search recipe', () => {
    it('tests the search feature', () => {
      cy.visit('https://craveaway.vercel.app/');
      cy.get('input').type('keto').should('have.value', 'keto');
      cy.get('[data-testid="SearchIcon"]').click();
      cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-19midj6').contains('Keto');
    });
  });

describe('Checks that you cannot submit a recipe without filling all the information out', () => {
  it('logs in through auth0', () => {
    cy.visit('https://craveaway.vercel.app/');
    cy.get('.burger-menu').click();
    cy.get(
      '.mui-style-p4gg3y > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root'
    ).click();

    cy.origin('https://dev-eotu3qte.us.auth0.com', () => {
      cy.get('#email').type(Cypress.env('USERNAME'));
      cy.get('#password').type(Cypress.env('PASSWORD'));
      // cy.contains('Log In').click(); can do this or:
      cy.get('#btn-login').click();
    });
    cy.url().should('include', 'craveaway');

    cy.get(
      '.mui-style-0 > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root'
    ).click();
    cy.get('.mui-style-90rqjo > .MuiInputBase-root').type('Test');
    // cy.get(':nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click().parent().trigger('keydown', {
    //   key: 'Enter',
    // })
    cy.get('.MuiButton-contained').click();
    cy.get('.MuiAlert-message').contains('must fill out');
  });
});


describe('Clicking on an ingredient adds it onto the shopping list in profile', () => {
  it('logs in through auth0', () => {
  cy.visit('https://craveaway.vercel.app/');
  cy.get('.burger-menu').click();
  cy.get(
    '.mui-style-p4gg3y > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root'
  ).click();

  cy.origin('https://dev-eotu3qte.us.auth0.com', () => {
    cy.get('#email').type(Cypress.env('USERNAME'));
    cy.get('#password').type(Cypress.env('PASSWORD'));
    // cy.contains('Log In').click(); can do this or:
    cy.get('#btn-login').click();
  });
  cy.url().should('include', 'craveaway');

  cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-19midj6').click();
  cy.url().should('include', 'post');


  })
  // it('adds ingredient', () => {
  //   cy.visit('https://craveaway.vercel.app/post/1');
  //   cy.get(':nth-child(1) > .MuiButtonBase-root > [data-testid="AddIcon"] > path').click();
  //   cy.get('.burger-menu').click();
  //   cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root').click();
  //   cy.get('.mui-style-n6kfzp > .MuiButtonBase-root').click();

  //   cy.origin('https://dev-eotu3qte.us.auth0.com', () => {
  //     cy.get('#email').type(Cypress.env('USERNAME'));
  //     cy.get('#password').type(Cypress.env('PASSWORD'));
  //     // cy.contains('Log In').click(); can do this or:
  //     cy.get('#btn-login').click();
  //   });
  //   cy.url().should('include', 'craveaway');


  })



