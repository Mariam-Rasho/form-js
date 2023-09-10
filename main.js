const form = document.getElementById('form');
const firstName = document.getElementById('my_name');
const email = document.getElementById('my_email')
const usersForm = document.querySelector('.users')
const msg = document.querySelector('.msg');

// setTimeout()
document.addEventListener('DOMContentLoaded', function () {
    let userItem = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    console.log(typeof userItem);
    // for (const item in userItem) {
    //     console.log(item);
    //     setTimeout(function () {
    //         usersForm.innerHTML += `${userItem[item]}`;
    //         console.log(userItem)
    //     }, 1200)

    // };
    userItem.forEach(user => {
        usersForm.innerHTML += user
    })
});


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userItem = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    let nameVal = firstName.value;
    let emailVal = email.value;

    if (!nameVal || !emailVal) {
        showErrorMessage('please enter all values')
        return;
    }
    let infoUser = `<li><b>${nameVal}</b>: <a href="mailto:${emailVal}">${emailVal}</a></li>`;
    console.log(infoUser);
    usersForm.innerHTML += infoUser;
    userItem.push(infoUser);
    console.log(userItem);
    localStorage.setItem("users", JSON.stringify(userItem));
    console.log(userItem);


    // clear the inputs
    firstName.value = ''
    email.value = ''
    showSuccessMessage('add successfully !')
});