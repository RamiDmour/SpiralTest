const { sleep } = require("../utils/sleep");

export class AuthApi {
    static async signIn(email, password) {
        await sleep(1000)
        if (email.includes("@itechart-group.com") && password == "admin") {
            const token = "eyJhZGxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAaXRlY2hhcnQtZ3JvdXAuY29tIn0.UgwjmMYuGLkaaqFGJMsfEHMA_l_Z_T18aO47Pk_u76w"

            return token
        }
        else {
            return null
        }
    }
}