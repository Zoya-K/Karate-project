const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, type, price, vendor 
    FROM product LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}


async function getByID(id){
  const rows1 = await db.query(
    `SELECT id, name, type, price, vendor 
    FROM product WHERE id=${id}`
  );

  const data = helper.emptyOrRows(rows1);
  

  return {
    data
  }
}


async function create(prod){
  const result = await db.query(
 `INSERT INTO product 
    (name, type, price, vendor) 
    VALUES 
    ('${prod.name}', '${prod.type}', ${prod.price},'${prod.vendor}')`
  );

  let message = 'Error in creating a product';

  if (result.affectedRows) {
    message = 'Product created successfully';
  }

  return {message};
}

async function update(id, prod){
  const result = await db.query(
    `UPDATE product 
    SET name="${prod.name}", type="${prod.type}", price=${prod.price}, 
    vendor="${prod.vendor}"
    WHERE id=${id}` 
  );

  let message = 'Error in updating product';

  if (result.affectedRows) {
    message = 'Product updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM product WHERE id=${id}`
  );

  let message = 'Error in deleting product';

  if (result.affectedRows) {
    message = 'Product deleted successfully';
  }

  return {message};
}


module.exports = {
  getMultiple,
  getByID,
  create,
  update,
  remove
};