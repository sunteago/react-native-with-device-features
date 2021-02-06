import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db");

//REAL means floating number
const initialQuery = `
    CREATE TABLE IF NOT EXISTS places (
        place_id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL, 
        image_uri TEXT NOT NULL,
        address TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL
    );`;

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        initialQuery,
        [],
        (_sqlQuery) => {
          resolve();
        },
        (_sqlQuery, err) => {
          reject(err);
        }
      );
    });
  });
};
