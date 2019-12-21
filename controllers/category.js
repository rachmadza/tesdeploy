const models = require("../models");
const Category = models.Category;
const Article = models.Article;

const output = data => {
  const newData = data.map(item => {
    let result = {
      id: item.id,
      name: item.name
    }
    return result
  })
  return newData
}

module.exports = {
  list: (req, res) => {
    Category.findAll({})
      .then(categories => {
        res.status(200).json(output(categories));
      })
      .catch(err => {
        res.status(500).json({
          msg: "Internal Server Error",
          Error: err
        });
      });
  },

  detail: (req, res) => {
    Category.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: Article,
          as: "Articles"
        }
      ]
    })
      .then(category => {
        // res.send(category)
        console.log(category[0].Articles.length, 'ini category')
        if(!category[0].Articles.length) {
          res.status(404).json({
            msg: "There is no article in this category, please create a new one"
          })
        } else {
          res.status(200).json({
            Category: category
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: "Internal Server Error",
          Error: err
        });
      });
  }
};
