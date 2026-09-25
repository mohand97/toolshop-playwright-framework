import { test, expect } from '../fixtures/Fixtures';
import {existingUser} from '../data/users'

test.describe(' Connexion ', {tag :'@smoke'},() => {

     test.beforeEach(async ({ homePage }) => {
    await homePage.goTo('/');
    await homePage.goToSignInPage();
  });

test('Se conencter avec des identifiants valides', async ({ page, loginPage }) => {
    await loginPage.login(existingUser.email, existingUser.password)
    await expect(page).toHaveURL(/.*account/)
    await expect(loginPage.loggedInMessage).toBeVisible()

});

test('Se conencter avec des identifiants invalides', async ({ page,  loginPage }) => {
    
    await loginPage.login(existingUser.email, "12345")
    await expect(page.getByText('Invalid email or password')).toBeVisible()

});

test('Saisie d/un format email et MDP incorrect', async ({ page,  loginPage }) => {
    
    await loginPage.login("test@test.", "12")
    await expect(page.getByText('Email format is invalid')).toBeVisible()
    await expect(page.getByText('Password length is invalid')).toBeVisible()
});


test('Champs email et mot de passe vide', async ({ page, loginPage }) => {
   
    await loginPage.login("", "")
    await expect(page.getByText("Email is required")).toBeVisible()
    await expect(page.getByText('Password is required')).toBeVisible()
   
});

test('Compte bloqué aprés plusieurs tentatives', async ({ page, loginPage,request }) => {

    const email = `lock${Date.now()}@test.com`;  

const res = await request.post(`${process.env.API_URL}/users/register`, 
    { data: {email, password: 'ValidPass123!', first_name: 'John', last_name: 'Doe'} });

 for (let i = 0; i < 6; i++) {
    await loginPage.login(email, 'mauvais');  
  }

  // 3. vérifier le verrouillage
  await expect(page.getByText('Account locked, too many failed attempts. Please contact the administrator.')).toBeVisible();

});





});

