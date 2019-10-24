// module.exports = {
//   PORT: 8000,
//   DB:
//     'mongodb+srv://pzurawka:bardzotrudnehaslo@cluster0-1yspr.mongodb.net/test?retryWrites=true&w=majority'
// };

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB: process.env.DB
};
