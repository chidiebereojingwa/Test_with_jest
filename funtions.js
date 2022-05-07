const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: ()=> null,
    checkValue: (x) => x,
    CreateUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Chidiebere';
        return user
    }
}

module.exports = functions