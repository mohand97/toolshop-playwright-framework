import { test, expect } from '../../fixtures/Fixtures';
import { BillingAddress, validAddress } from '../../data/adresses';
import { paymentDetails, paymentInfo, invalidPaymentInfo  } from '../../data/payment';


test.describe('Complete checkout', {tag :'@smoke'},() => {


test.beforeEach(async ({ page,homePage,productDetailPage, cartPage, checkoutPage }) => {
      
    // Navigate to the home page
    await page.goto('/');
    //expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
    await homePage.expectProductGridIsDisplayed();

    // Select a product and go to its details page
    await homePage.goToProductDetails('Pliers');
    expect(page).toHaveURL(/\/product\/\d+/); // Vérifie que l'URL contient /product/ suivi d'un ID numérique
    await productDetailPage.addTocart()
    await expect(page.getByText('Product added to shopping cart.')).toBeVisible();

    await productDetailPage.goToCart()

    await cartPage.expectProductInCart()
    await cartPage.goToCheckout()

    await expect(page).toHaveURL(/checkout/);
    await checkoutPage.processToCheckout()
  });



test('carte valide → paiement réussi', async ({ page, homePage,productDetailPage, cartPage, checkoutPage }) => { 


    await checkoutPage.fillBillingAddress(validAddress)
    await checkoutPage.fillPaymentDetails(paymentInfo)

    await checkoutPage.confirmPayment()

    await expect(page.getByText('Payment was successful')).toBeVisible();
    


})


test('Format carte invalide → Message d\'erreur', async ({ page,checkoutPage }) => { 


    await checkoutPage.fillBillingAddress(validAddress)
    await checkoutPage.fillPaymentDetails(invalidPaymentInfo)

    //await checkoutPage.confirmPayment()

    await expect(page.getByText('Invalid card number format.')).toBeVisible();
    await expect(page.getByText('Invalid date format. Use MM/YYYY.')).toBeVisible();
    
    


})
 });
