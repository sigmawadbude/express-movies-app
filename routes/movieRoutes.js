const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const validate = require('../middlewares/validate');
const { movieSchema } = require('../schemas/movieSchema');

router.get('/', movieController.getMovies);
router.post('/', validate(movieSchema), movieController.addMovie);
router.get('/:id', movieController.getMovie);
router.put('/:id', validate(movieSchema), movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
