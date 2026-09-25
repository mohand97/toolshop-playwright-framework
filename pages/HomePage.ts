import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly productCards: Locator;
  private readonly filtred: Locator;
  private readonly productName: Locator;
  private readonly paginationGrid: Locator;
  private readonly searchField: Locator;
  private readonly searchButton: Locator;
  
  private readonly noResultFound: Locator;
    private readonly triOption: Locator;
    private readonly maxHandle: Locator;
    private readonly minHandle: Locator;
    readonly signIn : Locator;

  constructor(page: Page) {
    super(page);
    this.productCards = page.locator('a[data-test^="product-"]');
    this.filtred = page.getByTestId('filter_completed')

    this.paginationGrid = page.getByTestId('pagination-prev')
    this.productName = page.getByTestId('product-name')
    this.searchField = page.getByTestId('search-query')
    this.searchButton = page.getByRole('button', {name :'Search'})
    this.noResultFound = page.getByTestId('no-results')
    this.triOption = page.getByTestId('sort')
    this.maxHandle =  page.getByRole('slider', { name: 'ngx-slider-max', exact: true })
    this.minHandle =  page.getByRole('slider', { name: 'ngx-slider', exact: true })
    this.signIn = page.getByRole('link', { name: 'Sign In' });
  }





  async expectProductGridIsDisplayed(): Promise<void> {
    await expect(this.productCards.first()).toBeVisible();
  }


  async expectEachProductHasImageNameAndPrice(): Promise<void> {
    const productCount = await this.productCards.count();
    await expect (this.page.getByTestId('product-name')).toHaveCount(productCount)
    await expect (this.page.getByTestId('product-price')).toHaveCount(productCount)
    await expect (this.productCards.getByRole('img')).toHaveCount(productCount)

    }
  

async goToProductDetails(productName: string): Promise<void> {
  await this.productCards
    .filter({ has: this.page.getByText(productName, { exact: true }) })
    .click();
}

async FilterBycategorie(category :string): Promise<void> {
  await this.page.getByLabel(category).check()
}


async clickOnPageNumber(pageNumber : number): Promise<void> {
    await this.page.getByRole('button', { name: `Page-${pageNumber}` }).click()
}


async getProductsName (): Promise<string[]>{
    await expect(this.productName.first()).toBeVisible()
  return await this.productName.allInnerTexts()
}

async searchProduct(product :string): Promise<void> {
  await this.searchField.fill(product)
  await this.searchButton.click()
}

async expectNoProductDisplayed(): Promise<void> {
    await expect(this.productName).toHaveCount(0)
    await expect( this.noResultFound).toBeVisible()
 
}

async expectChildrenAreChecked(children : string[]){
    for (const child of children){
         await expect(this.page.getByLabel(child, { exact: true })).toBeChecked()

    } 
}

async uncheckChildren(children : string[]): Promise<void> {
    for (const child of children){
         await this.page.getByLabel(child, { exact: true }).uncheck()

    } 
}

async sortBy(option :string) :Promise<void> {
    //await this.triOption.click()
    await this.triOption.selectOption(option)
}

async expectSliderIsVisible(){

    await expect(this.maxHandle).toBeVisible()
    await expect(this.maxHandle).toHaveAttribute('aria-valuenow','100')
    await expect(this.maxHandle).toHaveAttribute('aria-valuemax','200')
    await expect(this.minHandle).toBeVisible()
    await expect(this.minHandle).toHaveAttribute('aria-valuenow','1')

}


async goToSignInPage(): Promise<void> {
    await this.signIn.click()
}


}