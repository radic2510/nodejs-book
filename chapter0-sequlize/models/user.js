const {DataTypes, Model} = require('sequelize');


module.exports = class User extends Model {
    static init(sequelize) {
        return super.init({
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
    }

    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
    }
};


/*
module.exports = (sequelize) => {
    class User extends Model {
        static associate(db) {
            this.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' })
        }
    }

    User.init(
        {
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        }, {
            sequelize,
            timestamps: false,  //createdAt, updatedAt
            underscored: false,
            modelName: 'User',  // Post
            tableName: 'users', // posts
            paranoid: false,    //deletedAt : soft delete
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }
    );

    return User;
}
*/
