import assert from 'assert/strict';
import KeywordMarker from '../src/main.js';

describe('KeywordMarkder', function() {

	it("Marking", function(done) {
		this.timeout(60*1000);

		assert.equal(
			KeywordMarker('Includes "KEYWORD" inside.', 'keyword'),
			'Includes &quot;<mark>KEYWORD</mark>&quot; inside.'
		);

		assert.equal(
			KeywordMarker('abc def Foo hoge bar fuga foo.', 'foo bar'),
			'abc def <mark>Foo</mark> hoge <mark>bar</mark> fuga <mark>foo</mark>.'
		);

		assert.equal(
			KeywordMarker('abc def Foo hoge bar fugafugafugafugafuga foo hogehogehoge.', 'foo bar', {
				sideLength: 3,
			}),
			'...ef <mark>Foo</mark> hoge <mark>bar</mark> fu...ga <mark>foo</mark> ho...'
		);

		done();
	});

});
