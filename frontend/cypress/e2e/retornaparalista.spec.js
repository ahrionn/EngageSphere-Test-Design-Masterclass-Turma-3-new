describe('Retorna à lista de clientes ao clicar no botão "Voltar" do Customer Details', () => {
    it('deve retornar à lista de clientes ao clicar no botão "Voltar"', () => {
        cy.visit('http://localhost:3000');

        cy.get('tbody tr').first().find('button[aria-label^="View company"]').click();

        cy.get('h2').contains('Customer Details');
    
        cy.contains('button', 'Back').click({ force: true });
    
        cy.get('[data-testid="table"]').should('exist');
        cy.get('tbody tr').should('have.length.greaterThan', 0);
    });
});  