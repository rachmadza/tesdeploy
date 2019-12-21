require('express-group-routes')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

const Category = require('./controllers/category')
const Article = require('./controllers/article')
const User = require('./controllers/user')

const authenticate = require('./middlewares/authentication')
const authorize = require('./middlewares/authorization')

app.get('/', (req,res) => {
    res.send("<p>Hello World</p>")
})


app.group("/api/v1", (router) => {
    ///User
    // router.get('/user/:id/articles', User.article);
    router.post('/register', User.register);
    router.post('/login', User.login);
    ///Category
    router.get('/categories', Category.list);
    // router.get('/category/:id/articles', Category.detail); //from Category

    ///Article
    router.get('/category/:id/articles', Article.detail); //from Article
    router.get('/articles', Article.list);
    router.get('/articles/latest', Article.latest);
    router.post('/article', authenticate.authenticated,Article.create);
    router.patch('/:user_id/article/:article_id', authorize.authorized, Article.update)
    router.delete('/:user_id/article/:article_id', authorize.authorized, Article.delete)

    
}) 

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})