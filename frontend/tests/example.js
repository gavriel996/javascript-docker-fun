import { Selector } from 'testcafe';

const emailInput = Selector('input[id=email][type=email]');
const passwordInput = Selector('input[id=password][type=password]');
const submitButton = Selector('button[type=submit]');

const loginButton = Selector('button[href=login.html][id=loginButton]');
// const loginButton = Selector('button[type=login_button]');

// const loginButton = Selector('#login_button');  // suppose to get by the id
// const loginButton = Selector('button').withAttribute('id','login')


fixture('Check localhost login')
    .page('http://localhost:5000/login.html');

test('Functionality test for login', async t => {
    await t
        .typeText(emailInput, 'ricardo@gmail.com')
        .typeText(passwordInput, '1234')
        .click(submitButton)
        // .expect(Selector('html').textContent).contains('Error occurred');
        
});

// test('Check for valid response', async t => {
//     await t
//         .typeText(emailInput, 'ricardo@gmail.com')
//         .typeText(passwordInput, '1234')
//         .click(loginButton)
//         .expect(Selector('html').textContent).contains('variable_y=5');
        
// });

//npm install -g testcafe
// testcafe chrome tests/test_cafe_local.js