function showErrorMessage(message) {
    showMessage(message, 'error')

}
function showSuccessMessage(message) {
    showMessage(message, 'success')
}

function showMessage(message, type) {
    msg.innerHTML = message
    msg.classList.add(type)
    setTimeout(() => {
        msg.classList.remove(type)
        msg.innerHTML = ''
    }, 1000);
}