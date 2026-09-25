import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly emailInput: Locator;
    readonly passwordInput: Locator
    readonly logInButton: Locator;
    readonly loggedInMessage: Locator;
  
  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByPlaceholder('Your email')
    this.passwordInput = page.getByPlaceholder('Your password')
    this.logInButton = page.getByRole('button', { name: 'Login' })
    this.loggedInMessage = page.getByRole('heading', { name: 'My account' })

  }


async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.logInButton.click()
  }

}

