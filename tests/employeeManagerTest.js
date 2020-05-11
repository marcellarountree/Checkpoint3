var addEmployee = [
    {name: 'Teresa Mooney', phone: '9090909090', title: 'Interior Designer'},

    {name: 'Peter Pendergrass', phone: '8989898989', title: 'Artiste', },

    {name: 'Jess Ballerano', phone: '7878787878', title: 'Doula', },
]

let manager={}
let newEmployee = require('../testAssets/newEmployee')

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
    },

    after: browser => {
        manager.end()
    },

    'Edit employees': browser => {
            addEmployee.forEach(test => {
                manager
                    newEmployee(test)
            })

    }


}