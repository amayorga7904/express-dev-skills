var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills')

/* GET users listing. */


router.get('/', skillsController.index);
//GET skills/new
router.get('/new', skillsController.new)

router.get('/:id', skillsController.show)
//GET /skills/:id/edit
router.get('/:id/edit', skillsController.edit)
//POST /skills
router.post('/', skillsController.create)
//DELETE /skills/:id
router.delete('/:id', skillsController.delete)
//PUT /skills/:id
router.put('/:id', skillsController.update)

module.exports = router;


