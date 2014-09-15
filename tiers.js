var tiers = {
  // Most Beneficial Combination of Game Influence/Ease.
  // These champions are almost impossible to keep down. If your team doesn't make it a priority to shut down
  // these champions and shut them down hard, even if they lose their lane, lose in CS, and it's their first
  // time playing the champion, they can be a massive nuisance for your team. On the other hand, if they're
  // actually good at the champion...that's when it's time to throw in the towel.
  'god': {
    'top': [
      'Warwick', 'Swain', 'Fiora', 'Wukong'
    ],
    'jungle': [
      'Rammus', 'Amumu', 'Jarvan IV', 'Maokai', 'Warwick', 'Wukong', 'Fiddlesticks', 'Vi'
    ],
    'mid': [
      'Talon', 'Swain', 'Vel\'Koz'
    ],
    'adc': [
      'Tristana', 'Jinx', 'Lucian'
    ],
    'support': [
      'Morgana', 'Leona', 'Blitzcrank'
    ]
  },

  // Strong/Preferred Choices.
  // These champions generally do very well regardless, and have some sort of advantage over most other
  // champions. When they do well, their team does well. Even when they don't do well, their team still has a
  // good chance of a comeback victory by utilizing one or more aspects of their late game utility.
  '1': {
    'top': [
      'Rumble', 'Nidalee', 'Maokai', 'Heimerdinger', 'Lulu', 'Irelia', 'Akali', 'Ryze', 'Nasus', 'Malphite',
      'Jarvan IV', 'Tryndamere', 'Gnar', 'Yorick', 'Singed', 'Teemo', 'Lissandra', 'Pantheon', 'Kennen'
    ],
    'jungle': [
      'Kha\'Zix', 'Sejuani', 'Pantheon', 'Nunu'
    ],
    'mid': [
      'Katarina', 'Ahri', 'Fizz', 'Akali', 'Malzahar', 'Ziggs', 'Galio', 'Brand', 'Zyra', 'Lux', 'Xerath',
      'Syndra', 'Anivia', 'Morgana', 'Orianna', 'Heimerdinger', 'Zilean', 'Wukong'
    ],
    'adc': [
      'Draven', 'Miss Fortune', 'Caitlyn', 'Corki'
    ],
    'support': [
      'Janna', 'Sona', 'Nami', 'Braum', 'Zyra'
    ]
  },

  // Viable/Balanced Choices.
  // This is the Tier of balanced champions where Riot shoots to place their designs. These champions
  // generally do well in their own right, and are very strong picks with a good chance of winning. However,
  // they're not overpowered by any means and do have their weaknesses.
  '2': {
    'top': [
      'Yasuo', 'Riven', 'Volibear', 'Alistar', 'Rengar', 'Jax', 'Renekton', 'Dr. Mundo', 'Trundle', 'Darius',
      'Aatrox', 'Udyr', 'Karma', 'Lee Sin', 'Shyvana', 'Kayle', 'Cho\'Gath', 'Vladimir', 'Olaf', 'Gangplank',
      'Xin Zhao', 'Viktor', 'Poppy', 'Quinn', 'Vi', 'Jayce', 'Zed'
    ],
    'jungle': [
      'Nautilus', 'Skarner', 'Master Yi', 'Volibear', 'Udyr', 'Xin Zhao', 'Aatrox', 'Rengar', 'Evelynn',
      'Kayle', 'Jax', 'Shaco', 'Lee Sin', 'Cho\'Gath', 'Nocturne', 'Tryndamere', 'Olaf', 'Zac', 'Dr. Mundo',
      'Nasus', 'Leona', 'Trundle', 'Malphite', 'Diana', 'Zed'
    ],
    'mid': [
      'Twisted Fate', 'Cassiopeia', 'Diana', 'Lissandra', 'Pantheon', 'Lulu', 'Yasuo', 'Annie',
      'Viktor', 'Kayle', 'Karma', 'Zed', 'Fiora', 'Karthus', 'Kennen', 'Mordekaiser', 'Vladimir', 'Teemo',
      'Sion', 'Ryze', 'Jayce'
    ],
    'adc': [
      'Kog\'Maw', 'Vayne', 'Graves', 'Sivir', 'Ashe', 'Varus', 'Ezreal'
    ],
    'support': [
      'Thresh', 'Alistar', 'Lulu', 'Vel\'Koz', 'Xerath', 'Zilean', 'Annie', 'Karma', 'Taric', 'Fiddlesticks'
    ]
  },

  // Needs Higher Skill/Knowledge Than Usual.
  // These champions can still do very well, but tend to need a little more snowballing to get rolling. Even
  // if they get an early lead, it's still very possible to turn the tides on them with just a mistake or two.
  // They may also have some weaknesses that can be capitalized on.
  '3': {
    'top': [
      'Shen', 'Garen', 'Gragas', 'Kha\'Zix', 'Master Yi', 'Zac', 'Talon', 'Elise', 'Mordekaiser', 'Sion',
      'Vayne', 'Nunu', 'Galio'
    ],
    'jungle': [
      'Hecarim', 'Elise', 'Shyvana', 'Shen', 'Malzahar', 'Yasuo', 'Fiora', 'Riven', 'Poppy', 'Darius'
    ],
    'mid': [
      'Kassadin', 'Gragas', 'Veigar', 'LeBlanc', 'Nidalee', 'Kha\'Zix', 'Riven', 'Tristana', 'Cho\'Gath',
      'Fiddlesticks', 'Elise', 'Kog\'Maw', 'Ezreal'
    ],
    'adc': [
      'Quinn', 'Twitch', 'Twisted Fate', 'Kennen'
    ],
    'support': [
      'Volibear', 'Nautilus', 'Lux', 'Gragas', 'Maokai', 'Nunu', 'Kayle', 'Soraka', 'Teemo', 'Malphite',
      'Anivia', 'Syndra', 'Veigar', 'Gangplank'
    ]
  },

  // Low Benefits for Effort Used.
  // These champions are either underpowered or offer less reward than other champions for the same amount of
  // effort. These champions basically start winning from the get-go or get made fun of for the rest of the
  // game. They need gold to do their job correctly, and if they don't get enough of it, they become sandbags
  // for the enemy team to punch. Chances of a comeback with one of these champions feeding on your team is
  // almost none.
  '4': {
    'top': [
      'Soraka', 'Urgot'
    ],
    'jungle': [
      'Gangplank', 'Garen', 'Blitzcrank'
    ],
    'mid': [
      'Urgot', 'Soraka', 'Janna'
    ],
    'adc': [
      'Urgot'
    ],
    'support': [
      'Nidalee', 'Orianna', 'Poppy', 'Elise', 'Galio', 'Shen', 'Yorick', 'Lissandra', 'Ashe', 'LeBlanc'
    ]
  }
};

module.exports = tiers;
