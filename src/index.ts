
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username')!.addEventListener('input', () => {
        let user = document.getElementById('username') as HTMLInputElement;
        let chars = /[/&=_'-+,<>]/;
        let error =document.getElementById('errorUserName') as HTMLLabelElement;
        if (chars.test(user.value)) {
            user.value = user.value.substring(0, user.value.length-1);
            error.textContent = "Nem adhat meg ilyen karaktert!";
            error.style.padding = '5 px';
            setTimeout(() => {
                error.textContent = "";
            }, 1000);
            error.style.padding = '0 px';
        }
        if(user.value.length - 1 === 0 && user.value == "."){
            user.value = user.value.substring(0, user.value.length - 1);
            error.textContent = "Nem kezdhet ponttal!";
            error.style.padding = '5 px';
            setTimeout(() => {
                error.textContent = "";
            }, 1000);
            error.style.padding = '0 px';
        }
        if(user.value.substring(user.value.length-2, user.value.length-1) == "."){
            error.textContent = "Nem rakhat egymás után 2 pontot!";
            error.style.padding = '5 px';
            setTimeout(() => {
                error.textContent = "";
            }, 1000);
            error.style.padding = '0 px';
            user.value = user.value.substring(0, user.value.length - 1);
        }
    });
});