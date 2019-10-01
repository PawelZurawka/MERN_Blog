module.exports = {
  PORT: process.env.PORT ? process.env.PORT : 8000,
  DB: process.env.DB
    ? process.env.DB
    : 'mongodb+srv://pzurawka:bardzotrudnehaslo@cluster0-1yspr.mongodb.net/test?retryWrites=true&w=majority'
};
