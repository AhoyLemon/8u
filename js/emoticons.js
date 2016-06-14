var sound = new Howl({
  urls: ['audio/frank.ogg', 'audio/frank.mp3'],
  volume: 1,
  sprite: {
    1: [450, 1100],
    2: [2000, 900],
    3: [4000, 1000],
    4: [5350, 1250],
    5: [6750, 1250],
    6: [8250, 600],
    7: [8850, 1300],
    8: [10100, 800],
    9: [11100, 1250],
    10: [12500, 1250],
    11: [15500, 2400],
    12: [18500, 550],
    13: [19000, 700],
    14: [19700, 1600],
    15: [22690, 1300],
    16: [24500, 1700],
    17: [26000, 1700],
    18: [27900, 1500],
    19: [29500, 1200],
    20: [31000, 2500],
    21: [33900, 1150],
    22: [35500, 1150],
    23: [37500, 8000],
    24: [45500, 1500],
    25: [47000, 5500],
    26: [52500, 1100],
    27: [53500, 1100],
    28: [56000, 1100],
    29: [57500, 490],
    30: [58000, 1200],
    31: [59500, 3000],
    32: [62600, 1600],
    33: [65000, 1500],
    34: [66500, 6500],
    35: [75500, 4000],
    50: [75500, 79500]
  },
  onend: function(butt, balls) {
    console.log(sound);
  }
});

/**
var buttons = [
  {
    type: "text",
    name: ":D",
    start: 450,
    duration: 1100
  },
  {
    type: "text",
    name: "._.",
    start: 2000,
    duration: 900
  },
  {
    type: "text",
    name: "O_O",
    start: 4000,
    duration: 1000
  },
  {
    type: "text",
    name: "ᕕ( ᐛ )ᕗ",
    start: 5350,
    duration: 1250
  },
  {
    type: "text",
    name: "ᕦ(° Д°)ᕤ",
    start: 6750,
    duration: 1250
  }
];

var sprites = {};
$.each(buttons, function(key,value) {
  var b = buttons[key];
  var o = { ''+b.name: [ b.start, b.duration] };
  console.log(o);
});
**/


$('button').click(function() {
  var n = $(this).attr('data-number');
  sound.play(n);
});