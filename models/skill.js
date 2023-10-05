
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

const skills = [
    {id: 1278657, skill: 'JavaScript', learned: true},
    {id: 6880293, skill: 'CSS', learned: true},
    {id: 1029283, skill: 'HTML', learned: true},
    {id: 7595537, skill: 'React', learned: false}
]

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex((skill) => {
        return skill.id === id
    })
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.learned = false
    skills.push(skill)
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    // let skill = skills.find(function() {
    //     if (skill.id === id)
    //     return skill 
    let skill = skills.find(skill => skill.id === id)
    return skill
    // })
}