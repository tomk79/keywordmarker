# @tomk79/keywordmarker

Add markers to keywords in a text.

## Installation

```bash
npm install @tomk79/keywordmarker
```

## Usage

```js
import KeywordMarker from '@tomk79/keywordmarker';

const result = KeywordMarker('Includes "KEYWORD" inside.', 'keyword');
    // You'll get a HTML `Includes &quot;<mark>KEYWORD</mark>&quot; inside.` as result.
```


## Options

```js
import KeywordMarker from '@tomk79/keywordmarker';

const result = KeywordMarker('Includes "KEYWORD" inside.', 'keyword', {
    // The `maxLength` option sets an upper limit on the number of characters in the returned text.
    // Default to 120.
    maxLength: 120,

    // The `sideLength` option sets the maximum number of characters for the text between keywords.
    // Default to 15.
    sideLength: 15,
});
```



## Change log

### @tomk79/keywordmarker v1.0.0 (リリース日未定)

- Initial release.


## License

MIT License


## Author

- Tomoya Koyanagi <tomk79@gmail.com>
- website: <https://www.pxt.jp/>
- Twitter: @tomk79 <https://twitter.com/tomk79/>
