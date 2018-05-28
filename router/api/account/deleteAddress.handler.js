const { deleteAddress } = require('../../../helpers');

async function logic(request, response) {
  try {
    await deleteAddress(postgres, request.params['address'])
  } catch (err) {
    return response.send({ result: 'failure', msg: 'error deleting existing address: ' + err })
  }
  response.send({ result: 'success' })
}

function handler(req, res, next) {
  logic(req).then((data) => {
    res.json(data);
  }).catch(err => next(err));
}
module.exports = handler;