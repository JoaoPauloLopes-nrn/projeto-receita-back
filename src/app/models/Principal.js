import Sequelize, { Model } from 'sequelize';

class Principal extends Model {
    static init(sequelize) {
        super.init(
            {
                usuario: Sequelize.INTEGER,
                code: Sequelize.STRING,
                text: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'principal',
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Cnpjs, {
            foreignKey: 'usuario',
            as: 'principal',
        });
    }
}

export default Principal;
