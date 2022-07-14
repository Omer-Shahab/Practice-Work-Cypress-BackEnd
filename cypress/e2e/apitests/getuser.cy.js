/// <reference types = "Cypress" />

describe('get api user test', ()=>{
    it('get users', ()=>{
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : "Bearer 88ab0a451292e1a8ed533ae0cac969ea8e85eea38d4bab4354bef58d143d7a51"
            }

        }).then((res)=>{
            expect(res.status).to.equal(200)
        })
    })

    it('get users', ()=>{
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/4052',
            headers : {
                'authorization' : "Bearer 88ab0a451292e1a8ed533ae0cac969ea8e85eea38d4bab4354bef58d143d7a51"
            }

        }).then((res)=>{
            expect(res.status).to.equal(200)
            expect(res.body.gender).to.equal("female")
        })
    })
})