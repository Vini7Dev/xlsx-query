import mongoose from 'mongoose';

const DATABASE_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'xlsx-query';

console.log('=> Connectiong to databse');

mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`);
mongoose.Promise = global.Promise;

console.log('=> Database connection successfully!');

export default mongoose;
