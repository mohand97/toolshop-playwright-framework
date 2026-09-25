import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
  private readonly productName: Locator;
  private readonly unitPrice: Locator;
  private readonly productDescription: Locator;
  private readonly productImage: Locator;
  private readonly categoryBadge: Locator;
  private readonly brandBadge: Locator;
  private readonly ProduitConnexes: Locator;
  private readonly relatedProducts : Locator;
  private readonly IncreaseBtn : Locator;
  private readonly decreaseBtn : Locator;
   private readonly quantity : Locator;
   private readonly addToCartBtn : Locator;
   readonly cartLink: Locator;

  

  constructor(page: Page) {
    super(page);

    this.productName = page.getByTestId('product-name')
    this.unitPrice= page.getByTestId('unit-price')
    this.productDescription = page.getByTestId('product-description')
    this.productImage = page.locator('.card-img-wrapper img')
    this.categoryBadge= page.getByLabel('category')
    this.brandBadge =  page.getByLabel('brand')
    this.ProduitConnexes =page.getByRole('heading', { name: 'Produits connexes' })
    this.relatedProducts  = page.locator('a.card[href^="/product/"]')
    this.IncreaseBtn = page.getByTestId('increase-quantity')
    this.decreaseBtn = page.getByTestId('decrease-quantity')
    this.quantity = page.getByTestId('quantity')
    this.addToCartBtn = page.getByTestId('add-to-cart')
    this.cartLink = page.getByTestId('nav-cart')
    
  }


  async expectProductDetailsDisplayed(): Promise<void> {

    await expect(this.productName).toBeVisible()
    //await expect(this.productImage).toBeVisible()
    await expect(this.unitPrice).toBeVisible()
    await expect(this.productDescription).toBeVisible()
    await expect(this.categoryBadge).toBeVisible()
    await expect(this.brandBadge).toBeVisible()

}

async expectProductName(productName :string) : Promise<void> {
    await expect(this.productName).toHaveText(productName)
}

async expectRelatedProducts() : Promise<void> {
    //await expect(this.ProduitConnexes).toBeVisible()
    await expect(this.relatedProducts).toHaveCount(4)

}


async goToRelatedProducts(index:number) : Promise<void> {
   await this.relatedProducts.nth(index).click()

}

async expectQuantitySelectorIsVisible(){
    await expect (this.decreaseBtn).toBeVisible()
    await expect (this.IncreaseBtn).toBeVisible()
    await expect (this.quantity).toBeVisible()
}

async expectQuantityValue(value : string){
    await expect (this.quantity).toHaveValue(value)
}

async IncreaseQuantity(): Promise <void>{
    await this.IncreaseBtn.click()
}

async decreaseQuantity(): Promise <void>{
    await this.decreaseBtn.click()
}

async fillQuantityManually(quantity : string): Promise <void>{
    await this.quantity.fill(quantity)
}

async addTocart(): Promise <void>{
    await this.addToCartBtn.click()
}

async goToCart(): Promise <void>{
    await this.cartLink.click() 
}

async getProductPrice(): Promise<number> {
 const priceText = await this.unitPrice.innerText();
 return Number(priceText.replace(/[^0-9.]/g, ''));
}



// async getquantity(): Promise <number>{
//     const quantity = await this.quantity.innerText()
//     return Number(quantity)
// }

async getquantity(): Promise<number> {
  const value = await this.quantity.inputValue();
  return Number(value);   // string → number
}


}