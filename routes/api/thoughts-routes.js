const router = require('express').Router();

// Set up GET all and POST
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;