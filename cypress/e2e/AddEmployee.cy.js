it.only('Add Emplyee', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //يزور الموقع فقط
    cy.wait(3000) //التول سريعة جدا فلذلك نحط هالأمر عشان تبطئ
    
    
    cy.get('[name="username"]').type('admin') //تايب اليوزر نيم
    cy.wait(3000)
    
    
    cy.get('[name="password"]').type('admin123') //تايب الباسورد
    cy.wait(3000)
    
    
    cy.get('.oxd-button').click() // Clicks the login button
    cy.wait(3000)

    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() //admin
    cy.wait(3000)

    cy.get('.orangehrm-header-container > .oxd-button').click() //add admin
    cy.wait(3000)

    cy.get('.oxd-autocomplete-text-input > input').type('A') //امبلوي نيم
    cy.wait(3000)

   cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
   cy.wait(3000)

    
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click() // اكتب اليوزر نيم بعدها علق ماعاد اشتغل
    cy.wait(3000)

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Anwarrf')
    cy.wait(3000)

    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click() //اكتب الباسورد
    cy.wait(3000)

    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Anwar12345')
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Anwar12345') //retype passowrd
    cy.wait(3000)

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() //user role
    cy.wait(3000)

    cy.get('.oxd-select-dropdown > :nth-child(2)').click() //admin
    cy.wait(3000)

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() //stutas
    cy.wait(3000)

    cy.get('.oxd-select-dropdown > :nth-child(2)').click() // الضغط على داخل الحاله
    cy.wait(3000)

    cy.get('.oxd-button--secondary').click()
    cy.wait(3000)



    cy.get('.oxd-table-body').should('contain', 'A8DCo 010Z').then(() => cy.log('Job title verified'));
    cy.wait(5000);
    // First find the exact row containing your job title and scrollview
    cy.contains('.oxd-table-row', 'A8DCo 010Z')
        .scrollIntoView({ duration: 300 })
        .should('exist')
        .within(() => {
            // checkbox click
            cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                .click({ force: true });
            // click trash
            cy.get(':nth-child(1) > .oxd-icon')
                .should('be.visible')
                .click({ force: true, multiple: true });
        });
    cy.wait(1000);
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete
































  //  cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    //cy.wait(3000)


    //cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    //cy.wait(3000)

    //cy.get('.orangehrm-header-container > .oxd-button').click()
    //cy.wait(3000)

    //cy.get('.oxd-autocomplete-text-input > input').click() //employer name
    //cy.wait(3000)

    //cy.get('.oxd-autocomplete-text-input > input').type('A') // write wmployer name
    //cy.wait(3000)

    //cy.get('.oxd-autocomplete-dropdown > :nth-child(2)').click()

    //cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click //user name
    //cy.wait(3000)

    //cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Anwar_rf') //write user name
    //cy.wait(3000)

    //cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click() // password
    //cy.wait(3000)

    //cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Anwar12345') //write password
    //cy.wait(3000)
    
  //  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click() //retybe password
   // cy.wait(3000)

   // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Anwar12345') //write retybe passord
   // cy.wait(3000)

    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
    //cy.wait(3000)

  


    

    

});