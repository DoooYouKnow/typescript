//类型注解
function greeter(person: string) {
    return 'hello' + person;
}

let user = 'gyoung';

document.body.innerHTML = greeter(user);