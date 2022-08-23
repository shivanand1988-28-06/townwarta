

const express = require("express");

const router = express.Router();

const { getUsers,createUser,getAllNews,createNews,updateSingleNews,deleteSingleNews,getSingleNews } = require("../mainroutesfunctions/main");

router.route("/news").get(getAllNews).post(createNews);
router.route("/news/:id").get(getSingleNews).patch(updateSingleNews).delete(deleteSingleNews);
router.route("/users").get(getUsers).post(createUser);

module.exports = router;
