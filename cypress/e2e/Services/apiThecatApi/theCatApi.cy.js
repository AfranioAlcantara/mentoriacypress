it('cadastro de usuario', () => {
    cy.request({
        method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            failOnStatusCode: false,
        body:{
        "id": 5,
        "username": "Bel",
        "firstName": "afranio",
        "lastName": "alcantara",
        "email": "turtle@gmail.com",
        "password": "afranio123",
        "phone": "85 992786769",
        "userStatus": 0
      }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
});

it('confirma cadastro feito', () => {
    cy.request({
        mothod:'GET',
            url: 'https://petstore.swagger.io/v2/user/Bel'
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
});

it('realiza a troca de informações cadastradas antriormente', () => {
    cy.request({
        method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/Bel',
            body: {
                "id": 2,
                "username": "nil",
                "firstName": "santos",
                "lastName": "alcantara",
                "email": "turtle@gmail.com",
                "password": "afranio123",
                "phone": "123456789",
                "userStatus": 0
            }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
});

it('realiza login com o usuario criado', () => {
    cy.request({
        method: 'GET',
         url: 'https://petstore.swagger.io/v2/user/login',
        body: {
            "username": "ni",
            "password": "123456789"
          
          }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
});

it('realiza logout da conta', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/logout'
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
});
