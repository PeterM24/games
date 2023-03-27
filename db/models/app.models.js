const db = require("../connection");

exports.fetchAllCategories = () => {
  return db
    .query(
      `
    SELECT * FROM categories;
    `
    )
    .then((res) => res.rows);
};
