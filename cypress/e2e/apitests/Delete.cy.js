/// <reference types = "Cypress" />
const datajson = require('../../fixtures/creatuser.json')
describe('post api user test', ()=>{
    let token = '88ab0a451292e1a8ed533ae0cac969ea8e85eea38d4bab4354bef58d143d7a51'
    let randomtext= ""
    let testemail=""
    it('post users', ()=>{

        var pattern= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<10; i++)
        randomtext+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testemail=randomtext + '@gmail.com'


        cy.request({

            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : "Bearer " + token
            },
            body: {
                "name":datajson.name,
                "gender":datajson.gender,
                "email":testemail,
                "status":datajson.status
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(201)
            const userid=res.body.id
            cy.log("user id is " + userid)

            cy.request({

                method : 'GET',
                url : 'https://gorest.co.in/public/v2/users/'+userid,
                headers : {
                    'authorization' : "Bearer "+token
                }
    
            }).then((res)=>{
                expect(res.status).to.equal(200)
                expect(res.body.name).to.equal("omer")
                cy.log(JSON.stringify(res))

                cy.request({

                    method : 'DELETE',
                    url : 'https://gorest.co.in/public/v2/users/'+userid,
                    headers : {
                        'authorization' : "Bearer "+token
                    },
                
                }).then((res)=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.equal(204)
                })
            })
        })
    })
})