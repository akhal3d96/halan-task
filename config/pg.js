module.exports = {
  development: {
    database: 'contests',
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER
  }
};
