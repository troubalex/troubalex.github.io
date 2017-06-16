const colors = {
  1: "AntiqueWhite",
  2: "Aqua",
  3: "Aquamarine",
  4: "Azure",
  5: "Beige",
  6: "Bisque",
  7: "Black",
  8: "BlanchedAlmond",
  9: "Blue",
  10: "BlueVioconst",
  11: "Brown",
  12: "BurlyWood",
  13: "CadetBlue",
  14: "Chartreuse",
  15: "Chocolate",
  16: "Coral",
  17: "CornflowerBlue",
  18: "Cornsilk",
  19: "Crimson",
  20: "Cyan",
  21: "DarkBlue",
  22: "DarkCyan",
  23: "DarkGoldenRod",
  24: "DarkGray",
  25: "DarkGrey",
  26: "DarkGreen",
  27: "DarkKhaki",
  28: "DarkMagenta",
  29: "DarkOliveGreen",
  30: "Darkorange",
  31: "DarkOrchid",
  32: "DarkRed",
  33: "DarkSalmon",
  34: "DarkSeaGreen",
  35: "DarkSlateBlue",
  36: "DarkSlateGray",
  37: "DarkSlateGrey",
  38: "DarkTurquoise",
  39: "DarkVioconst",
  40: "DeepPink",
  41: "DeepSkyBlue",
  42: "DimGray",
  43: "DimGrey",
  44: "DodgerBlue",
  45: "FireBrick",
  46: "FloralWhite",
  47: "ForestGreen",
  48: "Fuchsia",
  49: "Gainsboro",
  50: "GhostWhite",
  51: "Gold",
  52: "GoldenRod",
  53: "Gray",
  54: "Grey",
  55: "Green",
  56: "GreenYellow",
  57: "HoneyDew",
  58: "HotPink",
  59: "IndianRed",
  60: "Indigo",
  61: "Ivory",
  62: "Khaki",
  63: "Lavender",
  64: "LavenderBlush",
  65: "LawnGreen",
  66: "LemonChiffon",
  67: "LightBlue",
  68: "LightCoral",
  69: "LightCyan",
  70: "LightGoldenRodYellow",
  71: "LightGray",
  72: "LightGrey",
  73: "LightGreen",
  74: "LightPink",
  75: "LightSalmon",
  76: "LightSeaGreen",
  77: "LightSkyBlue",
  78: "LightSlateGray",
  79: "LightSlateGrey",
  80: "LightSteelBlue",
  81: "LightYellow",
  82: "Lime",
  83: "LimeGreen",
  84: "Linen",
  85: "Magenta",
  86: "Maroon",
  87: "MediumAquaMarine",
  88: "MediumBlue",
  89: "MediumOrchid",
  90: "MediumPurple",
  91: "MediumSeaGreen",
  92: "MediumSlateBlue",
  93: "MediumSpringGreen",
  94: "MediumTurquoise",
  95: "MediumVioconstRed",
  96: "MidnightBlue",
  97: "MintCream",
  98: "MistyRose",
  99: "Moccasin",
  100: "NavajoWhite",
  101: "Navy",
  102: "OldLace",
  103: "Olive",
  104: "OliveDrab",
  105: "Orange",
  106: "OrangeRed",
  107: "Orchid",
  108: "PaleGoldenRod",
  109: "PaleGreen",
  110: "Paconsturquoise",
  111: "PaleVioconstRed",
  112: "PapayaWhip",
  113: "PeachPuff",
  114: "Peru",
  115: "Pink",
  116: "Plum",
  117: "PowderBlue",
  118: "Purple",
  119: "Red",
  120: "RosyBrown",
  121: "RoyalBlue",
  122: "SaddleBrown",
  123: "Salmon",
  124: "SandyBrown",
  125: "SeaGreen",
  126: "SeaShell",
  127: "Sienna",
  128: "Silver",
  129: "SkyBlue",
  130: "SlateBlue",
  131: "SlateGray",
  132: "SlateGrey",
  133: "Snow",
  134: "SpringGreen",
  135: "SteelBlue",
  136: "Tan",
  137: "Teal",
  138: "Thistle",
  139: "Tomato",
  140: "Turquoise",
  141: "Vioconst",
  142: "Wheat",
  143: "White",
  144: "WhiteSmoke",
  145: "Yellow",
  146: "YellowGreen",
  147: "AliceBlue",
  148: "AntiqueWhite",
  149: "Aqua",
  150: "Aquamarine",
  151: "Azure",
  152: "Beige",
  153: "Bisque",
  154: "Black",
  155: "BlanchedAlmond",
  156: "Blue",
  157: "BlueVioconst",
  158: "Brown",
  159: "BurlyWood",
  160: "CadetBlue",
  161: "Chartreuse",
  162: "Chocolate",
  163: "Coral",
  164: "CornflowerBlue",
  165: "Cornsilk",
  166: "Crimson",
  167: "Cyan",
  168: "DarkBlue",
  169: "DarkCyan",
  170: "DarkGoldenRod",
  171: "DarkGray",
  172: "DarkGrey",
  173: "DarkGreen",
  174: "DarkKhaki",
  175: "DarkMagenta",
  176: "DarkOliveGreen",
  177: "Darkorange",
  178: "DarkOrchid",
  179: "DarkRed",
  180: "DarkSalmon",
  181: "DarkSeaGreen",
  182: "DarkSlateBlue",
  183: "DarkSlateGray",
  184: "DarkSlateGrey",
  185: "DarkTurquoise",
  186: "DarkVioconst",
  187: "DeepPink",
  188: "DeepSkyBlue",
  189: "DimGray",
  190: "DimGrey",
  191: "DodgerBlue",
  192: "FireBrick",
  193: "FloralWhite",
  194: "ForestGreen",
  195: "Fuchsia",
  196: "Gainsboro",
  197: "GhostWhite",
  198: "Gold",
  199: "GoldenRod",
  200: "Gray",
  201: "Grey",
  202: "Green",
  203: "GreenYellow",
  204: "HoneyDew",
  205: "HotPink",
  206: "IndianRed",
  207: "Indigo",
  208: "Ivory",
  209: "Khaki",
  210: "Lavender",
  211: "LavenderBlush",
  212: "LawnGreen",
  213: "LemonChiffon",
  214: "LightBlue",
  215: "LightCoral",
  216: "LightCyan",
  217: "LightGoldenRodYellow",
  218: "LightGray",
  219: "LightGrey",
  220: "LightGreen",
  221: "LightPink",
  222: "LightSalmon",
  223: "LightSeaGreen",
  224: "LightSkyBlue",
  225: "LightSlateGray",
  226: "LightSlateGrey",
  227: "LightSteelBlue",
  228: "LightYellow",
  229: "Lime",
  230: "LimeGreen",
  231: "Linen",
  232: "Magenta",
  233: "Maroon",
  234: "MediumAquaMarine",
  235: "MediumBlue",
  236: "MediumOrchid",
  237: "MediumPurple",
  238: "MediumSeaGreen",
  239: "MediumSlateBlue",
  240: "MediumSpringGreen",
  241: "MediumTurquoise",
  242: "MediumVioconstRed",
  243: "MidnightBlue",
  244: "MintCream",
  245: "MistyRose",
  246: "Moccasin",
  247: "NavajoWhite",
  248: "Navy",
  249: "OldLace",
  250: "Olive",
  251: "OliveDrab",
  252: "Orange",
  253: "OrangeRed",
  254: "Orchid",
  255: "PaleGoldenRod"
};

