const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

const connection = require('./database/database');
connection
  .authenticate()
  .then(() => {
    console.log('MYSQL, CONECTADO');
  }).catch((error) => {
    console.error(error);
  });

const Estabelecimento = require('./database/Estabelecimento');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  Estabelecimento.findAll({
    raw: true, 
    order: [[ 'id', 'DESC']]
  }).then((estabelecimentos) => {
    res.render('index', {
      estabelecimentos: estabelecimentos
    });
  });
});

app.get('/novo', (req, res) => {
  res.render('novo');
});

app.post('/salvar-ponto', (req, res) => {
  let razao = req.body.razao;
  let inscricao = req.body.inscricao;
  let cnpj_cpf = req.body.cnpj_cpf;
  let ie_rg = req.body.ie_rg;
  let nome = req.body.nome;
  let responsavel = req.body.responsavel;
  let telefone = req.body.telefone;
  let email = req.body.email;
  let rua = req.body.rua;
  let numero = req.body.numero;
  let complemento = req.body.complemento;
  let bairro = req.body.bairro;
  let cidade = req.body.cidade;
  let estado = req.body.estado;
  let cep = req.body.cep;
  let url = req.body.url;
  let facebook = req.body.facebook;
  let youtube = req.body.youtube;
  let instagram = req.body.instagram;
  let twitter = req.body.twitter;
  let whatsapp = req.body.whatsapp;
  let tags = req.body.tags;
  console.log(`Dados: Razão: ${razao}  Inscrição: ${inscricao}`);

  Estabelecimento.create({
    razao_social: razao, 
    inscricao_estadual: inscricao,
    cnpj_cpf: cnpj_cpf,
    ie_rg: ie_rg,
    nome_fantasia: nome,
    responsavel: responsavel,
    telefone: telefone,
    email: email,
    rua: rua,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    cep: cep,
    url: url,
    instagram: instagram,
    facebook: facebook,
    twitter: twitter,
    youtube: youtube,
    whatsapp: whatsapp,
    tags: tags
  }).then(() => {
    res.redirect('/');
  }).catch((error) => {
    console.error(`Ocorreu um erro ao salvar seus dados -  ${error}`);
  });
});

app.listen(9000, (erro) => {
  if(erro) {
    console.log('Ops, ocorreu um erro ao iniciar o servidor.')
  } else {
    console.log('Servidor rodando no endereço: http://localhost:9000')
  }
});