module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cnpjs', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            tipo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            uf: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            situacao: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            bairro: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            logradouro: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            municipio: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            porte: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            natureza_juridica: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            fantasia: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            complemento: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            motivo_situacao: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            data_situacao: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            abertura: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            telefone: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            numero: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            cep: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            cnpj: {
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
        return queryInterface.dropTable('cnpjs');
    },
};
