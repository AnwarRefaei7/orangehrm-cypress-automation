//const { before } = require("mocha");

before('VisitLogin', function () { // ثابته في كل الصفحات
    

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //يزور الموقع فقط
    cy.wait(3000) //التول سريعة جدا فلذلك نحط هالأمر عشان تبطئ
    
    
    cy.get('[name="username"]').type('admin') //تايب اليوزر نيم
    cy.wait(3000)
    
    
    cy.get('[name="password"]').type('admin123') //تايب الباسورد
    cy.wait(3000)
    
    
    cy.get('.oxd-button').click() // Clicks the login button
    cy.wait(3000)
    });

   it(('AddEmployee'), function(){

    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() //admin
    cy.wait(3000)

    cy.get('.orangehrm-header-container > .oxd-button').click() //add admin
    cy.wait(3000)

    cy.get('.oxd-autocomplete-text-input > input').type('A')
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
    cy.wait(4000);
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


    });



    it(('Job Title'), function(){

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


    it(('MyInfo'), function(){

        cy.get(':nth-child(6) > .oxd-main-menu-item').click()  // اضغط مي انفو
        cy.wait(3000)
    
        cy.get('.employee-image').click() // اضغط عالصورة
        cy.wait(3000)
    
        cy.get('.oxd-file-div > .oxd-icon-button').click() // اضغط على الزايد اضافه الصورة
        cy.wait(3000)
    
        cy.get('[type="file"]').selectFile('/Users/anwarrefaei/Desktop/BootCapm/cypress/fixtures/IMG_4318.jpg',{force: true}); //اضافة الملف
        cy.wait(3000)
    
        cy.get('.oxd-button').click() // اضغط حفظ
        cy.wait(8000)
    
        cy.get(':nth-child(1) > .orangehrm-tabs-item').click()
        cy.wait(5000)
    
        cy.get('[name="firstName"]').click() // اضغط عالاسم الاول
        cy.wait(6000)
    
        cy.get('[name="firstName"]').clear().type('Anwar') // الاسم الاول
        cy.wait(5000)
    
        cy.get('[name="middleName"]').click()
        cy.wait(3000)
    
        cy.get('[name="middleName"]').clear().type('Alrefaei') // الاسم الاوسط
        cy.wait(3000)
    
        cy.get('[name="lastName"]').click()
        cy.wait(3000)
    
        cy.get('[name="lastName"]').clear().type('Moahmmed')  //الاسم الاخير
        cy.wait(2000)
    
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click()// اضط زر الايدي
        cy.wait(3000)
    
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('111098') // احذف الايدي وضيف جديد
        cy.wait(3000)
    
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click // ايدي اخر
        cy.wait(2000)
    
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('10001')
        cy.wait(2000)
    
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
        cy.wait(3000)
    
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()// التاريخ
        cy.wait(3000)
    
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
      .click({ force: true }) // يسمح بالضغط حتى لو فيه عنصر فوقه
     // تاريخ الميلاد
        cy.wait(5000)
    
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-26-12') //اكتب تاريخ الميلاد
        cy.wait(5000)
    
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click() // زر الجنس
        cy.wait(3000)
    
        cy.get('.orangehrm-action-header > .oxd-button').click //زر الاتاتشمنت
        cy.wait(4000)
    
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() //زر الحفظ
        cy.wait(3000)
    
        








    });


    after('logout', function(){

        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.wait(3000)

        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()






    });

