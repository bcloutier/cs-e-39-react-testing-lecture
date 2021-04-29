/// <reference types="cypress" />

describe('A List', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should have a title', () => {
    cy.contains('My List');
  });

  it('should have an add button', () => {
    cy.get('button').contains('Add');
  });

  it('should have a new item added to it', () => {
    cy.get('input').type('item 1');
    cy.get('button').contains('Add').click();

    cy.get('div').contains('item 1');
  });

  it('should add multiple items', () => {
    cy.get('#new-item').type('item 1');
    cy.get('button').contains('Add').click();
    cy.get('#new-item').type('item 2');
    cy.get('button').contains('Add').click();

    cy.get('div').contains('item 1');
    cy.get('div').contains('item 2');
  });
});
