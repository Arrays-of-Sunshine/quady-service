const faker = require('faker/locale/en_US');
const fs = require('fs');
const csvWriter = require('csv-writer');
const csvWriteControllers = require('./csv-writing-controllers');



const records = 1000;

const products = [
  'Activewear Top', 'Activewear Bottoms', 'Activewear Socks', 'Graphic Tee Long Sleeve', 'Graphic Tee Short Sleeve', 'Graphic Tank Top', 'Zip-Up Hoodie', 'Hoodie', 'Crew-Neck Sweatshirt', 'Rain Jacket', 'Fleece Jacket', 'Gore-Tex Jacket', 'Parka', 'Fur Coat', 'Jeans', 'Jean Shorts', 'Pajama Top', 'Pajama Bottoms', 'Pajama Onesie', 'Fleece Robe', 'Cotton Robe', 'Chinos', 'Khakis', 'Tee Shirt', 'Long Sleeve Shirt', 'Henley Shirt', 'Tank Top', 'Button Down Shirt', 'Oxford Shirt', 'Flannel Shirt', 'Khaki Shorts', 'Chino Shorts', 'Basketball Shorts', 'Ankle Socks', 'Calf Socks', 'Knee Socks', 'Wool Hiking Socks'
];

const categories = [
  'Men\'s', 'Women\'s', 'Young Adult\'s', 'Children\'s'
];

const sizes = [
  'Small', 'Medium', 'Large', 'X-Large'
];

const salesTypes = [
  'percentage', 'dollar'
];

const salesValues = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95
];

let indexMensTable = 1;
let indexWomensTable = 1;
let indexTeensTable = 1;
let indexKidsTable = 1;

let colors = [];

const ColorGenerator = () => {
  for (let index = 0; index < 100; index ++) {
    let newColor = faker.commerce.color();
    if (colors.indexOf(newColor) === -1) {
      colors.push(newColor);
    }
  }
}


const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
 }

const primaryRecordObjs = (counter) => {
  let dataHolder = [];
  for (let index = 0; index < records; index ++) {
    let record = {};
    record.id = (counter * 1000) + index + 1;
    record.name = products[randomNumber(0, products.length)];
    record.category = categories[randomNumber(0, categories.length)];
    record.manufacturer = faker.company.companyName();
    if (record.category === 'Men\'s') {
      clothingMensRecords(record.id, 'men');
    };
    dataHolder.push(record);
    if (record.category === 'Women\'s') {
      clothingWomensRecords(record.id, 'women');
    }
    if (record.category === 'Young Adult\'s') {
      clothingTeensRecords(record.id, 'teen');
    }
    if (record.category === 'Children\'s') {
      clothingKidsRecords(record.id, 'kid');
    }
  }
  csvWriteControllers.csvWritePrimary
    .writeRecords(dataHolder)
}

const clothingMensRecords = (masterRef) => {

  let dataHolder = [];

  let colorSliceStart = randomNumber(0, (colors.length - 15));
  let colorsSliceEnd = randomNumber(1, 15);
  let recordColors = colors.slice(colorSliceStart, colorsSliceEnd);

  for (let index = 0; index < sizes.length; index ++) {
    let record = {};
    record.masterRef = masterRef;
    record.size = sizes[index];
    record.msrp = faker.commerce.price();
    record.saleStatus = randomNumber(1, 39);
    record.stock = randomNumber(0, 1000);
    for (let k = 0; k < colors.length; k++) {
      let innerRecord = {};
      innerRecord.color = colors[k];
      innerRecord.id = indexMensTable;
      indexMensTable = indexMensTable + 1;
      Object.assign(innerRecord, record);
      dataHolder.push(innerRecord);
    }
  }
  csvWriteControllers.csvWriteMens
  .writeRecords(dataHolder)
}

const clothingWomensRecords = (masterRef) => {

  let dataHolder = [];

  let colorSliceStart = randomNumber(0, (colors.length - 15));
  let colorsSliceEnd = randomNumber(1, 15);
  let recordColors = colors.slice(colorSliceStart, colorsSliceEnd);

  for (let index = 0; index < sizes.length; index ++) {
    let record = {};
    record.masterRef = masterRef;
    record.size = sizes[index];
    record.msrp = faker.commerce.price();
    record.saleStatus = randomNumber(1, 41);
    record.stock = randomNumber(0, 1000);
    for (let k = 0; k < colors.length; k++) {
      let innerRecord = {};
      innerRecord.color = colors[k];
      innerRecord.id = indexWomensTable;
      indexWomensTable = indexWomensTable + 1;
      Object.assign(innerRecord, record);
      dataHolder.push(innerRecord);
    }
  }
  csvWriteControllers.csvWriteWomens
    .writeRecords(dataHolder)
}

const clothingTeensRecords = (masterRef) => {

  let dataHolder = [];

  let colorSliceStart = randomNumber(0, (colors.length - 15));
  let colorsSliceEnd = randomNumber(1, 15);
  let recordColors = colors.slice(colorSliceStart, colorsSliceEnd);

  for (let index = 0; index < sizes.length; index ++) {
    let record = {};
    record.masterRef = masterRef;
    record.size = sizes[index];
    record.msrp = faker.commerce.price();
    record.saleStatus = randomNumber(1, 41);
    record.stock = randomNumber(0, 1000);
    for (let k = 0; k < colors.length; k++) {
      let innerRecord = {};
      innerRecord.color = colors[k];
      innerRecord.id = indexTeensTable;
      indexTeensTable = indexTeensTable + 1;
      Object.assign(innerRecord, record);
      dataHolder.push(innerRecord);
    }
  }
  csvWriteControllers.csvWriteTeens
    .writeRecords(dataHolder)
}

const clothingKidsRecords = (masterRef) => {

  let dataHolder = [];

  let colorSliceStart = randomNumber(0, (colors.length - 15));
  let colorsSliceEnd = randomNumber(1, 15);
  let recordColors = colors.slice(colorSliceStart, colorsSliceEnd);

  for (let index = 0; index < sizes.length; index ++) {
    let record = {};
    record.masterRef = masterRef;
    record.size = sizes[index];
    record.msrp = faker.commerce.price();
    record.saleStatus = randomNumber(1, 41);
    record.stock = randomNumber(0, 1000);
    for (let k = 0; k < colors.length; k++) {
      let innerRecord = {};
      innerRecord.color = colors[k];
      innerRecord.id = indexKidsTable;
      indexKidsTable = indexKidsTable + 1;
      Object.assign(innerRecord, record);
      dataHolder.push(innerRecord);
    }
  }
  csvWriteControllers.csvWriteKids
    .writeRecords(dataHolder)
}

const salesRecords = () => {

  let dataHolder = [];
  let id = 1;

  for (let index = 0; index < salesTypes.length; index ++) {
    for (let i = 0; i < salesValues.length; i ++) {
      let record = {};
      record.saleType = salesTypes[index];
      record.saleValue = salesValues[i];
      record.id = id;
      id = id + 1;
      dataHolder.push(record);
    }
  }
  csvWriteControllers.csvWriteSales
    .writeRecords(dataHolder)
}


const masterLoop = () => {
  let counter = 0;
  while (counter < 10) {
    primaryRecordObjs(counter);
    counter ++
  }
}

salesRecords();
ColorGenerator();
masterLoop();