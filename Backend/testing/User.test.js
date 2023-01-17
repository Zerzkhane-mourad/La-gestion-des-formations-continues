const request = require('supertest')
const app = require('../index');

describe(" Login ",()=>{

    test("Email Not Found", async()=>{
        const res = await request(app).post('/api/user/signin').send({
            email:"cccc@gmail.com",
            password:"vvvvvvvvvvvv"

        })

        expect(res.statusCode).toBe(400);
    })

    test("Password Not Found", async()=>{
        const res = await request(app).post('/api/user/signin').send({
            email:"cykesyrubu@mailinator.com",
            password:"1XHJWHJXGFHWDGHF"
        })

        expect(res.statusCode).toBe(400);
    })

    

    test("login success", async()=>{
        const res = await request(app).post('/api/user/signin').send({

            email: "cykesyrubu@mailinator.com",
            password: "12345"

        })

        expect(res.statusCode).toBe(200)
    })
    

})    


