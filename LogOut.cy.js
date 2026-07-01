it.open('logout', function(){

    

    cy.get('.oxd-userdropdown-tab').click()
    cy.wait(3000)

    
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(3000)


});