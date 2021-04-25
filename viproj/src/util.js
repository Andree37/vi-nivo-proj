const fs = require('fs');
const csv = require('csv-parser');

/**
 * Read CSV to an ArrayEx
 * @param {function} callback : { err, sucess }
 */
module.exports.readCsvToArray = (path, callback) => {
  const data = [];
  fs.createReadStream(path)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('error', (err) => {
    callback(err, null);
  })
  .on('end', () => {
    callback(null, data);
  });
};

/**
 * Array extension with a Synchronous Foreach
 * (Construtor parasita)
 * @public
 * @param {array} arrayToExtend : Array to extend. Null for an empty array
 */
module.exports.ArrayEx = function (arrayToExtend = null) {
  // Criar o Array
  const values = !arrayToExtend ? [] : [...arrayToExtend];

  /**
   * Parasite function
   * @param {function} fnCallback
   */
  values.syncForEach = function (fnCallback) {
    const iterator = (i) => {
      if (values.length > i) {
        fnCallback(values[i], i, values);
        iterator(i + 1);
      }
    };
    iterator(0);
  };
  // retorna o Array
  return values;
};
