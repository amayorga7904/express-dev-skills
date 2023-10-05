var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills')

/* GET users listing. */


router.get('/', skillsController.index);
//GET skills/new
router.get('/new', skillsController.new)

router.get('/:id', skillsController.show)
//POST /skills
router.post('/', skillsController.create)

module.exports = router;


