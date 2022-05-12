import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'honyanya')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, honyanya!');
});
