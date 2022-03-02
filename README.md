# replace-word

Just replace it.

Read the [Documentation](#documentation)

# Instalation
```cli
npm i replace-word
```

# Usage
```js
const replaceWord = require('replace-word');

const res = replaceWord.emojipasta('hello friend!!');
console.log(res); // result e.g: hello 👋 friend!! 😎
```

# Documentation
- `<replaceWord>.toemoji("word")` - Replace the inputted letters and numbers into emojis. Maybe there are some consoles that don't support number emoji if you use console.log

```js
replaceWord.toemoji('word') // 🇼 🇴 🇷 🇩
```

- `<replaceWord>.hilih("word")` - Replace vowels (A, I, U, E, O) to "i".

```js
replaceWord.hilih('word') // wird
```

- `<replaceWord>.alay("word")` - Alay text (Indonesian: Tulisan alay) is a form of the Indonesian language that has undergone "excessive leet transformation". Contrary to the popular belief that it is "destroying" the national language, grammatical standards are met in contrast to the modern Indonesian slang language.

  * `Replace "a" becomes "4", "s" becomes "5", "e" becomes "3", "o" becomes "0", "b" becomes "8", "g" becomes "9", " i" becomes "1".`

```js
replaceWord.alay('word') // w0rd
```

- `<replaceWord>.clap("word")` - Replace space to "👏"

```js
replaceWord.clap('hello world!') // hello👏world!
```

- `<replaceWord>.space("word", "emoji or something text")` - Replace the space into the input you wrote.

```js
replaceWord.space('hello world!', '😄') // hello😄world!
```

- `<replaceWord>.owoify("word")` - OWO Wepwace input to owoify text. ^_^

```js
replaceWord.owoify('hello world!') // OwO hewwo wowwd! (　'◟ ')
```

- `<replaceWord>.aesthetic("word")` - Replace input as fullwidth.

```js
replaceWord.aesthetic('word') // ｗｏｒｄ
```

- `<replaceWord>.emojipasta("word")` - I 💰👀 really 😏😏😏 really 🙌 want 🌛 to use 📤🏻 this function.

```js
replaceWord.emojipasta('word') // word 📝
```

<div align="center">
<h2>More Function Soon!</h2>
<p>This package will continue to be updated. If there is an idea 😅.</p>
</div>
