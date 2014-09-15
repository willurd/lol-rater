var _ = require('underscore');
var sprintf = require('sprintf').sprintf;
var tiers = require('./tiers');
var champions = require('./champions');

var ratingType = 'positions';
var tierOrder = ['god', '1', '2', '3', '4'];

var points = {
  goodness: {
    'god': 781,
    '1': 156,
    '2': 31,
    '3': 6,
    '4': 1
  },
  versatility: {
    'god': 8,
    '1': 7,
    '2': 6,
    '3': 5,
    '4': 4
  },
  positions: {
    'god': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1
  }
};

var scores = {};

function eachPositionChampion(fn) {
  tierOrder.forEach(function(tier) {
    for (var position in tiers[tier]) {
      var champs = tiers[tier][position];
      for (var i = 0, len = champs.length; i < len; i++) {
        if (fn(tier, position, champs[i]) === false) {
          break;
        }
      }
    }
  });
}

function eachPosition(champ, fn) {
  eachPositionChampion(function(tier, position, posChamp) {
    if (posChamp === champ) {
      fn(tier, position);
      return false;
    }
  });
}

function championPositions(champ) {
  var positions = [];

  eachPosition(champ, function(tier, position) {
    if (!positions.length || positions[positions.length - 1][0] !== tier) {
      positions.push([tier, []]);
    }

    positions[positions.length - 1][1].push(position);
  });

  return positions;
}

champions.forEach(function(champ) {
  var score = 0;

  eachPosition(champ, function(tier, position) {
    score += points[ratingType][tier];
  });

  scores[champ] = score;
});

var pairs = _.pairs(scores).sort(function(a, b) {
  if (a[1] > b[1]) {
    return -1;
  } else if (a[1] < b[1]) {
    return 1;
  } else {
    return 0;
  }
});

console.log(pairs.map(function(p) {
  var positions = championPositions(p[0]);
  var result = '';

  result += sprintf('%-20s', p[0]);
  result += sprintf('%10d', p[1]);
  result += ' (' + positions.map(function(pos) {
    return pos[0] + ': ' + pos[1].join('/');
  }).join(', ') + ')';

  return result;
  // return p[0] + ': ' + p[1] + ' (' + positions.map(function(pos) {
  //   return pos[0] + ': ' + pos[1].join('/');
  // }).join(', ') + ')';
}).join('\n'));
