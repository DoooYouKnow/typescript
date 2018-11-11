//接口
interface Person {
    fisrtName: string;
    lastName: string;
}

function greeter2(person: Person){
    return 'hello' + " " + person.fisrtName + " " + person.lastName;
}

let user2 = {
    fisrtName: 'g',
    lastName: 'young',
}

document.body.innerHTML = greeter2(user2);