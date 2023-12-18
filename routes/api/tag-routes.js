const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find All tags using the product model
router.get('/', async(req, res) => {
try {
  const tags = await Tag.findAll({
    include: [{model: Product}], 
  });
  res.status(200).json(tags);
} catch (err) {
  res.status(500).json.apply(err);
}
});

// find tags by Primary Key 
router.get('/:id', async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
  });
  res.status(200).json(tags);
} catch (err) {
  res.status(500).json(err);
}
});

// Creates tags
router.post('/', async (req, res) => {
  try {
  const tags = await Tag.create(req.body);
  res.status(200).json(tags);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates tags
router.put('/:id', async (req, res) => {
  try {
    const tags = await Tag.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes tags
router.delete('/:id', async (req, res) => {
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
