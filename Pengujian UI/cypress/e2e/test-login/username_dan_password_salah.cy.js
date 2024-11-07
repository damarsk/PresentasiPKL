describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    });

    it('Login Success | Negative', () => {
        cy.wait(2000);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('AdminSalah');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Salah');
        cy.get('.oxd-button').click();
    });
});
