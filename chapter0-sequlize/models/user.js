const {DataTypes, Model} = require('sequelize');

module.exports = class User extends Model {
    static init = (sequelize) => super.init({
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        married: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        timestamps: false,  //createdAt, updatedAt
        underscored: false,
        modelName: 'User',  // Post
        tableName: 'users', // posts
        paranoid: false,    //deletedAt : soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });

    static associate = (db) => db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });

};
