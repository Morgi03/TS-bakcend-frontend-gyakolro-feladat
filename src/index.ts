
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('username')!.addEventListener('input', () => {
        let user = document.getElementById('username') as HTMLInputElement;
        let chars = /[/&=_'-+,<>]/;
        let error = document.getElementById('errorUserName') as HTMLLabelElement;
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



    function validateEmail(email: string): boolean {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    document.getElementById('e_mail')!.addEventListener('change', () => {
        let email = document.getElementById('e_mail') as HTMLInputElement;
        let reemail = document.getElementById('re_email') as HTMLInputElement;
        if (!validateEmail(email.value)) {
            email.style.backgroundColor = "rgb(179 62 62)";
        } else {
            email.style.backgroundColor = "rgb(255, 255, 0, 0)";
            let s1 :string = email.value;
            let s2 :string = reemail.value;
            if (s1 !== s2) {
                email.style.backgroundColor = "rgb(179 62 62)";
                reemail.style.backgroundColor = "rgb(179 62 62)";
            } else {
                email.style.backgroundColor = "rgb(255, 255, 0, 0)";
                reemail.style.backgroundColor = "rgb(255, 255, 0, 0)";
            }
        }

    });



    document.getElementById('re_email')!.addEventListener('change', () => {
        let email = document.getElementById('e_mail') as HTMLInputElement;
        let reemail = document.getElementById('re_email') as HTMLInputElement;
        if (!validateEmail(reemail.value)) {
            reemail.style.backgroundColor = "rgb(179 62 62)";
        } else {
            reemail.style.backgroundColor = "rgb(255, 255, 0, 0)";
            let s1 :string = email.value;
            let s2 :string = reemail.value;
            if (s1 !== s2) {
                email.style.backgroundColor = "rgb(179 62 62)";
                reemail.style.backgroundColor = "rgb(179 62 62)";
            } else {
                email.style.backgroundColor = "rgb(255, 255, 0, 0)";
                reemail.style.backgroundColor = "rgb(255, 255, 0, 0)";
            }
        }
    });




    function validatePasswd(passwd: string): boolean {
        var re = /[QWEZUIOPŐŐÚÓÜÖŰÁÉLKJHGFDSAMNBVCXYÍqeriopúóöűálkjhgfdsa-mnbvcxyí9876543210]/;
        return re.test(passwd);
    }



    document.getElementById('repasswd')!.addEventListener('change', () => {
        let passwd = document.getElementById('passwd') as HTMLInputElement;
        let repasswd = document.getElementById('repasswd') as HTMLInputElement;
        if (!validatePasswd(repasswd.value)) {
            repasswd.style.backgroundColor = "rgb(179 62 62)";
        } else {
            repasswd.style.backgroundColor = "rgb(255, 255, 0, 0)";
            let s1 :string = passwd.value;
            let s2 :string = repasswd.value;
            if (s1 !== s2) {
                passwd.style.backgroundColor = "rgb(179 62 62)";
                repasswd.style.backgroundColor = "rgb(179 62 62)";
            } else {
                passwd.style.backgroundColor = "rgb(255, 255, 0, 0)";
                repasswd.style.backgroundColor = "rgb(255, 255, 0, 0)";
            }
        }
    });
    
    document.getElementById('passwd')!.addEventListener('change', () => {
        let passwd = document.getElementById('passwd') as HTMLInputElement;
        let repasswd = document.getElementById('repasswd') as HTMLInputElement;
        if (!validateEmail(repasswd.value)) {
            passwd.style.backgroundColor = "rgb(179 62 62)";
        } else {
            passwd.style.backgroundColor = "rgb(255, 255, 0, 0)";
            let s1 :string = passwd.value;
            let s2 :string = repasswd.value;
            if (s1 !== s2) {
                passwd.style.backgroundColor = "rgb(179 62 62)";
                repasswd.style.backgroundColor = "rgb(179 62 62)";
            } else {
                passwd.style.backgroundColor = "rgb(255, 255, 0, 0)";
                repasswd.style.backgroundColor = "rgb(255, 255, 0, 0)";
            }
        }
    });



});