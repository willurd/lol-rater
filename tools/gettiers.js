var wget = require('wget');
var fs = require('fs');
var jsdom = require('jsdom');

if (process.argv.length < 3) {
  console.log('Please supply a URL');
  process.exit(1);
}

var url = process.argv[2];
var saveToFilename = 'data/tiers';

wget.download(url, saveToFilename + '.html').on('end', function() {
  var html = fs.readFileSync(saveToFilename + '.html').toString();
  var tiers = {};

  var tierNameMap = {
    'God Tier': 'god',
    'Tier 1': '1',
    'Tier 2': '2',
    'Tier 3': '3',
    'Tier 4': '4'
  };

  var positionNameMap = {
    'Mid-Lane': 'mid',
    'Jungle': 'jungle',
    'AD': 'adc',
    'Support': 'support',
    'Top': 'top'
  };

  var misspellings = {
    'Leblanc': 'LeBlanc',
    'Cho\'gath': 'Cho\'Gath',
    'Kog\'maw': 'Kog\'Maw',
  };

  function processTier(text) {
    var lines = text.split('\n');
    var name = lines.shift();
    name = name.substring(0, name.indexOf('[')).trim();
    var key = tierNameMap[name];
    var lineProcessor = createLineProcessor(key);

    tiers[key] = {};
    lines.forEach(lineProcessor);
  }

  function createLineProcessor(tier) {
    return function(line) {
      var parts = line.split(':');
      var positionName = parts[0].split(' ')[0];
      var champString = parts[1].trim();
      var position = positionNameMap[positionName];
      var champProcessor = createChampProcessor(tier, position);

      tiers[tier][position] = [];
      champString.split(',').forEach(champProcessor);
    };
  }

  function createChampProcessor(tier, position) {
    return function(champ) {
      var name = champ;
      var qualifierIndex = champ.indexOf('(');

      if (qualifierIndex != -1) {
        name = champ.slice(0, qualifierIndex);
      }

      name = name.trim().replace(/^_/, '');

      if (!name) {
        return;
      }

      name = misspellings[name] || name;
      tiers[tier][position].push(name);
    };
  }

  jsdom.env(html, ['http://code.jquery.com/jquery.js'], function(errors, window) {
    var start = 'The Tier List';
    var end = 'Instructions and Caveats';
    var all = window.$('body').text();
    var text = all.substring(all.indexOf(start) + start.length, all.indexOf(end)).trim();
    var tierTexts = text.split('\n\n');

    tierTexts.forEach(processTier);

    fs.writeFileSync(saveToFilename + '.js', 'module.exports = ' + JSON.stringify(tiers));
  });

});
