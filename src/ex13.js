async function saveFile(content) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!content) return reject(new Error('No content to save'));
            resolve('File saved');
        }, 500);
    });
}

module.exports = {saveFile};