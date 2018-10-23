const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('Instruments: All instruments ready', this.data);

  PubSub.subscribe('SelectView:Change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function (instrumentFamilyIndex) {
  const selectedInstrumentFamily = this.data[instrumentFamilyIndex];
  PubSub.publish('Instruments: Selected family ready', selectedInstrumentFamily)
};

module.exports = InstrumentFamilies;
