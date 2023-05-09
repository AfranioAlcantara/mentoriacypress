
const TelaInicial = require ('../../../../support/ELEMENTOS/GlobalElements').ELEMENTS
function validaImgDe4Intens () {
        const mochila = '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'
        cy.get(TelaInicial.mochila).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(mochila,'a imagem não corresponde a mochila')
        })
        const bick = '/static/media/bike-light-1200x1500.37c843b0.jpg'
        cy.get(TelaInicial.bick).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(bick,'a imagem não corresponde a bick')
        })
        const jaqueta = '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg'
        cy.get(TelaInicial.jaquetaMoleton).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(jaqueta,'a imagem não corresponde a jaqueta moleton')
        })
        const bebe = '/static/media/red-onesie-1200x1500.2ec615b2.jpg'
        cy.get(TelaInicial.roupaBebe).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(bebe,'a imagem não corresponde a roupinha de bebe')
        })
}

describe('testes validos na tela de login', () => {
    beforeEach(() => {
        cy.UrlBase();
    });

    it('teste 01 login valido dados validos', () => {
        
        cy.login('standard_user','secret_sauce')

        cy.get(TelaInicial.bannerSwagLabs).should('have.text','Swag Labs')
    });
    it('teste 02 validação imagem dos itens da loja', () => {
        cy.login('problem_user','secret_sauce')

        validaImgDe4Intens();

    });
    it('teste 03 login com usuario bloqueado', () => {
        
        cy.login('locked_out_user','secret_sauce')

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Sorry, this user has been locked out.')
    });
    it('teste 04 tentativa de login com campo email vasio', () => {
        
        cy.login('{insert}','secret_sauce')

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Username is required')
    });
    it('teste 05 tentativa de login com campo senha vasio', () => {
        
        cy.login('standard_user','{insert}')

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Password is required')
    });
    it('teste 05 tentativa de login com campo senha vasio', () => {
        
        cy.login('standard_user','{insert}')

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Password is required')
    });
    
});