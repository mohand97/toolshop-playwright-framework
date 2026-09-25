// import { test, expect } from '../../fixtures/Fixtures';
// import { ProductDetailPage } from '../../pages/ProductDetailPage';
// import {HandToolsChildren ,PowerToolsChildren,sortOptions} from '../../data/categories'
// import {quantityCases} from '../../data/quantity'

// test.describe('Product Overview ', {tag :'@smoke'},() => {


// test('AC1 AC2 Grid & Products card information are displayed', async ({ page, homePage,productDetailPage }) => {

//   await homePage.goTo('/')
//   await homePage.expectProductGridIsDisplayed()
//   await homePage.expectEachProductHasImageNameAndPrice()
 
// });

// test('AC3 Navigating to product detail', async ({ page, homePage,productDetailPage }) => {

//   await homePage.goTo('/')
//   await homePage.goToProductDetails('Long Nose Pliers')
//   await productDetailPage.expectProductName('Long Nose Pliers')
  
// });
// });


// test.describe('Product Detail ', {tag :'@smoke'},() => {


// test('AC1 — La page détail s/affiche', async ({ page, homePage,productDetailPage }) => {

//   await homePage.goTo('/')
//   await homePage.goToProductDetails('Long Nose Pliers')
//   await productDetailPage.expectProductName('Long Nose Pliers')
 
// });

// test('AC2 — Les informations affichées', async ({ page, homePage,productDetailPage }) => {
//   await homePage.goTo('/')
//   await homePage.goToProductDetails('Long Nose Pliers')
//   await productDetailPage.expectProductDetailsDisplayed()
  
  
// });


// test('AC3 — Produits liés', async ({ page, homePage,productDetailPage }) => {

//   await homePage.goTo('/')
//   await homePage.goToProductDetails('Long Nose Pliers')
//   await productDetailPage.expectRelatedProducts()
//   await productDetailPage.goToRelatedProducts(1)
//   await expect(page.getByTestId('product-name')).toBeVisible()
  
// });
// });


// test.describe('Browse Products by Category ', {tag :'@smoke'},() => {


// test('cocher une catégorie met à jour la grille', async ({ page, homePage,productDetailPage }) => {

// await homePage.goTo('/')
// const before= await homePage.getProductsName()
// await homePage.FilterBycategorie('Power Tools')
// await expect(page.getByTestId('product-name').first()).not.toHaveText(before[0]);

// const after = await homePage.getProductsName()
// expect(after).not.toEqual(before)

//   });


// test('Pagination is displayed', async ({ page, homePage,productDetailPage }) => {

// await homePage.goTo('/')
// const Page1Products = await homePage.getProductsName()
// await homePage.clickOnPageNumber(2)
// await homePage.expectProductGridIsDisplayed()
// const Page2Products = await homePage.getProductsName()

// expect(Page2Products).not.toEqual(Page1Products)



//   });

//   test('AC4 Search un prouit et vérifier laffichage des bons produits ', async ({ page, homePage,productDetailPage }) => {
//   await homePage.goTo('/')
//   await homePage.searchProduct('wrench')
//   await expect(page.getByTestId('product-name').first()).toContainText('wrench', { ignoreCase: true })
//   const products= await homePage.getProductsName()
//   expect(products.length).toBeGreaterThan(0)
//   for (const product of products){
//     expect(product.toLowerCase()).toContain('wrench');
//   }
 
// });

//   test('recherche sans résultat n\'affiche aucun produit ', async ({ page, homePage,productDetailPage }) => {

//   await homePage.goTo('/')
//   await homePage.searchProduct('dgsgs')
//   await homePage.expectNoProductDisplayed()

// });

//   test('cocher le parent coche tous les enfants ', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.FilterBycategorie('Power Tools')
//    await homePage.expectChildrenAreChecked(PowerToolsChildren)

// });

//   test('décocher tous les enfants décoche le parent ', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.FilterBycategorie('Power Tools')
//    await homePage.uncheckChildren(PowerToolsChildren)
//     expect(page.getByLabel('Power Tools')).not.toBeChecked()
   

// });
//   test('cocher une marque met a jour la grille', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    const before = await homePage.getProductsName()
//    await homePage.FilterBycategorie('ForgeFlex Tools')

//    await expect(page.getByTestId('product-name').first()).not.toHaveText(before[0])
  
//    const after = await homePage.getProductsName()
//    expect (after).not.toEqual(before)

// });

