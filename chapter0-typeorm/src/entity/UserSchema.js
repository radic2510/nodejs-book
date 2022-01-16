// import {EntitySchema} from "typeorm";
// import {User} from "../model/User";
// import {Comment} from "../model/Comment";

const EntitySchema = require("typeorm").EntitySchema;
const User = require("../model/User").User;
const Comment = require("../model/Comment").Comment;

module.exports = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        age: {
            type: "int"
        },
        married: {
            type: "varchar"
        },
        commenter: {
            type: "text"
        },
        createdAt: {
            type: "date"
        }
    },
    relations: {
        comments: {
            target: "Comment",
            type: "one-to-many",
            joinTable: true,
            cascade: false
        }
    }
});
