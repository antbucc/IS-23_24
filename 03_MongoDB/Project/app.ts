export { };

function welcomePerson(person) {
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return `Hey ${person.firstName} ${person.lastName}`;
}

const james = {
    firstName: "James",
    lastName: "Quick"
};

welcomePerson(james);