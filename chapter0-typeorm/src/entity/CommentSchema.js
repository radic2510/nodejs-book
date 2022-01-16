const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Comment = require("../model/Comment").Comment; // import {Category} from "../model/Category";

module.exports = new EntitySchema({
    name: "Comment",
    target: Comment,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        comment: {
            type: "text"
        },
        createdAt: {
            type: "date"
        }
    }
});
