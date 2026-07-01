it.only ('VisitLogin', function () { // ثابته في كل الصفحات
    

   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //يزور الموقع فقط
    cy.wait(3000) //التول سريعة جدا فلذلك نحط هالأمر عشان تبطئ
    
    
    cy.get('[name="username"]').type('admin') //تايب اليوزر نيم
    cy.wait(3000)
    
    
    cy.get('[name="password"]').type('admin123') //تايب الباسورد
    cy.wait(3000)
    
    
    cy.get('.oxd-button').click() // Clicks the login button
    cy.wait(3000)
    
    
    
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // اضغط عالادمين
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click() // اضغط عالجوب
    cy.wait(3000)


    cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // اضغط عالجوب تايتل
    cy.wait(3000)

    cy.get('.oxd-button').click() //add
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input').click()
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input').type('Anwar')
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').click()
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Anwar Mohammed Refaei') //كتابه الجوب ديكربشن
    cy.wait(3000)

    cy.get('[type="file"]').selectFile('/Users/anwarrefaei/Desktop/BootCapm/cypress/fixtures/MyCV.docx',{force: true}); //اضافة الملف
    cy.wait(3000)

    cy.get('.oxd-button--secondary').click()
    cy.wait(3000)

    cy.get('.oxd-table-body').should('contain', 'Anwar').then(() => cy.log('Job title verified'));
    cy.wait(4000);
    // First find the exact row containing your job title and scrollview
    cy.contains('.oxd-table-row', 'Anwar')
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









    });
    