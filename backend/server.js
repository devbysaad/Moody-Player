const app = require('./src/app');
const connectDB = require('./src/database/db')
require('dotenv').config('./src/app')

connectDB()
app.listen(3000, () => {
    console.log(`Server started on port`);
});