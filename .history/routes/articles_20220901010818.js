const express = require('express')
const Article = require('./../models/article')
const router = express.Router();
const multer = require("multer");

const Storage = multer.diskStorage({destination  : function(req,file,cb){
     cb(null, "/public" )
},
filename: function (req, file, cb) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  cb(null, file.fieldname + '-' + uniqueSuffix)
}
})
  
const upload = multer({storage:Storage}).single("image");



router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})
router.get("/status" , (req,res)=>{
  const stat = "ok"
  res.render("articles/status" , {stat:stat});
 
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

router.post('/', upload , async (req, res) => {
  req.article = new Article()
  console.log(req.article);
  let article = req.article
 
  article.title = req.body.title
  article.description = req.body.description
  article.markdown = req.body.markdown
  article.image= req.file.filename
  article.likes = req.body.likes
  article.tags = req.body.tags
  article = await article.save();
  console.log(article)
  res.redirect(`/articles/${article.id}`);

}
  )

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
      console.log(req.article)
     let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    // article.imagename= req.file.filename
    article.likes = req.body.likes
    article.tags = req.body.tags
    
       console.log(article);
   
    try {

      article = await article.save();
      
      res.redirect(`/articles/${article.id}`);

    }

     catch (e) 

     {

      res.render(`articles/${path}`, { article: article })

     }


  }
}

module.exports = router
// const { getUsers,createUser,getAllNews,createNews,updateSingleNews,deleteSingleNews,getSingleNews } = require("../mainroutesfunctions/main");

// router.route("/news").get(getAllNews).post(createNews);
// router.route("/news/:id").get(getSingleNews).patch(updateSingleNews).delete(deleteSingleNews);
// router.route("/users").get(getUsers).post(createUser);


