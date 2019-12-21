const models = require("../models");
const Article = models.Article;
const Category = models.Category;
const User = models.User;

const output = data => {
  const newData = data.map(item => {
    let result = {
      id: item.id,
      title: item.title,
      category: {
        id : item.Category.id, 
        name : item.Category.name
      },
      content: item.content,
      img: item.img,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }
    return result
  })
  return newData
}

const outputCrud = data => {
  const newData = data.map(item => {
    let result = {
      id: item.id,
      title: item.title,
      content: item.content,
      img: item.img,
      category: {
        id: item.Category.id, 
        name: item.Category.name
      },
      createdBy: {
        id: item.User.id,
        email: item.User.email
      },
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }
    return result
  })
  return newData
}

module.exports = {
  list: (req, res) => {
    Article.findAll({
      include: [
        {
          model: Category,
          as: "Category"
        }
      ]
    })
      .then(articles => {
        if (!articles.length) {
          res.status(404).json({
            msg: "There is no article, please create a new one"
          });
        } else {
          res.status(200).json(output(articles));
          }
      })
      .catch(err => {
        res.status(500).json({
          msg: "Internal Server Error",
          Error: err
        });
      });
  },
  
  //article by category
  detail: (req, res) => {
    Article.findAll({
      where: { category_id: req.params.id },
      include: [
        {
          model: Category,
          as: "Category",
        }
      ]
    })
      .then(articles => {
        if (!articles.length) {
          res.status(404).json({
            msg: "There is no article in this category, please create a new one"
          });
        } else {
          // console.log(articles[0])
          res.status(200).json(output(articles));
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: "Internal Server Error",
          Error: err
        });
      });
  },

  latest: (req,res) => {
    Article.findAll({
      include: [
        {
          model: Category,
          as: "Category"
        }
      ],
      order: [
        ['createdAt', 'DESC']
      ],
      limit: 10
    })
      .then(articles => {
        if (!articles.length) {
          res.status(404).json({
            msg: "There is no article, please create a new one"
          });
        } else {
          res.status(200).json(output(articles));
          }
      })
      .catch(err => {
        res.status(500).json({
          msg: "Internal Server Error",
          Error: err
        });
      });
  },

  create: (req, res) => {
    
    let input = {
      title: req.body.title,
      image: req.body.image,
      content: req.body.content,
      category_id: req.body.category_id,
      category_name: req.body.category_name,
      slug: req.body.slug,
      author_id: req.body.author_id
    }

    Article.create(input)
      .then(article => {
        res.status(201).json(
          // outputCrud(article)
          { msg: 'New Article has been created',
          Article: article }

        )
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  update: (req, res) => {

    let input = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      category_id: req.body.category_id,
      category_name: req.body.category_name,
      slug: req.body.slug,
      author_id: req.body.author_id
    }

    Article.update(input, {
      where: { id: req.params.article_id }
    })
    .then(updated => {
      res.status(200).json({
        msg: "updated",
        Article: updated
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: 'Internal Server Error',
        Error: err
      })
    })

  },

  delete: (req, res) => {

      Article.destroy({
        where: { id: req.params.article_id }
      })
      .then(deleted => {
        res.send({
          msg: "deleted",
          deleted
        });
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        });
    });
  
  }
};