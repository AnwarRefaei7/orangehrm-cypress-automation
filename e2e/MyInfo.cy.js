it.only ('VisitLogin', function () { // ثابته في كل الصفحات
    

  /*  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //يزور الموقع فقط
    cy.wait(3000) //التول سريعة جدا فلذلك نحط هالأمر عشان تبطئ
    
    
    cy.get('[name="username"]').type('admin') //تايب اليوزر نيم
    cy.wait(3000)
    
    
    cy.get('[name="password"]').type('admin123') //تايب الباسورد
    cy.wait(3000)
    
    
    cy.get('.oxd-button').click() // Clicks the login button
    cy.wait(3000)*/

     
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()  // اضغط مي انفو
    cy.wait(3000)

    cy.get('.employee-image').click() // اضغط عالصورة
    cy.wait(3000)

    cy.get('.oxd-file-div > .oxd-icon-button').click() // اضغط على الزايد اضافه الصورة
    cy.wait(3000)

    cy.get('[type="file"]').selectFile('/Users/anwarrefaei/Desktop/BootCapm/cypress/fixtures/IMG_5240.jpg',{force: true}); //اضافة الملف
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


    

    
















});