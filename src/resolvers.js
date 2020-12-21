module.exports = {
    Query: {
        // _source = data , _args = id,
        posts: async (_source, _args, {dataSources}) => {
            // when we make a posts query it will call this function and request it from our postsAPI dataSource
            return dataSources.postsAPI.getPosts()
        }
    }
}

// const admin = require('firebase-admin');

// module.exports = {
//     Query: {
//       posts: () =>
//         admin
//           .database()
//           .ref("posts")
//           .once("value")
//           .then(snap => snap.val())
//           .then(val => Object.keys(val).map(key => val[key]))
//     }
// }


