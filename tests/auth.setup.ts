import { test as setup, expect } from '../fixtures/Fixtures';
import {existingUser} from '../data/users'

const authFile = 'playwright/.auth/user.json';   // où on sauve la session

setup('authenticate', async ({ page,homePage,loginPage}) => {
  // se connecter (une seule fois)
    await homePage.goTo('/');
    await homePage.goToSignInPage();
    await loginPage.login(existingUser.email, existingUser.password)

    await expect(loginPage.loggedInMessage).toBeVisible()

  // SAUVER la session dans le fichier
  await page.context().storageState({ path: authFile });
});