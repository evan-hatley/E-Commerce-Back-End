const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data

  await Tag.findAll({
    include: [{model: Product}],

  })
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  await Tag.findByPk(req.params.id, {
    include: [{model: Product}],

  })
});

router.post('/', async (req, res) => {
  // create a new tag
  await Tag.create(req.body, {

})
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  await Tag.update(req.body, {

  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy(req.body, {
    
  })
});

module.exports = router;
