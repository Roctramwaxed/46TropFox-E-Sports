const fs = require('fs')

const teamIconPath = (teamName) => {
    return `../team_icons/${teamName}.jpg`
}

module.exports = teamIconPath