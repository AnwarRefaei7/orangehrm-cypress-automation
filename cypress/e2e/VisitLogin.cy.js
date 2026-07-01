it.only ('VisitLogin', function () { // ثابته في كل الصفحات
    

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //يزور الموقع فقط
cy.wait(3000) //التول سريعة جدا فلذلك نحط هالأمر عشان تبطئ


cy.get('[name="username"]').type('admin') //تايب اليوزر نيم
cy.wait(3000)


cy.get('[name="password"]').type('admin123') //تايب الباسورد
cy.wait(3000)


cy.get('.oxd-button').click() // Clicks the login button
cy.wait(3000)


});
