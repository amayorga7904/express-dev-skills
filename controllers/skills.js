const Skill = require('../models/skill')

module.exports = { 
  index, 
  show, 
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
 }

function edit(req, res) {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/edit', { title: 'Edit Skill', skill})
}

function update(req, res) {
  req.body.learned = !!req.body.learned
  Skill.update(req.params.id, req.body)
  res.redirect(`/skills/${req.params.id}`)
}

 function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
 }

function index(req, res, next) {
    let skills = Skill.getAll()
    res.render('skills/index', { skills, title: 'All Skills' });
  }

function show(req, res, next) {
    let skill = Skill.getOne(req.params.id)
    res.render('skills/show', { skill, title: 'Skills Details' });
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
  }

  function create(req, res) {
    // if (req.body.learned) {
    //   req.body.learned = true
    // } else {
    //   req.body.learned = false
    // }
    Skill.create(req.body)
    res.redirect('/skills')
  }