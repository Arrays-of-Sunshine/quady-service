const csvWriter = require('csv-writer');

const csvWritePrimary = csvWriter.createObjectCsvWriter({
  path: './csv-data/primary-records.csv',
  append: true,
  header: [
    {id: 'id', title: 'id'},
    {id: 'name', title: 'name'},
    {id: 'category', title: 'category'},
    {id: 'manufacturer', title: 'manufacturer'}
  ]
});

const csvWriteMens = csvWriter.createObjectCsvWriter({
  path: './csv-data/mens-records.csv',
  append: true,
  header: [
    {id: 'id', title: 'id'},
    {id: 'masterRef', title: 'masterRef'},
    {id: 'size', title: 'size'},
    {id: 'msrp', title: 'msrp'},
    {id: 'saleStatus', title: 'saleStatus'},
    {id: 'stock', title: 'stock'},
    {id: 'color', title: 'color'}
  ]
});

const csvWriteWomens = csvWriter.createObjectCsvWriter({
  path: './csv-data/womens-records.csv',
  append: true,
  header: [
    {id: 'id', title: 'id'},
    {id: 'masterRef', title: 'masterRef'},
    {id: 'size', title: 'size'},
    {id: 'msrp', title: 'msrp'},
    {id: 'saleStatus', title: 'saleStatus'},
    {id: 'stock', title: 'stock'},
    {id: 'color', title: 'color'}
  ]
});

const csvWriteTeens = csvWriter.createObjectCsvWriter({
  path: './csv-data/teens-records.csv',
  append: true,
  header: [
    {id: 'id', title: 'id'},
    {id: 'masterRef', title: 'masterRef'},
    {id: 'size', title: 'size'},
    {id: 'msrp', title: 'msrp'},
    {id: 'saleStatus', title: 'saleStatus'},
    {id: 'stock', title: 'stock'},
    {id: 'color', title: 'color'}
  ]
});

const csvWriteKids = csvWriter.createObjectCsvWriter({
  path: './csv-data/kids-records.csv',
  append: true,
  header: [
    {id: 'id', title: 'id'},
    {id: 'masterRef', title: 'masterRef'},
    {id: 'size', title: 'size'},
    {id: 'msrp', title: 'msrp'},
    {id: 'saleStatus', title: 'saleStatus'},
    {id: 'stock', title: 'stock'},
    {id: 'color', title: 'color'}
  ]
});

module.exports = {
  csvWritePrimary,
  csvWriteMens,
  csvWriteWomens,
  csvWriteTeens,
  csvWriteKids
}