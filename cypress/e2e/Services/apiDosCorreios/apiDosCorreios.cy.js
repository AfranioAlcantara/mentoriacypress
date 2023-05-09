describe('Busca por um CEP e valida o resultado', () => {
    
    it('Caso valido 1 - my home', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/60751370' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Rua S')
        expect(response.body.number).to.equal('60751370')
        expect(response.body.city).to.equal('Fortaleza')
        expect(response.body.longitude).to.equal(-38.553813)
        expect(response.body.state).to.equal('CE')
        expect(response.body.id).to.equal('60751370-23042')
        expect(response.body.complement).to.equal('(Lot Parque Montenegro II)')
        expect(response.body.latitude).to.equal(-3.8378637)
        expect(response.body.neighborhood).to.equal('Prefeito José Walter')
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })

    it('Caso valido 2 - Oiapoque - Amapá', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/68980000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal(null)
        expect(response.body.number).to.equal('68980000')
        expect(response.body.city).to.equal('Oiapoque')
        expect(response.body.longitude).to.equal(-51.852273)
        expect(response.body.state).to.equal('AP')
        expect(response.body.id).to.equal('68980000-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(3.0737871)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })

    it('Caso valido 3 - Estádio Maracanã', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/20271130' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Avenida Presidente Castelo Branco')
        expect(response.body.number).to.equal('20271130')
        expect(response.body.city).to.equal('Rio de Janeiro')
        expect(response.body.longitude).to.equal(-43.2301116)
        expect(response.body.state).to.equal('RJ')
        expect(response.body.id).to.equal('20271130-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(-22.9102713)
        expect(response.body.neighborhood).to.equal('Maracanã')
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })
    
    it('Caso valido 4 - Chui - Rio Grande do Sul', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/96255000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal(null)
        expect(response.body.number).to.equal('96255000')
        expect(response.body.city).to.equal('Chuí')
        expect(response.body.longitude).to.equal(-53.447315)
        expect(response.body.state).to.equal('RS')
        expect(response.body.id).to.equal('96255000-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(-33.6895531)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })    

    it('Caso valido 5 - Alto Alegre - Roraima', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/69350000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal(null)
        expect(response.body.number).to.equal('69350000')
        expect(response.body.city).to.equal('Alto Alegre')
        expect(response.body.longitude).to.equal(-63.3918347)
        expect(response.body.state).to.equal('RR')
        expect(response.body.id).to.equal('69350000-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(3.2028147)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })  
  
    it('Caso valido 6 - Antônio João - Mato Grosso do Sul', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/79910000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal(null)
        expect(response.body.number).to.equal('79910000')
        expect(response.body.city).to.equal('Antônio João')
        expect(response.body.longitude).to.equal(-55.9804173)
        expect(response.body.state).to.equal('MS')
        expect(response.body.id).to.equal('79910000-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(-22.1729241)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })  

    it('Caso valido 7 - Cruzeiro do Sul - Acre', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/69980000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal(null)
        expect(response.body.number).to.equal('69980000')
        expect(response.body.city).to.equal('Cruzeiro do Sul')
        expect(response.body.longitude).to.equal(-72.6742171)
        expect(response.body.state).to.equal('AC')
        expect(response.body.id).to.equal('69980000-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(-7.6303874)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })  

    it('Caso valido 8 - Assis Brasil - Acre', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/69935000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal(null)
        expect(response.body.number).to.equal('69935000')
        expect(response.body.city).to.equal('Assis Brasil')
        expect(response.body.longitude).to.equal(-70.1932084)
        expect(response.body.state).to.equal('AC')
        expect(response.body.id).to.equal('69935000-23042')
        expect(response.body.complement).to.equal('')
        expect(response.body.latitude).to.equal(-10.9026895)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      }) 
   
    })  
    
    it('Caso valido 9 - Foz do iguaçu - Paraná', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/85851150' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Rua Jorge Sanwais')
        expect(response.body.number).to.equal('85851150')
        expect(response.body.city).to.equal('Foz do Iguaçu')
        expect(response.body.longitude).to.equal(-54.5799345)
        expect(response.body.state).to.equal('PR')
        expect(response.body.id).to.equal('85851150-23042')
        expect(response.body.complement).to.equal('- até 1634/1635')
        expect(response.body.latitude).to.equal(-25.5409911)
        expect(response.body.neighborhood).to.equal('Centro')
        expect(response.body.blockDelivery).to.equal(false)

      }) 
    })  
  
    it('Caso valido 10 - Normandia - Roraima', () => {

      cy.request({
     
        method: 'GET',

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/69355000'

     }).then((response) => {

      expect(response.status).to.equal(200);

      expect(response.body.address).to.equal(null)
      expect(response.body.number).to.equal('69355000')
      expect(response.body.city).to.equal('Normandia')
      expect(response.body.longitude).to.equal(-60.02594659999999)
      expect(response.body.state).to.equal('RR')
      expect(response.body.id).to.equal('69355000-23042')
      expect(response.body.complement).to.equal('')
      expect(response.body.latitude).to.equal(3.9543083)
      expect(response.body.neighborhood).to.equal(null)
      expect(response.body.blockDelivery).to.equal(false)

     
    })
  })
  
})


