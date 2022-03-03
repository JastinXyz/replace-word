module.exports = {
  toEmoji: function toEmoji(n) {
    if (!n) throw new Error("[replace-word] word required!");
    return n
      .toString()
      .toLowerCase()
      .replace(/0/g, "0️⃣")
      .replace(/1/g, "1️⃣")
      .replace(/2/g, "2️⃣")
      .replace(/3/g, "3️⃣")
      .replace(/4/g, "4️⃣")
      .replace(/5/g, "5️⃣")
      .replace(/6/g, "6️⃣")
      .replace(/7/g, "7️⃣")
      .replace(/8/g, "8️⃣")
      .replace(/9/g, "9️⃣")
      .replace(/a/g, "🇦 ")
      .replace(/b/g, "🇧 ")
      .replace(/c/g, "🇨 ")
      .replace(/d/g, "🇩 ")
      .replace(/e/g, "🇪 ")
      .replace(/f/g, "🇫 ")
      .replace(/g/g, "🇬 ")
      .replace(/h/g, "🇭 ")
      .replace(/i/g, "🇮 ")
      .replace(/j/g, "🇯 ")
      .replace(/k/g, "🇰 ")
      .replace(/l/g, "🇱 ")
      .replace(/m/g, "🇲 ")
      .replace(/n/g, "🇳 ")
      .replace(/o/g, "🇴 ")
      .replace(/p/g, "🇵 ")
      .replace(/q/g, "🇶 ")
      .replace(/r/g, "🇷 ")
      .replace(/s/g, "🇸 ")
      .replace(/t/g, "🇹 ")
      .replace(/u/g, "🇺 ")
      .replace(/v/g, "🇻 ")
      .replace(/w/g, "🇼 ")
      .replace(/x/g, "🇽 ")
      .replace(/y/g, "🇾 ")
      .replace(/z/g, "🇿 ")
      .replace(/#/g, "#️⃣")
      .replace(/!/g, "❗")
      .replace(/[*]/g, "*️⃣")
      .replace(/[?]/g, "❓");
  },
  hilih: function hilih(n) {
    if (!n) throw new Error("[replace-word] word required!");
    return n
      .toString()
      .replace(/[aiueo]/g, "i")
      .replace(/[AIUEO]/g, "I");
  },
  alay: function alay(n) {
    if (!n) throw new Error("[replace-word] word required!");
    return n
      .toString()
      .toLowerCase()
      .replace(/a/g, "4")
      .replace(/s/g, "5")
      .replace(/e/g, "3")
      .replace(/o/g, "0")
      .replace(/b/g, "8")
      .replace(/g/g, "9")
      .replace(/i/g, "1");
  },
  // lettero: function lettero(n) {
  //   for (let i of "aiueo"){
  //       if (n.endsWith(i)){
  //           return n
  //       }
  //   }
  // },
  clap: function clap(n) {
    if (!n) throw new Error("[replace-word] word required!");
    return n.toString().replace(/ /g, "👏");
  },
  space: function space(n, emo) {
    if (!n) throw new Error("[replace-word] word required!");
    if (!emo)
      throw new Error(
        "[replace-word] emoji or other something to be replaced required!"
      );

    // const regex = /\p{Extended_Pictographic}/ug
    // if(regex.test(emo) == false) throw new Error("[replace-word] is not a valid emoji, usage: <>.space('text', 'emoji')")

    return n.toString().replace(/ /g, emo);
  },
  owoify: function owoify(n) {
    if (!n) throw new Error("[replace-word] word required!");
    const starts = [
      "OWO",
      "OwO",
      "0w0",
      "<3",
      "UwU",
      "HIIII!",
      "H-hewwo??",
      "Huohhhh.",
    ];
    const ends = [
      "..",
      "fwendo",
      "Huoh.",
      "._.",
      ";-;",
      ";_;",
      "(；ω；)",
      "ÙωÙ",
      "UwU",
      "(人◕ω◕)",
      "(●´ω｀●)",
      "(✿ ♡‿♡)",
      "(◠‿◠✿)",
      "^-^",
      "^_^",
      ">_<",
      ">_>",
      ":P",
      ":3",
      ";3",
      "x3",
      ":D",
      "xD",
      "XDDD",
      "（＾ｖ＾）",
      "ㅇㅅㅇ",
      "(• o •)",
      "ʕ•̫͡•ʔ",
      "ʕʘ‿ʘʔ",
      "(　'◟ ')",
    ];
    const rand1 = starts[Math.floor(Math.random() * starts.length)];
    const rand2 = ends[Math.floor(Math.random() * ends.length)];

    const a = n
      .toString()
      .replace(/(l|r)/g, "w")
      .replace(/(L|R)/g, "W")
      .replace(/no/g, "nu")
      .replace(/(have|has)/g, "haz")
      .replace(/you/g, "uu")
      .replace(/n([aeiou])/g, "ny$1")
      .replace(/N([aeiou])|N([AEIOU])/g, "Ny$1")
      .replace(/ove/g, "uv")
      .replace(/nd(?= |$)/g, "ndo");

    return `${rand1} ${a} ${rand2}`;
  },
  aesthetic: function aesthetic(n) {
    if (!n) throw new Error("[replace-word] word required!");

    return n
      .toString()
      .replace(/A/, "Ａ")
      .replace(/B/, "Ｂ")
      .replace(/C/, "Ｃ")
      .replace(/D/, "Ｄ")
      .replace(/E/, "Ｅ")
      .replace(/F/, "Ｆ")
      .replace(/G/, "Ｇ")
      .replace(/H/, "Ｈ")
      .replace(/I/, "Ｉ")
      .replace(/J/, "Ｊ")
      .replace(/K/, "Ｋ")
      .replace(/L/, "Ｌ")
      .replace(/M/, "Ｍ")
      .replace(/N/, "Ｎ")
      .replace(/O/, "Ｏ")
      .replace(/P/, "Ｐ")
      .replace(/Q/, "Ｑ")
      .replace(/R/, "Ｒ")
      .replace(/S/, "Ｓ")
      .replace(/T/, "Ｔ")
      .replace(/U/, "Ｕ")
      .replace(/V/, "Ｖ")
      .replace(/W/, "Ｗ")
      .replace(/X/, "Ｘ")
      .replace(/Y/, "Ｙ")
      .replace(/Z/, "Ｚ")
      .replace(/a/, "ａ")
      .replace(/b/, "ｂ")
      .replace(/c/, "ｃ")
      .replace(/d/, "ｄ")
      .replace(/e/, "ｅ")
      .replace(/f/, "ｆ")
      .replace(/g/, "ｇ")
      .replace(/h/, "ｈ")
      .replace(/i/, "ｉ")
      .replace(/j/, "ｊ")
      .replace(/k/, "ｋ")
      .replace(/l/, "ｌ")
      .replace(/m/, "ｍ")
      .replace(/n/, "ｎ")
      .replace(/o/, "ｏ")
      .replace(/p/, "ｐ")
      .replace(/q/, "ｑ")
      .replace(/r/, "ｒ")
      .replace(/s/, "ｓ")
      .replace(/t/, "ｔ")
      .replace(/u/, "ｕ")
      .replace(/v/, "ｖ")
      .replace(/w/, "ｗ")
      .replace(/x/, "ｘ")
      .replace(/y/, "ｙ")
      .replace(/z/, "ｚ")
      .replace(/1/, "１")
      .replace(/2/, "２")
      .replace(/3/, "３")
      .replace(/4/, "４")
      .replace(/5/, "５")
      .replace(/6/, "６")
      .replace(/7/, "７")
      .replace(/8/, "８")
      .replace(/9/, "９")
      .replace(/0/, "０")
      .replace(/!/g, "！")
      .replace(/@/g, "＠")
      .replace(/#/g, "＃")
      .replace(/%/g, "％")
      .replace(/&/g, "＆")
      .replace(/[(]/g, "（")
      .replace(/[)]/g, "）")
      .replace(/-/g, "－")
      .replace(/_/g, "_")
      .replace(/[+]/g, "＋")
      .replace(/[?]/g, "？")
      .replace(/[*]/g, "＊")
      .replace(/[.]/g, "．")
      .replace(/=/g, "＝")
      .replace(/ /g, "  ")
  },
  emojipasta: function emojipasta(input, d, s) {
    if (!input) throw new Error("[replace-word] word required!");

    var emojiData = require("./tools/emojify/emoji-data.json");
    var constants_1 = require("./tools/emojify/constants");

    var __spreadArray =
      (this && this.__spreadArray) ||
      function (to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };

    var isInappropriate = function (str) {
      return constants_1.inappropriateEmojis.some(function (emoji) {
        return str.includes(emoji);
      });
    };

    var density = d;
    var shouldFilterEmojis = s;

    if (!density) {
      density = 100;
    } else {
      if (isNaN(density)) {
        throw new Error(
          "[replace-word] density in emojipasta must be a number!"
        );
      } else if (density > 100) {
        throw new Error("[replace-word] max density in emojipasta is 100!");
      } else if (density < 0) {
        throw new Error("[replace-word] min density in emojipasta is 0!");
      } else {
        density = d;
      }
    }

    // if(!shouldFilterEmojis) {
    //   shouldFilterEmojis = true;
    // } else {
    //   if(typeof shouldFilterEmojis == "boolean") {
    //     shouldFilterEmojis = shouldFilterEmojis
    //   } else {
    //     throw new Error("[replace-word] should Filter Emojis param in emojipasta must be boolean (true or false)!");
    //   }
    // }

    if (typeof s == "boolean" || !s) {
      shouldFilterEmojis = s;
    } else {
      throw new Error(
        "[replace-word] should Filter Emojis param in emojipasta must be boolean (true or false)!"
      );
    }

    var words = input.replace(/\n/g, " ").split(" ");
    var result = words
      .reduce(function (acc, wordRaw) {
        var word = wordRaw.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
        var accNext = "".concat(acc, " ").concat(wordRaw);
        var randomChoice = Math.random() * 100 <= density;
        var isTooCommon = constants_1.commonWords.has(word);
        var emojiFilter = shouldFilterEmojis
          ? function (option) {
              return !isInappropriate(option);
            }
          : function () {
              return true;
            };
        var emojiOptions = Object.entries(emojiData[word] || {})
          .filter(function (_a) {
            var option = _a[0];
            return emojiFilter(option);
          })
          .reduce(function (arr, _a) {
            var option = _a[0],
              frequency = _a[1];
            return __spreadArray(
              __spreadArray([], arr, true),
              __spreadArray([], Array(frequency), true).fill(option),
              true
            );
          }, []);
        if (isTooCommon || !randomChoice || emojiOptions.length === 0) {
          return accNext;
        }
        var emojis =
          emojiOptions[Math.floor(Math.random() * emojiOptions.length)];
        return "".concat(accNext, " ").concat(emojis);
      }, "")
      .trim();

    return result;
  },
  toMorse: function toMorse(n) {
    if (!n) throw new Error("[replace-word] word required!");

    return n
      .toString()
      .toLowerCase()
      .replace(/ /g, "  ")
      .replace(/[.]/g, ".-.-.- ")
      .replace(/a/g, ".- ")
      .replace(/b/g, "-... ")
      .replace(/c/g, "-.-. ")
      .replace(/d/g, "-.. ")
      .replace(/e/g, ". ")
      .replace(/f/g, "..-. ")
      .replace(/g/g, "--. ")
      .replace(/h/g, ".... ")
      .replace(/i/g, ".. ")
      .replace(/j/g, ".--- ")
      .replace(/k/g, "-.- ")
      .replace(/l/g, "-.- ")
      .replace(/m/g, "-- ")
      .replace(/n/g, "-- ")
      .replace(/o/g, "--- ")
      .replace(/p/g, ".--. ")
      .replace(/q/g, "--.- ")
      .replace(/r/g, ".-. ")
      .replace(/s/g, "... ")
      .replace(/t/g, "- ")
      .replace(/u/g, "..- ")
      .replace(/v/g, "...- ")
      .replace(/w/g, ".-- ")
      .replace(/x/g, "-..- ")
      .replace(/y/g, "-.-- ")
      .replace(/z/g, "--.. ")
      .replace(/1/g, ".- ")
      .replace(/2/g, "..- ")
      .replace(/3/g, "...- ")
      .replace(/4/g, "....- ")
      .replace(/5/g, "..... ")
      .replace(/6/g, "-.... ")
      .replace(/7/g, "-... ")
      .replace(/8/g, "-.. ")
      .replace(/9/g, "-.. ")
      .replace(/0/g, "- ")
      .replace(/,/g, "-..- ")
      .replace(/[?]/g, "..-.. ")
      .replace(/=/g, "-...- ");
  },
  toBinary: function toBinary(n) {
    if (!n) throw new Error("[replace-word] word required!");

    return unescape(encodeURIComponent(n))
      .split("")
      .map(function (txt) {
        let binary = txt.charCodeAt(0).toString(2);
        return "00000000".slice(binary.length) + binary;
      })
      .join(" ");
  },
  aestheticBrackets: function aestheticBrackets(n) {
    if (!n) throw new Error("[replace-word] word required!");

    return `【${module.exports.aesthetic(n)}】`
  }
};
