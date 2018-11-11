var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return 'hello' + ' ' + person.firstName + ' ' + person.lastName;
}
var user3 = new Student('Jane', 'M.', 'user');
document.body.innerHTML = greeter3(user3);
