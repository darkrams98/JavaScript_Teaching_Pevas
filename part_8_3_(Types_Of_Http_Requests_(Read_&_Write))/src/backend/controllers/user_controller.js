
//      import modules 
const fs = require('fs');
const path = require('path');

//      read file path to search in users
const usersFilePath = path.join(__dirname, '..', '..', '..', "public", "Example_Data.json")


userController = {
    //      get user by id number (sync)
    getUserById: function (id) {
        const allUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        for (obj of allUsers) {
            console.log(obj)
            if (obj.userId == id) {
                return obj
            }
            else return null
        }
    }
    //      get user by id (async)  
}

module.exports = {
    userController
};
