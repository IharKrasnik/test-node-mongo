const receiptService = require('./receipt.service');

receiptService.on('created', async ({ doc }) => {
  const balance = await receiptService.getBalance(doc);

  await receiptService.atomic.update({ _id: doc._id, garage: doc.garage }, {
    $set: {
      d: 2,
      balance,
    }
  });
})
