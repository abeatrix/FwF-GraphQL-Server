const { RESTDataSource } = require('apollo-datasource-rest')

class PostsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://us-central1-movie-app-fe361.cloudfunctions.net/'
    }

    async getPosts(id) {
        return this.get(`posts`)
    }
}

module.exports = PostsAPI
