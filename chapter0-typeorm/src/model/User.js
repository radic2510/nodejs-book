/*export */
class User {
    constructor(name, age, married, comment, createdAt) {
        this.name = name;
        this.age = age;
        this.married = married;
        this.comment = comment;
        this.createdAt = createdAt;
    }
}

module.exports = {
    User: User
};
