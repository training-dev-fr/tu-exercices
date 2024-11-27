//tester uniquement la fonction createUser
function createUser(name) {
    const id = generateId();
    return { id, name };
}

function generateId(){
    return Math.random()*999999999;
}

module.exports = {createUser};