//your JS code here. If required.
cy.get('p').then(($p) => {
  cy.log('Number of p elements:', $p.length);
});
