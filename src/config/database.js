// export const dialect = 'postgres';
// // export const url = 'postgresql://postgres:1cEedcE22C5aF6236bfG1**5bB6*e11C@viaduct.proxy.rlwy.net:49551/railway';
// export const host = 'localhost';
// export const username = 'postgres';
// export const password = 'erikdev';
// export const database = 'codeburger';
// export const define = {
//   timestamps: true /* adiciona os campos 'createdAt' e 'updatedAt' automaticamente, ao criar um dado */,
//   underscored: true,
//   underscoredAll: true /* os nomes de cada dado de uma tabela fica no estilo 'snake_case' */,
// };

module.exports = {
  dialect: 'postgres',
  // url: 'postgresql://postgres:CGEf41Aaa4B*fd*DDDD-Gagb56-c52cd@monorail.proxy.rlwy.net:41012/railway',
  host: 'localhost',
  username: 'postgres',
  password: 'erikdev',
  database: 'codeburger',
  define: {
    timestamps: true /* adiciona os campos 'createdAt' e 'updatedAt' automaticamente, ao criar um dado */,
    underscored: true,
    underscoredAll: true /* os nomes de cada dado de uma tabela fica no estilo 'snake_case' */,
  },
}