const connectionString = `mongodb://127.0.0.1:27018/test`;
const db = require('@paralect/node-mongo').connect(connectionString);
const receiptService = db.createService('receipts');
const _ = require('lodash');

receiptService.getBalance = async (receipt) => {
  const { results: receipts } = await receiptService.find({
    garage: receipt.garage,
    number: { $lte: receipt.number },
    type: { $ne: 'test' }
  });

  const length = receipts.length;
  const uniqLength = _.uniqBy(receipts, '_id').length;

  console.log('length', length, uniqLength);

  if (length !== uniqLength) {
    throw new Error('WTTTFFFFF!!!');
  }

  return receipts.length;
}

module.exports = receiptService;
