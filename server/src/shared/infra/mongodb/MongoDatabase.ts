import { MongoClient, Db } from 'mongodb';

const DATABASE_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'xlsx-query';

class MongoDatabase {
  private static mongoClient = new MongoClient(DATABASE_URL);

  private static dbConnection: Db;

  public static connect(callback: (err?: Error) => void) {
    this.mongoClient.connect((err, db): void => {
      if (err || !db) {
        callback(err);
        return;
      }

      this.dbConnection = db.db(DATABASE_NAME);
      callback();
    });
  }

  public static getDatabase() {
    return this.dbConnection;
  }
}

export default MongoDatabase;
