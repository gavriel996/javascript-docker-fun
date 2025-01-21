
fixture ('request');
// const results = await t.request('http://localhost:3000/api/login');
// await t
//         .expect(results.status).eql(200)
//         .expect(results.statusText).eql('OK')
//         .expect(results.headers).contains({ 'content-type': 'application/json; charset=utf-8' })
//         .expect(results.body.data).eql({
//             name:     'John Hearts',
//             position: 'CTO',
//         });

// test('Check for valid response', async t => {
//     await t
//         .expect(Selector('html').textContent).contains('variable_y=5');
        
// });

test ('test login for valid response', async t => {
    await t
        .expect(t.request.post({url: 'http://localhost:3000/api/login', body: {email: 'ricardo', password: '1234'}}).status).eql(400, 'Email or password is invalid credentials')
});



//npm install -g testcafe
// testcafe chrome tests/login_test.js
// testcafe chrome .\backend\tests\login-test.js

// concurrency
// testcafe chrome, firefox tests/test.js  --concurrency 3 // 6 instances total