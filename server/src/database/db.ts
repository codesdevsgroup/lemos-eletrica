import { DataType } from "sequelize-typescript";
import { dbMysql } from "./connection";

dbMysql.authenticate().then().catch(function(error){
  console.log(error);
});

const Produto = dbMysql.define('PRODUTOS', {
  PRODUTOS_ID: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  PRODUTO_TIPO: {
    type: DataType.STRING,
    allowNull: false,
  },
  PRODUTO_INATIVO: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  PRODUTO_IAT: {
    type: DataType.STRING,
    allowNull: false,
  },
  PRODUTO_IPPT: {
    type: DataType.STRING,
    allowNull: false,
  },
  UNIDADES_ID: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  PRODUTO_FRACAO_VENDA: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_NOME: {
    type: DataType.STRING,
    allowNull: false,
  },
  DEPARTAMENTOS_ID: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  SUBGRUPOS_ID: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  FAMILIAS_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  MARCAS_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_PRECO_COMPRA: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_PRECO_CUSTO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_MARGEM_LUCRO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_PRECO_VENDA: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_PESO_BRUTO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_PESO_LIQUIDO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_PESO_VOLUME: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_FATOR_CONVERSAO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_PRIORIDADE: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  PRODUTO_ESTOQUE_MINIMO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_ESTOQUE_DISPONIVEL: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  CSTIPI_ID: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  PRODUTO_BCIPI_RED: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_IPI: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_EXTIPI: {
    type: DataType.STRING,
    allowNull: true,
  },
  PRODUTO_IMPOSTO: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  CSTPIS_ID: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  PRODUTO_PIS: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_CSTPIS_ENTRADA: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  PRODUTO_PIS_ENTRADA: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_NAT_REC_PIS: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_CRED_PIS: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_REC_PIS: {
    type: DataType.INTEGER,
    allowNull: true,
  }, 
  CSTCOFINS_ID: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  PRODUTO_COFINS: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_CSTCOFINS_ENTRADA: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  PRODUTO_COFINS_ENTRADA: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  PRODUTO_NAT_REC_COFINS: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_CRED_COFINS: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_REC_COFINS: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  NCM_ID: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  PRODUTO_ANP: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_BCICMS_MOD: {
    type: DataType.STRING,
    allowNull: false,
  },
  PRODUTO_APLICACAO: {
    type: DataType.STRING,
    allowNull: true,
  },
  PRODUTO_LOCALIZACAO: {
    type: DataType.STRING,
    allowNull: true,
  },
  INFORMACOES_ADICIONAIS: {
    type: DataType.STRING,
    allowNull: true,
  },
  PRODUTO_TAG: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  PRODUTO_QUANTIDADE_ETIQUETAS: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  MODIFICADO: {
    type: DataType.STRING,
    allowNull: true,
  },
  BLOQUEADO: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_IMPORTADO: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_ESTOQUE_CONSIGNADO: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  ENQ_IPI_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  CEST_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_COD_BALANCA: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_SYNC_FALCON: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  PERCENTUAL_GLP: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  REGISTRO_ANVISA: {
    type: DataType.STRING,
    allowNull: true,
  },
  RASTRO: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  FABRICANTES_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PROD_ESCALA_NAO_RELEVANTE: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  BENEFICIO_ESCALA_N_RELEVANTE: {
    type: DataType.STRING,
    allowNull: true,
  },
  PERCENTUAL_GNN: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  PERCENTUAL_GNI: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  VALOR_PARTIDA_GLP: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  PRODUTO_CRED_CIAP: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  TIPO_COMERCIAL: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  UNIDADE_TRIBUTARIA_ID: {
    type: DataType.TINYINT,
    allowNull: true,
  },
  FATOR_CONVERSAO_VENDA: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  SOLICIT_FATOR_CONVERSAO_TRIB: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  CODIGO_FCI: {
    type: DataType.STRING,
    allowNull: true,
  },
  GERAR_FCI: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  VALOR_PARCELA_IMPORTADA: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  CONTEUDO_IMPORTACAO_FCI: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  VALOR_CMV: {
    type: DataType.FLOAT,
    allowNull: false,
  },
  DECOMPOR_AUTO_ENTRADA: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  COMBUSTIVEL_OU_LUBRIFICANTE: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  PRODUTO_NAT_REC_PIS_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  PRODUTO_NAT_REC_COFINS_ID: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  CUBAGEM: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  ADD_COMPONENTES_INDIVIDUALMENTE: {
    type: DataType.TINYINT,
    allowNull: false,
  },
  VALOR_PMC_ANVISA: {
    type: DataType.FLOAT,
    allowNull: true,
  },
  MOTIVO_ISENCAO_ANVISA: {
    type: DataType.STRING,
    allowNull: true,
  }, 
});

Produto.sync({ alter: true })
export {Produto}