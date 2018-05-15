class Candidate {
    constructor(person) {
        this.id = person.id;
        this.name = person.name;
        this.birthday = person.birthday;
        this.email = person.email;
        this.education = person.education;
        this.avatar = person.avatar;
    };
};

export { Candidate };