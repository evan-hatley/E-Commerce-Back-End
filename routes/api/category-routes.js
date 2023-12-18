const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  await Category.findAll({
    include: [{model: Product}],
  })
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  await Category.findByPk(req.params.id, {
    include: [{model: Product}],
  })
});

router.post('/', async (req, res) => {
  // create a new category
  await Category.create(req.body, {

  })
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {

  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy(req.body, {
    
  })
});

module.exports = router;
