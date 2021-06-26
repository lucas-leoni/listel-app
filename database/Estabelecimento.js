const Sequelize = require('sequelize');
const connection = require('./database');

const Estabelecimento = connection.define('estabelecimento', {
  razao_social: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  inscricao_estadual: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj_cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ie_rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome_fantasia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  responsavel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rua: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instagram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  facebook: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  twitter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  youtube: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  whatsapp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tags: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Estabelecimento.sync({ force: false }).then(() => {});
module.exports = Estabelecimento;