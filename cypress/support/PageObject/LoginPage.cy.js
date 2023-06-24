class LoginPage {
    email = '#email'
    password = '#password'
    login = '.c-cbAPXR'

    visit(){
        cy.visit('https://dashboard.majoo.id') //go to url
    }

    inputEmail(email){
        cy.input(this.email, email)
    }

    inputPassword(password){
        cy.input(this.password, password)
    }

    clickLogin(){
        cy.get(this.login).click()
    }
}
export default LoginPage