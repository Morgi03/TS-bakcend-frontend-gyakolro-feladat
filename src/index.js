"use strict";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').addEventListener('input', () => {
        let user = document.getElementById('username');
        let chars = /[/&=_'-+,<>]/;
        let error = document.getElementById('errorUserName');
        if (chars.test(user.value)) {
            user.value = user.value.substring(0, user.value.length - 1);
            error.textContent = "Nem adhat meg ilyen karaktert!";
            error.style.padding = '5 px';
            setTimeout(() => {
                error.textContent = "";
            }, 1000);
            error.style.padding = '0 px';
        }
        if (user.value.length - 1 === 0 && user.value == ".") {
            user.value = user.value.substring(0, user.value.length - 1);
            error.textContent = "Nem kezdhet ponttal!";
            error.style.padding = '5 px';
            setTimeout(() => {
                error.textContent = "";
            }, 1000);
            error.style.padding = '0 px';
        }
        if (user.value.substring(user.value.length - 2, user.value.length - 1) == ".") {
            error.textContent = "Nem rakhat egymás után 2 pontot!";
            error.style.padding = '5 px';
            setTimeout(() => {
                error.textContent = "";
            }, 1000);
            error.style.padding = '0 px';
            user.value = user.value.substring(0, user.value.length - 1);
        }
    });
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    document.getElementById('email').addEventListener('change', () => {
        let error2 = document.getElementById('errorEmail');
        let email = document.getElementById('email');
        if (validateEmail(email.value)) {
            error2.textContent = "";
        }
        else {
            error2.textContent = "Nem megengedett E-mail cím formátum, vagy karakter!";
        }
    });
    document.getElementById('reemail').addEventListener('input', () => {
        let email = document.getElementById('email');
        let reemail = document.getElementById('reemail');
        if (email.value == "") {
            reemail.value = reemail.value.substring(0, reemail.value.length - 1);
        }
    });
    document.getElementById('reemail').addEventListener('change', () => {
        let error2 = document.getElementById('errorEmail');
        let email = document.getElementById('reemail');
        let email2 = document.getElementById('email');
        if (validateEmail(email.value)) {
            error2.textContent = "";
        }
        else {
            error2.textContent = "Nem megengedett E-mail cím formátum, vagy karakter!";
        }
        if (email.value === email2.value) {
            error2.textContent = "Nem egyezik meg a kettő E-mail cím, amit megadott!";
        }
    });
});
