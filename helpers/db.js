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

export const insertPlace = (title, imageUri, address, lat, lng) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
            INSERT INTO places 
            (title, image_uri, address, latitude, longitude) 
            VALUES
            (?, ?, ?, ?, ?)`,
        [title, imageUri, address, lat, lng],
        (_sqlQuery, success) => {
          resolve(success);
        },
        (_sqlQuery, err) => {
          reject(err);
        }
      );
    });
  });
};