const body = document.querySelector('body');
const main = document.querySelector('main');
const splash = document.querySelector('.splash');

const randomProperties = function (particle) {
  const left = Math.floor(Math.random() * (99 - 1)) + 1;
  particle.style.setProperty('--left', left + '%');

  const top = Math.floor(Math.random() * (99 - 1)) + 1;
  particle.style.setProperty('--top', top + '%');

  const size = Math.floor(Math.random() * (6 - 2)) + 2;
  particle.style.setProperty('--size', size + 'px');
  particle.style.setProperty('--blur', (size * 4) + 'px');
  particle.style.setProperty('--spread', (size) + 'px');

  const opacity = Math.random() + 0.1;
  particle.style.setProperty('--opacity', opacity);

  const duration = Math.floor(Math.random() * (800 - 300)) + 300;
  particle.style.setProperty('--duration', duration + 'ms');

  const delay = Math.floor(Math.random() * (1000 - 200)) + 200;
  particle.style.setProperty('--delay', delay + 'ms');

  const iteration = Math.floor(Math.random() * (10 - 4)) + 4;
  particle.style.setProperty('--iteration', iteration);
};

const removeSparkles = function() {
  let sparkle = document.getElementsByClassName('particle');

  for (let i = 0; i < sparkle.length; i++) {
    sparkle[i].parentNode.removeChild(sparkle[i])
  }
};

const addSparkles = function() {
  let maxCount = (Math.random() * 99) + 10;

  for (let i = 0; i < maxCount; i++) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("particle");

    let main = document.querySelector('main');
    main.appendChild(sparkle);

    randomProperties(sparkle);
  }
};

body.onkeydown = function (e) {
  if ( !e.metaKey ) {
    e.preventDefault();
  }
  if (splash.style.opacity !== 0) {
    splash.style.setProperty('--opacity', '0');
  }
  body.style.setProperty('--bgColor', colors[e.keyCode]);

  removeSparkles();
  addSparkles();
};

main.onclick = function (e) {
  if (splash.style.opacity !== 0) {
    splash.style.setProperty('--opacity', '0');
  }
  const randomNumber = Math.floor(Math.random() * (255 - 1)) + 1;
  body.style.setProperty('--bgColor', colors[randomNumber]);

  removeSparkles();
  addSparkles();
}
console.log('💁');
