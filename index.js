const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./db/schema")
const resolvers = require("./db/resolvers")
const conectarDB = require("./config/db")
const JWT = require("jsonwebtoken");
//conectar
conectarDB();
//Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers['authorization'] || "";
        if (token) {
            try {
                const verificar = JWT.verify(token, process.env.SECRETA)
                return verificar
            } catch (error) {
                console.log(error)
            }
        }
    }
});

//Arrancar servidor

server.listen({port: process.env.PORT || 4000}).then(({ url }) => {
    console.log(`servidor listo ${url}`)
})