describe('Busca por um CEP que não está dentro da área de entrega das americanas ou que não é reconhecido pelos correios e valida', () => {

  it('Caso invalido 1 - teste de limite', () => { 
      
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET',

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/13113131'

    }).then((response) => {

      expect(response.status).to.equal(404); 


    })
  })

  it('Caso invalido 2 - Hastings - Nebraska', () => { // localidade testada: bit.ly/3X5KrYM
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/68901' 

    }).then((response) => { // Transforma o resultado da requisição em uma variavel

      expect(response.status).to.equal(404); // Verifica se no resultado da response o status code é 200


    })
  })

  it('Caso invalido 3 - teste de limite, testando caractere com número', () => { 
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/ab82c345' 

    }).then((response) => { 

      expect(response.status).to.equal(400); // foi estipulado o valor 400 de status code por ser uma bad request
      expect(response.body.message).to.equal('Requisição mal formatada')

    })
  })

  it('Caso invalido 4 - testando somente caracteres', () => { 
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/aaaaaaaa' 

    }).then((response) => { 

      expect(response.status).to.equal(400); // foi estipulado o valor 400 de status code por ser uma bad request
      expect(response.body.message).to.equal('Requisição mal formatada') 
      
    })
  })

  it('Caso invalido 5 - testando valor limite de Campinas - São Paulo', () => { 
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/13165131' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('Recurso não encontrado') 
      
    })
  })

  it('Caso invalido 6 - testando valor limite da cidade de Arthur Nogueira - São Paulo', () => { 
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/13165001' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('Recurso não encontrado') 
      
    })
  })

  it('Caso invalido 7 - testando valor limite por sequência', () => { // note que o correios não utiliza sequências para reconhecer um CEP, por isso foi testado também esse fator
  // já o começo 000 é aceito pelos correios ;)  
    
  cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/00012345' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('Recurso não encontrado') 
      
    })
  })

  it('Caso invalido 8 - testando valor limite com caractéres especiais e número', () => { 
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/@#$123%¨' 

    }).then((response) => { 

      expect(response.status).to.equal(400); // foi estipulado o valor 400 de status code por ser uma bad request
      expect(response.body.message).to.equal('Requisição mal formatada') 
      
    })
  })

  it('Caso invalido 9 - testando valor limite com caractéres especiais e CEP correto', () => { 
      
    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/60751-370' 

    }).then((response) => { 

      expect(response.status).to.equal(400); // foi estipulado o valor 400 de status code por ser uma bad request
      expect(response.body.message).to.equal('Requisição mal formatada') 
      
    })
  })

  it('Caso invalido 10 - O cep informado existe e está correto porém não foi reconhecido pela API, Iranduba - AM', () => { 
      //localização no maps: bit.ly/3VMwspy

    cy.request({ 
      
      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/69405000' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      
    })
  })
})
