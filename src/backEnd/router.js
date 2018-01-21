const router = require('express').Router();
const path = require('path');
const fetchPosts = require('../../database/queries/fetchPosts')
 router.get("/posts",fetchPosts);


module.exports = router;
