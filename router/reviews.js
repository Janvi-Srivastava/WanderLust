const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js");
const reviewControllers=require("../controllers/review.js");


//Reviews
//Post a Route(Create)
router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewControllers.createReview)
);

//Delete Review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,reviewControllers.destroyReview);

module.exports = router;
