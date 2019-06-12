
const _ = require('lodash');
const handler = require('./receipt.handler');
const receiptService = require('./receipt.service');

/*

await createReceipt
--on('created')
---- getBalance
---- update

signReceipt
---- getBalance
*/

(async () => {
  for (var i = 0; i < 100000; i++) {
    const receipt = {
      number: i,
      garage: _.random(0, 1000),
    };

    await receiptService.create(receipt);
    await receiptService.getBalance(receipt);
  }
})();
