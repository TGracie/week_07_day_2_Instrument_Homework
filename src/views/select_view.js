const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments: All instruments ready', (evt) => {
    const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:Change', selectedIndex);
  });
};

SelectView.prototype.populate = function (familyData) {
 familyData.forEach((family, index) => {
   const option = document.createElement('option');
   option.textContent = family.name;
   option.value = index;
   this.element.appendChild(option);
 });
};

module.exports = SelectView;
