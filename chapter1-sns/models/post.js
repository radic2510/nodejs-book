const {DataTypes, Model} = require('sequelize');

module.exports = class Post extends Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: DataTypes.STRING(140),
                allowNull: false,
            },
            img: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
    }

    static associate(db) {
        // User - Post
        db.Post.belongsTo(db.User);

        // Post - PostHashTag - HashTag
        db.Post.belongsToMany(db.Hashtag, { through: 'postHashtag' });
    }
}
