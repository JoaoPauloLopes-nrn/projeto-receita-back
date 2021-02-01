module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('secundarias', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            usuario: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'cnpjs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                defaultValue: null,
            },
            code: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            text: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('secundarias');
    },
};
