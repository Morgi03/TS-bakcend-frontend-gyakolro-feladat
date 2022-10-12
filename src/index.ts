document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username')!.addEventListener('input', () => {
        let user = document.getElementById('username') as HTMLInputElement;
        let chars = /[/&=_'-+,<>]/;
        if (chars.test(user.value)) {
            user.value = user.value.substring(0, user.value.length-1)
        }
    });
});