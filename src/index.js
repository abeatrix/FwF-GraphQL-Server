//Firebase
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require("express");
const app = express();
admin.initializeApp();
// const db = admin.firestore();

// Apollo
const { ApolloServer, gql } = require("apollo-server-express");

const postsAPI = require('../datasources/postsAPI')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')

const dataSources = () => ({
    postsAPI: new postsAPI(),
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources, });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);




// exports.posts = functions.https.onRequest(async (request, response) => {
//     const snapshot = await db.collection('posts').get()
//     const posts = snapshot.empty
//         ? []
//         : snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
//     response.send(posts)
// })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
