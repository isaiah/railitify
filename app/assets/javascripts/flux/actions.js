var Reflux = require('reflux');

var Actions = Reflux.createActions([
  "statusUpdate",
  "statusEdited",
  "statusAdded"
]);

module.exports = Actions;
