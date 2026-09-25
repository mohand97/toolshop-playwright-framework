import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
   readonly productCart: Locator;
   readonly unitPrice: Locator;
   readonly cartTotalPrice: Locator;
   readonly cartQuantity: Locator;
   readonly CheckoutButton: Locator;
 

  constructor(page: Page) {
    super(page);
    this.productCart = page.getByTestId('product-title')
    this.unitPrice = page.getByTestId('product-price')
    this.cartQuantity = page.getByTestId('product-quantity')
    this.cartTotalPrice = page.getByTestId('cart-total')
    this.CheckoutButton = page.getByRole('button', { name: 'Proceed to checkout' });
  }

async expectProductInCart(): Promise<Number> {
 return await this.productCart.count()

}

async getProductCartPrice(): Promise<number> {
 const priceText = await this.unitPrice.innerText();
 return Number(priceText.replace(/[^0-9.]/g, ''));

}


async getCartTotalPrice(): Promise<number> {
    const priceText = await this.page.getByTestId('line-price').innerText();
    return Number(priceText.replace(/[^0-9.]/g, ''));
  }

  async expectProductIsVisibleInCart(): Promise<void> {
    await expect(this.productCart).toBeVisible();
  }

  async getCartQuantity(): Promise<number> {
  const value = await this.cartQuantity.inputValue();
  return Number(value);   // string → number

}
  async modifyCartQuantity(quantity: string): Promise<void> {
    await this.cartQuantity.fill(quantity);
    await this.cartQuantity.press('Enter');
  }


  async removeProduct(productName: string): Promise<void> {
  const row = this.page.getByRole('row', { name: new RegExp(productName) });
  await row.locator('a.btn-danger').click();   // le bouton supprimer DANS la ligne
}

async goToCheckout(): Promise<void> {
    await this.CheckoutButton.click();
  }

}