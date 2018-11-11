function greeter2(person) {
    return 'hello' + " " + person.fisrtName + " " + person.lastName;
}
var user2 = {
    fisrtName: 'g',
    lastName: 'young'
};
document.body.innerHTML = greeter2(user2);
