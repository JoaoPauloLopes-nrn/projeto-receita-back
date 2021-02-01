import Cnpjs from '../models/Cnpjs';
import Secundarias from '../models/Secundarias';
import Principal from '../models/Principal';

const { Op } = require('sequelize');

class CnpjsController {
    async index(req, res) {
        const cnpjs = await Cnpjs.findAll();

        return res.json(cnpjs);
    }

    async encontrar(req, res) {
        const { cnpj } = req.body;

        const cnpjs = await Cnpjs.findAll({
            where: {
                cnpj: cnpj.toString(),
            },
            include: [
                {
                    model: Secundarias,
                    as: 'atividades_secundarias',
                },
                {
                    model: Principal,
                    as: 'atividade_principal',
                },
            ],
        });

        return res.json(cnpjs);
    }

    async getBanco(req, res) {
        const { cnpj } = req.body;

        const cnpjs = await Cnpjs.findAll({
            where: {
                [Op.or]: [{ cnpj: cnpj.toString() }, { nome: cnpj.toString() }],
            },
            include: [
                {
                    model: Secundarias,
                    as: 'atividades_secundarias',
                },
                {
                    model: Principal,
                    as: 'atividade_principal',
                },
            ],
        });

        return res.json(cnpjs);
    }

    async gravar(req, res) {
        const { data } = req.body;

        const cnpj = await Cnpjs.create({
            tipo: data.tipo,
            nome: data.nome,
            uf: data.uf,
            email: data.email,
            situacao: data.situacao,
            bairro: data.bairro,
            logradouro: data.logradouro,
            municipio: data.municipio,
            porte: data.porte,
            natureza_juridica: data.natureza_juridica,
            fantasia: data.fantasia,
            complemento: data.complemento,
            motivo_situacao: data.motivo_situacao,
            data_situacao: data.data_situacao,
            abertura: data.abertura,
            telefone: data.telefone.replace(/([^\d])+/gim, ''),
            numero: data.numero,
            cep: data.cep.toString().replace(/([^\d])+/gim, ''),
            cnpj: data.cnpj,
        });

        await Promise.all(
            data.atividades_secundarias.map(async (item) => {
                await Secundarias.create({
                    usuario: cnpj.id,
                    code: item.code,
                    text: item.text,
                });
            })
        );

        await Principal.create({
            usuario: cnpj.id,
            code: data.atividade_principal[0].code,
            text: data.atividade_principal[0].text,
        });

        const encontrarCnpj = await Cnpjs.findOne({
            where: {
                cnpj: data.cnpj,
            },
        });

        return res.json({ msg: 'success', cnpj: encontrarCnpj.cnpj });
    }
}

export default new CnpjsController();
