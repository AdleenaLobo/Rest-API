export default {
  host: "localhost",
  user: "root",
  password: "AdleenaLobo2024SE", // this is not the password, actually put your password
  db: "testdb",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
