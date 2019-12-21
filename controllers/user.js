const models = require("../models");
const User = models.User;
const generateToken  = require('../helpers/jwt')
const Article = models.Article;
const Category = models.Category;


module.exports = {
  
  // article: (req, res) => {
  //   User.findAll({
  //     where: { id: req.params.id },
  //     include: [
  //       {
  //         model: Article,
  //         as: "Articles"
  //       }
  //     ]
  //   })
  //     .then(article => {
  //       res.send(article)
  //     })
  //     // .catch(err => {
  //     //   res.send(err)
  //     // })
  // }
  register: (req, res) => {
    let input = {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    User.findAll({
      where: { username: req.body.username}
    })
      .then(found => {
        // console.log(found)
        // res.send(found)
        if(found.length > 0) {
          res.status(200).json({
            msg: 'You already registered'
          })
        } else {
          User.create(input)
            .then(user => {
              let payload = {
                id: user.id,
                email: user.email
              }
              res.status(201).json({
                email: user.email,
                token: generateToken(payload)
              })
            })
            .catch(err => {
              res.status(500).json({
                msg: 'Internal Server Error',
                Error: err
              })
            })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  login: (req, res) => {
    User.findOne(
        {
          where: { email: req.body.email }
        }
      )
      .then(user => {
        // console.log(user.dataValues)
        if (!user) {
          res.status(404).json({
            msg: `Sorry we couldn't find user with email '${req.body.email}' , make sure your email has been registered`
          })
        } else {
          if (req.body.email == user.email) {
            let payload = {
              id: user.id,
              email: user.email
            }
            req.currentUser = payload;
            res.status(200).json({
              email: user.email,
              token: generateToken(payload)          
            })
          } else {
            res.status(400).json({
              msg: 'email/password wrong'
            })
          }
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  }

};
