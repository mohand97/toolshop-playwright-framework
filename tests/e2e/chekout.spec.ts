import { test, expect } from '../../fixtures/Fixtures';
import {existingUser} from '../../data/users'

test.describe('Panier', {tag :'@smoke'},() => {


test.beforeEach(async ({ homePage }) => {
    await homePage.goTo('/');
  });


test('Ajouter un produit au panier', async ({ page,homePage,productDetailPage,cartPage }) => {
    
    
    await homePage.expectProductGridIsDisplayed()
    await homePage.goToProductDetails('Pliers')
 
    await productDetailPage.addTocart()
    await productDetailPage.goToCart()
    await cartPage.expectProductIsVisibleInCart()
  
});


test('Le prix du panier correspond a la fiche', async ({ page,homePage,productDetailPage,cartPage }) => {
    
    
    await homePage.expectProductGridIsDisplayed()
    await homePage.goToProductDetails('Pliers')
    const productPrice = await productDetailPage.getProductPrice()
    await productDetailPage.addTocart()
    await productDetailPage.goToCart()
   
    const cartPrice = await cartPage.getProductCartPrice()
  
    expect(cartPrice).toEqual(productPrice)
  
    

  
});

test('le total égale prix × quantité', async ({ page,homePage,productDetailPage,cartPage }) => {
    
    
    await homePage.expectProductGridIsDisplayed()
    await homePage.goToProductDetails('Pliers')
    const productPrice = await productDetailPage.getProductPrice()
    await productDetailPage.fillQuantityManually('3')
    const quantity = await productDetailPage.getquantity()
    console.log('Quantité saisie :', quantity);
    await productDetailPage.addTocart()
    await productDetailPage.goToCart()
   
    //const cartPrice = await cartPage.getProductCartPrice()
    const cartTotalPrice = await cartPage.getCartTotalPrice()
    expect(cartTotalPrice).toEqual(productPrice * quantity)
    
});

test('modifier la quantité dans le panier tool met à jour le total', async ({ page,homePage,productDetailPage,cartPage }) => {
    
    
    await homePage.expectProductGridIsDisplayed()
    await homePage.goToProductDetails('Pliers')
    const productPrice = await productDetailPage.getProductPrice()
    await productDetailPage.fillQuantityManually('1')

    await productDetailPage.addTocart()
    await productDetailPage.goToCart() 
    await cartPage.modifyCartQuantity('3')
    await expect(page.getByText('Product quantity updated')).toBeVisible();

    const cartQuantity = await cartPage.getCartQuantity()
    console.log('Quantité saisie :', cartQuantity);
    await expect(cartPage.cartTotalPrice).toBeVisible();
    const cartTotalPrice = await cartPage.getCartTotalPrice()
    expect(cartTotalPrice).toEqual(productPrice * cartQuantity)

    //await cartPage.removeProduct('Pliers')
   // await expect(cartPage.productCart).toHaveCount(0)
    
});

test.skip('Supprimer un produit du panier', async ({ page,homePage,productDetailPage,cartPage }) => {
    
    
    await homePage.expectProductGridIsDisplayed()
    await homePage.goToProductDetails('Pliers')
    await productDetailPage.fillQuantityManually('1')

    await productDetailPage.addTocart()
    await productDetailPage.goToCart() 
    await expect(page).toHaveURL(/checkout/)


    await cartPage.removeProduct('Pliers')
    await expect(page.getByText('The cart is empty. Nothing to display.')).toBeVisible();
    
});


test.afterEach(async ({ page , cartPage }) => {
    
    await cartPage.removeProduct('Pliers')
    await expect(page.getByText('The cart is empty. Nothing to display.')).toBeVisible();
  });

});