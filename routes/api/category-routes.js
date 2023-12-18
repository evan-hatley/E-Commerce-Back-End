const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Finds all categories by product model
router.get('/', async (req, res) => {
try {
  const categories = await Category.findAll({
    include: [{model: Product}],
  });
  res.status(200).json(categories);
} catch (err) {
  res.status(500).json(err);
}
});

// finds a category by Primary key
router.get('/:id', async (req, res) => {
  try {
  const categories = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
  });
  res.status(200).json(categories);
} catch (err) {
  res.status(500).json(err);
}
});

// Creates a category
router.post('/', async (req, res) => {
  try {
  const categories = await Category.create(req.body);
  res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
  });

  // Updates a category
router.put('/:id', async (req, res) => {
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id
        }
      });
    res.status(200).json(categories);
  } catch (err) {
      res.status(500).json(err);
    }
  });
  

  // Deletes a category
router.delete('/:id', async (req, res) => {
  try {
    const categories = await Category.destroy(req.body, {
      where: {
        id: req.params.id
      }
    });
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
