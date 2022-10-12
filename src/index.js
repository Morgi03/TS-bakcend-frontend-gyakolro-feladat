"use strict";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').addEventListener('input', () => {
        let user = document.getElementById('username');
        let chars = /[/&=_'+,<>-]/;
        if (chars.test(user.value)) {
            user.value = user.value.substring(0, user.value.length - 1);
        }
        if(user.value.length - 1 === 0 && user.value == "."){
            user.value = user.value.substring(0, user.value.length - 1);
        }
        if(user.value.substring(user.value.length-2, user.value.length-1) == "."){
            user.value = user.value.substring(0, user.value.length - 1);
        }
    });
    console.log("loaded")
});
