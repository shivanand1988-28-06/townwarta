const express = require('express')
const Article = require('./../models/article')
const router = express.Router();


router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})
router.get("/status" , (req,res)=>{
  const stat = "ok"
  res.render("articles/status" , {stat:stat});
  console.log(req.body);
})
router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
})

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article })
})

router.post('/', async (req, res, next) => {
  // req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})



function saveArticleAndRedirect(path) {
 
  return async (req, res) => {
    console.log(req.body.title,req.article);
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    console.log(article)
    const { createdAt , title , description , markdown} = article
    const newarticle = Article.create({ createdAt , title , description , markdown });
    try {
      article = await article.save()
      
      res.redirect(`/articles/${article.slug}`)
    } catch (e) {
      res.render(`articles/${path}`, { article: article })
    }
  }
}

module.exports = router
// const { getUsers,createUser,getAllNews,createNews,updateSingleNews,deleteSingleNews,getSingleNews } = require("../mainroutesfunctions/main");

// router.route("/news").get(getAllNews).post(createNews);
// router.route("/news/:id").get(getSingleNews).patch(updateSingleNews).delete(deleteSingleNews);
// router.route("/users").get(getUsers).post(createUser);


