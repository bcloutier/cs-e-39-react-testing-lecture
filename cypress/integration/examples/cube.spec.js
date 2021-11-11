/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("A Cube", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.get("a").contains("Example 5").click();
  });

  it("should rotate", () => {
    return cy.get("canvas").then(([c]) => {
      let eventStart = new MouseEvent("mousedown", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: c.width / 2,
        clientY: c.height / 2,
      });
      const mouseMoveEvents = new MouseEvent("mousemove", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: c.width / 2 + 100,
        clientY: c.height / 2 + 100,
      });

      c.dispatchEvent(eventStart);
      c.dispatchEvent(mouseMoveEvents);

      cy.matchScreenshot("cube should rotate");
    });
  });
});
