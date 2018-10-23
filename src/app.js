const InstrumentFamilyModels = require('./models/instrument_families.js');
const InstrumentFamilies = require('./data/instrument_families.js');
const InstrumentInfoView = require('./views/display_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

// Select Event
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

// Information Handling
const infoDiv = document.querySelector('div#family-information');
const listDiv = document.querySelector('div#instrument-list');
const instrumentInfoDisplay = new InstrumentInfoView(infoDiv, listDiv);
instrumentInfoDisplay.bindEvents();

// Data Source
const instrumentDataSource = new InstrumentFamilyModels(InstrumentFamilies);
instrumentDataSource.bindEvents();

});
