import {Sequelize, DataTypes} from "sequelize";

const dbMysql = new Sequelize("u171877228_pegapreco", "u171877228_WB8Zd", "Codesd3v5FjL++", {
    host: 'sql912.main-hosting.eu',
    dialect: 'mysql'
});

dbMysql.authenticate().then().catch(function(error){
  console.log(error);
});

const produtos = dbMysql.define('PRODUTOS', {
  PRODUTOS_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  PRODUTO_TIPO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PRODUTO_INATIVO: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  PRODUTO_IAT: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PRODUTO_IPPT: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UNIDADES_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRODUTO_FRACAO_VENDA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_NOME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DEPARTAMENTOS_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SUBGRUPOS_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  FAMILIAS_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  MARCAS_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_PRECO_COMPRA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_PRECO_CUSTO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_MARGEM_LUCRO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_PRECO_VENDA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_PESO_BRUTO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_PESO_LIQUIDO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_PESO_VOLUME: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_FATOR_CONVERSAO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_PRIORIDADE: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  PRODUTO_ESTOQUE_MINIMO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_ESTOQUE_DISPONIVEL: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  CSTIPI_ID: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  PRODUTO_BCIPI_RED: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_IPI: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_EXTIPI: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PRODUTO_IMPOSTO: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  CSTPIS_ID: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  PRODUTO_PIS: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_CSTPIS_ENTRADA: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  PRODUTO_PIS_ENTRADA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_NAT_REC_PIS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_CRED_PIS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_REC_PIS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }, 
  CSTCOFINS_ID: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  PRODUTO_COFINS: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_CSTCOFINS_ENTRADA: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  PRODUTO_COFINS_ENTRADA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PRODUTO_NAT_REC_COFINS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_CRED_COFINS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_REC_COFINS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  NCM_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRODUTO_ANP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_BCICMS_MOD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PRODUTO_APLICACAO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PRODUTO_LOCALIZACAO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  INFORMACOES_ADICIONAIS: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PRODUTO_TAG: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  PRODUTO_QUANTIDADE_ETIQUETAS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  MODIFICADO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BLOQUEADO: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_IMPORTADO: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_ESTOQUE_CONSIGNADO: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ENQ_IPI_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CEST_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_BALANCA: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_SYNC_FALCON: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  PERCENTUAL_GLP: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  REGISTRO_ANVISA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RASTRO: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  FABRICANTES_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PROD_ESCALA_NAO_RELEVANTE: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  BENEFICIO_ESCALA_N_RELEVANTE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PERCENTUAL_GNN: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  PERCENTUAL_GNI: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  VALOR_PARTIDA_GLP: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  PRODUTO_CRED_CIAP: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  TIPO_COMERCIAL: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UNIDADE_TRIBUTARIA_ID: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  FATOR_CONVERSAO_VENDA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  SOLICIT_FATOR_CONVERSAO_TRIB: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  CODIGO_FCI: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GERAR_FCI: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  VALOR_PARCELA_IMPORTADA: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  CONTEUDO_IMPORTACAO_FCI: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  VALOR_CMV: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  DECOMPOR_AUTO_ENTRADA: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  COMBUSTIVEL_OU_LUBRIFICANTE: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  PRODUTO_NAT_REC_PIS_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PRODUTO_NAT_REC_COFINS_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CUBAGEM: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ADD_COMPONENTES_INDIVIDUALMENTE: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  VALOR_PMC_ANVISA: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  MOTIVO_ISENCAO_ANVISA: {
    type: DataTypes.STRING,
    allowNull: true,
  }, 
});

produtos.sync({ alter: true })
export {produtos}