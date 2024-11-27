function logAction(action, log) {
    if (!action) return;
    log(`Action: ${action}`);
}

module.exports = {logAction};