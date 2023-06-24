describe('Login Functionality', () => {
  beforeEach(() => {
    // Blok kode yang akan dijalankan sebelum setiap tes
    cy.visit('https://dashboard.majoo.id') //go to url
  })

  it('Success Login', () => {
    cy.get('#email').type('sandihidayat175@gmail.com') //input valid email
    cy.get('#password').type('280193Sandi@') //input valid password
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.url().should('include','/dashboard') //check url dashboard
    cy.get('.c-dujype').should('be.visible') //check message
  })

  it('Login Invalid Email & Password', () => {
    cy.get('#email').type('sandihidayat@gmail.com') //input invalid email
    cy.get('#password').type('280193Sandi@123') //input invaid password
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.get('.c-dbyswQ').should('be.visible') //check message
    cy.get('.c-eNFHpI').should('have.text','Email/kata sandi tidak sesuai') //check message
  })

  it('Login Invalid Email', () => {
    cy.get('#email').type('sandihidayat@gmail.com') //input invalid email
    cy.get('#password').type('280193Sandi@') //input valid password
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.get('.c-dbyswQ').should('be.visible') //check message
    cy.get('.c-eNFHpI').should('have.text','Email/kata sandi tidak sesuai') //check message
  })

  it('Login Invalid Format Email', () => {
    cy.get('#email').type('sandihidayat175@gmail') //input invalid format email
    cy.get('#password').type('280193Sandi@') //input valid password
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.get('.c-eMgbug').should('have.text','Maaf, email yang anda masukkan tidak sesuai format') //check message
  })

  it('Login Empty Email', () => {
    cy.get('#password').type('280193Sandi@') //input valid password
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.get('.c-eMgbug').should('have.text','Email wajib diisi') //check message
  })

  it('Login Invalid Password', () => {
    cy.get('#email').type('sandihidayat175@gmail.com') //input valid email
    cy.get('#password').type('280193Sandi@123') //input invalid password
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.get('.c-dbyswQ').should('be.visible') //check message
    cy.get('.c-eNFHpI').should('have.text','Email/kata sandi tidak sesuai') //check message
  })

  it('Login Empty Password', () => {
    cy.get('#email').type('sandihidayat175@gmail.com') //input valid email
    cy.get('.c-cbAPXR').click() //click login
    // validasi
    cy.get('.c-eMgbug').should('have.text','Kata sandi wajib diisi') //check message
  })

})