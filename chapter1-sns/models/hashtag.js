const {DataType, Model} = require('sequelize');

module.exports = class Hashtag extends Model {
    static init(sequelize) {
        return super.init({

        }, {
           sequelize,
           timestamps: true,
           underscored: false,
           modelName: 'HashTag',
           tableName: 'hashtags',
           paranoid: false,
           charset: 'utf8mb4',
           collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        // Post - PostHashtag - Hashtag
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
}
