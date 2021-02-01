import Sequelize, { Model } from 'sequelize';

class Secundarias extends Model {
    static init(sequelize) {
        super.init(
            {
                usuario: Sequelize.INTEGER,
                code: Sequelize.STRING,
                text: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'secundarias',
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Cnpjs, {
            foreignKey: 'usuario',
            as: 'secundario',
        });
    }
}

export default Secundarias;
