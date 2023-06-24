import LoginPage from "../support/PageObject/LoginPage.cy"
const dataLogin = require('../fixtures/Mojoo/login.json')

describe('Login Functionality', () => {
  const login = new LoginPage
  beforeEach(() => {
    // Blok kode yang akan dijalankan sebelum setiap tes
    login.visit() //go to url
  })

  it('Success Login', () => {
    login.inputEmail(dataLogin.validEmail) //input valid email
    login.inputPassword(dataLogin.validPassword) //input valid password
    login.clickLogin() //click login
    // validasi
    cy.url().should('include','/dashboard') //check url dashboard
    cy.get('.c-dujype').should('be.visible') //check message
  })

  it('Login Invalid Email & Password', () => {
    login.inputEmail(dataLogin.invalidEmail) //input invalid email
    login.inputPassword(dataLogin.invalidPassword) //input invalid password
    login.clickLogin() //click login
    // validasi
    cy.get('.c-dbyswQ').should('be.visible') //check message
    cy.get('.c-eNFHpI').should('have.text','Email/kata sandi tidak sesuai') //check message
  })

  it('Login Invalid Email', () => {
    login.inputEmail(dataLogin.invalidEmail) //input invalid email
    login.inputPassword(dataLogin.validPassword) //input valid password
    login.clickLogin() //click login
    // validasi
    cy.get('.c-dbyswQ').should('be.visible') //check message
    cy.get('.c-eNFHpI').should('have.text','Email/kata sandi tidak sesuai') //check message
  })

  it('Login Invalid Format Email', () => {
    login.inputEmail(dataLogin.invalidFormatEmail) //input invalid format email
    login.inputPassword(dataLogin.validPassword) //input valid password
    login.clickLogin() //click login
    // validasi
    cy.get('.c-eMgbug').should('have.text','Maaf, email yang anda masukkan tidak sesuai format') //check message
  })

  it('Login Empty Email', () => {
    login.inputPassword(dataLogin.validPassword) //input valid password
    login.clickLogin() //click login
    // validasi
    cy.get('.c-eMgbug').should('have.text','Email wajib diisi') //check message
  })

  it('Login Invalid Password', () => {
    login.inputEmail(dataLogin.validEmail)//input valid email
    login.inputPassword(dataLogin.invalidPassword) //input invalid password
    login.clickLogin() //click login
    // validasi
    cy.get('.c-dbyswQ').should('be.visible') //check message
    cy.get('.c-eNFHpI').should('have.text','Email/kata sandi tidak sesuai') //check message
  })

  it('Login Empty Password', () => {
    login.inputEmail(dataLogin.validEmail) //input valid email
    login.clickLogin() //click login
    // validasi
    cy.get('.c-eMgbug').should('have.text','Kata sandi wajib diisi') //check message
  })

})