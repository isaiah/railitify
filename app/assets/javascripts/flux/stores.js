var Actions = require('./actions');

var TodoStore = Reflux.createStore({
  init: function() {
    this.listenTo(Actions.statusUpdate, this.updateStatus);
  },
  updateStatus: function(flag) {
    var status = flag ? 'ONLINE' : 'OFFLINE';
    this.trigger(status);
  }
});

module.exports = TodoStore;
