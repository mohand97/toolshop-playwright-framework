import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


type Fixtures = {
  homePage: HomePage;
  productDetailPage : ProductDetailPage
  loginPage: LoginPage
  cartPage: CartPage
  checkoutPage: CheckoutPage
 
};


export const test = base.extend<Fixtures>({
  
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);  
    await use(homePage);
  },

   productDetailPage: async ({ page }, use) => {
    const productDetailPage = new ProductDetailPage(page);  
    await use(productDetailPage);
  },


  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);  
    await use(loginPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);  
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);  
    await use(checkoutPage);
  }

})


export { expect } from '@playwright/test';