//   test('cocher une marque et une categorie met a jour la grille', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    const before = await homePage.getProductsName()
//    await homePage.FilterBycategorie('ForgeFlex Tools')
//    await homePage.FilterBycategorie('Hand Tools')
//    await expect(page.getByTestId('product-name').first()).not.toHaveText(before[0])
  
//    const after = await homePage.getProductsName()
//    expect (after).not.toEqual(before)

// });


// test.describe('Trier les articles  ', {tag :'@smoke'},() => {


//   test('Trier de A à Z', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    const product = await homePage.getProductsName()
  
//    await homePage.sortBy(sortOptions.nameAsc)
//    await expect(page.getByTestId('product-name')).not.toHaveText(product)

//    const names = await homePage.getProductsName()
//    const sortedNames = [...names].sort()
//    expect(names).toEqual(sortedNames)
   

// });

// test('Trier de Z à A', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    const product = await homePage.getProductsName()

//    await homePage.sortBy(sortOptions.nameDesc)
//    await expect(page.getByTestId('product-name')).not.toHaveText(product)
   
//    const names = await homePage.getProductsName()
//    const sortedNames = [...names].sort().reverse()

//    expect(names).toEqual(sortedNames)

// });

// test('Trier par prix décroissant', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')

//    const product = await homePage.getProductsName()
//    await homePage.sortBy(sortOptions.priceDesc)

//    await expect(page.getByTestId('product-name')).not.toHaveText(product)

//    const priceText = await page.getByTestId('product-price').allInnerTexts()

//    const prices = priceText.map(t => Number(t.replace(/[^0-9.]/g, '')));
//    const sortedPrices = [...prices].sort((a,b) =>b-a)
  
//    expect (prices).toEqual(sortedPrices)
// // });


// test('Trier par prix Croissant', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    const product = await homePage.getProductsName()
//    await homePage.sortBy(sortOptions.priceAsc)

//     await expect(page.getByTestId('product-name')).not.toHaveText(product)

//    const priceText = await page.getByTestId('product-price').allInnerTexts()

//    const prices = priceText.map(t => Number(t.replace(/[^0-9.]/g, '')));
//    const sortedPrices = [...prices].sort((a,b) =>a-b)

//    expect (prices).toEqual(sortedPrices)
// });



// test('Le slide des prix affiche la plage par défaut', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectSliderIsVisible()
  
// });

// test('Quantity selector ', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.goToProductDetails('Combination Pliers')
//    await productDetailPage.expectQuantitySelectorIsVisible()
//    await productDetailPage.expectQuantityValue('1')
  
// });

// test('increase & decrease Quantity', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.goToProductDetails('Combination Pliers')
//    await productDetailPage.expectQuantityValue('1')
//    //increase quantity
//    await productDetailPage.IncreaseQuantity()
//    await productDetailPage.expectQuantityValue('2')
//    //decrease quantity
//    await productDetailPage.decreaseQuantity()
//    await productDetailPage.expectQuantityValue('1')
  
// });



// test('Vérifier la quatite minimum est egale a 1', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.goToProductDetails('Combination Pliers')
//    await productDetailPage.expectQuantityValue('1')
  
//    //decrease quantity
//    await productDetailPage.decreaseQuantity()
//    await productDetailPage.expectQuantityValue('1')
  
// });

 

// test('saisir des quantité manuellement avec differentes valeurs', async ({ page, homePage,productDetailPage }) => {

//   for (const quantity of quantityCases){
//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.goToProductDetails('Combination Pliers')
//    await productDetailPage.expectQuantitySelectorIsVisible()
  
//     await productDetailPage.fillQuantityManually(quantity.saisie)
//     await productDetailPage.expectQuantityValue(quantity.attendu)
//   }
// });

 

// test('dépasser 99 affiche un avertissement', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.goToProductDetails('Combination Pliers')
   

//   // vérifier le message d'avertissement
//     await expect(page.getByText('You can order at most 99 of this product')).toBeVisible()

  
//   await productDetailPage.fillQuantityManually('100')
// });

// test('Ajouter un produit au panier', async ({ page, homePage,productDetailPage }) => {

//    await homePage.goTo('/')
//    await homePage.expectProductGridIsDisplayed()
//    await homePage.goToProductDetails('Combination Pliers')
//    const quantity = '2'
   
//    await productDetailPage.fillQuantityManually(quantity)
//    await productDetailPage.expectQuantityValue(quantity)
//    await productDetailPage.addTocart()
//    await expect(page.getByText('Product added to shopping cart.')).toBeVisible()



  
  
// });








// });

// });