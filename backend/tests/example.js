import { Selector } from 'testcafe';

fixture('Check localhost certain route')
    .page('http://localhost:3000/hoisting');

test('Check for valid response', async t => {
    await t
        .expect(Selector('html').textContent).contains('variable_y=5');
        
});

//npm install -g testcafe
// testcafe chrome tests/test_cafe_local.js