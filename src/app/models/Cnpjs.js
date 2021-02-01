import Sequelize, { Model } from 'sequelize';

class Cnpjs extends Model {
    static init(sequelize) {
        super.init(
            {
                tipo: Sequelize.STRING,
                nome: Sequelize.STRING,
                uf: Sequelize.STRING,
                email: Sequelize.STRING,
                situacao: Sequelize.STRING,
                bairro: Sequelize.STRING,
                logradouro: Sequelize.STRING,
                municipio: Sequelize.STRING,
                porte: Sequelize.STRING,
                natureza_juridica: Sequelize.STRING,
                fantasia: Sequelize.STRING,
                complemento: Sequelize.STRING,
                motivo_situacao: Sequelize.STRING,
                data_situacao: Sequelize.STRING,
                abertura: Sequelize.STRING,
                telefone: Sequelize.INTEGER,
                numero: Sequelize.INTEGER,
                cep: Sequelize.INTEGER,
                cnpj: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'cnpjs',
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.Secundarias, {
            foreignKey: 'usuario',
            as: 'atividades_secundarias',
        });
        this.hasMany(models.Principal, {
            foreignKey: 'usuario',
            as: 'atividade_principal',
        });
    }
}

export default Cnpjs;
