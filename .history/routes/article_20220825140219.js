

const express = require("express");
const News = require("../models/article");
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('/new', { news: new News() })
  })
  
  router.get('/edit/:id', async (req, res) => {
    const news= await News.findById(req.params.id)
    res.render('news/edit', { news: news })
  })
  
  router.get('/:slug', async (req, res) => {
    const news = await News.findOne({ slug: req.params.slug })
    if (news == null) res.redirect('/')
    res.render('news/show', { news: news })
  })
  
  router.post('/', async (req, res, next) => {
    req.news = new News()
    next()
  }, saveArticleAndRedirect('new'))
  
  router.put('/:id', async (req, res, next) => {
    req.news = await News.findById(req.params.id)
    next()
  }, saveArticleAndRedirect('edit'))
  
  router.delete('/:id', async (req, res) => {
    await News.findByIdAndDelete(req.params.id)
    res.redirect('/')
  })
  
  function saveArticleAndRedirect(path) {
    return async (req, res) => {
      let news = req.news
      news.title = req.body.title
      news.description = req.body.description
      news.markdown = req.body.markdown
      try {
        news = await news.save()
        res.redirect(`/news/${article.slug}`)
      } catch (e) {
        res.render(`news/${path}`, { news: news })
      }
    }
  }
// const { getUsers,createUser,getAllNews,createNews,updateSingleNews,deleteSingleNews,getSingleNews } = require("../mainroutesfunctions/main");

// router.route("/news").get(getAllNews).post(createNews);
// router.route("/news/:id").get(getSingleNews).patch(updateSingleNews).delete(deleteSingleNews);
// router.route("/users").get(getUsers).post(createUser);

module.exports = router;
