const KEY = {
  LIFECYCLE: 'redux-pack/LIFECYCLE',
  TRANSACTION: 'redux-pack/TRANSACTION',
};

const LIFECYCLE = {
  START: 'start',
  SUCCESS: 'success',
  FAILURE: 'failure',
  CANCEL: 'cancel'
};

const PROMISE_CANCEL_REASON = 'PROMISE_CANCEL_REASON'

module.exports = {
  KEY,
  LIFECYCLE,
  PROMISE_CANCEL_REASON
};
