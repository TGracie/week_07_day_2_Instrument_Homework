const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
    PubSub.subscribe('Instruments: Selected family ready', (evt) => {
      const family = evt.detail;
      this.format(family);
    });
};

InstrumentInfoView.prototype.format = function (family) {
  this.container.innerHTML = '';

  const pHead = document.createElement('h2');
    pHead.textContent = `${family.name}`;

  const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `${family.description}`;

  const instrumentList = document.createElement('ul');
    instrumentList.textContent = `${family.instruments}`;

    this.container.appendChild(pHead);
    this.container.appendChild(infoParagraph);
    this.container.appendChild(instrumentList);
};

module.exports = InstrumentInfoView;
