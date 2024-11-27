async function getUser(id) {
    if (!id) throw new Error('User ID is required');
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: 'John Doe' }), 1000);
    });
}

module.exports = {getUser};