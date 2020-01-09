function is_username_valid(password){
    let passwordValid = /^([a-zA-Z]){5,9}$/;
    return (passwordValid.test(password));
}

console.log(is_username_valid('NinjaPink'));
