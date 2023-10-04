const Skill = require('../models/skill')

module.exports = { index, show }

function index(req, res, next) {
    let skills = Skill.getAll()
    res.render('skills/index', { skills });
  }

function show(req, res, next) {
    let skill = Skill.getOne(req.params.id)
    res.render('skills/show', { skill });
  }