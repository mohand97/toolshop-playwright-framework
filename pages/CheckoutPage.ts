import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { BillingAddress } from '../data/adresses';
import { paymentDetails } from '../data/payment';

export class CheckoutPage extends BasePage {
   readonly country: Locator;
   readonly postalCode: Locator;
   readonly houseNumber: Locator;
   readonly street: Locator;
   readonly city: Locator;
   readonly state : Locator;
   readonly proceedToPayment : Locator;
   readonly header : Locator;
   readonly paymentOption : Locator;
   readonly cardNumber : Locator;
   readonly cardExpiry : Locator;
   readonly cvv : Locator;
   readonly cardHolder : Locator;
   readonly confirmBtn : Locator;
   readonly processToCheckoutBtn : Locator;
 
  
 

  constructor(page: Page) {
    super(page);
    this.country = page.getByTestId('country')
    this.postalCode = page.getByTestId('postal_code')
    this.houseNumber = page.getByTestId('house_number')
    this.street = page.getByTestId('street')
    this.city = page.getByTestId('city')
    this.state = page.getByTestId('state')
    this.proceedToPayment = page.getByRole('button', { name: 'Proceed to checkout' });
    this.header = page.getByRole('heading', { name: 'Billing Address' });
    this.processToCheckoutBtn = page.getByRole('button', { name: 'Proceed to checkout' });
    
    // paiement option
    this.paymentOption = page.getByTestId('payment-method');
    this.cardNumber = page.getByTestId('credit_card_number');
    this.cardExpiry = page.getByTestId('expiration_date');
    this.cvv = page.getByTestId('cvv');
    this.cardHolder = page.getByTestId('card_holder_name');
    this.confirmBtn = page.getByRole('button', { name: 'Confirm' });

  }


  async fillBillingAddress(address: BillingAddress): Promise<void> {   
    await this.country.selectOption(address.country);
    await this.postalCode.fill(address.postalCode);
    await this.houseNumber.fill(address.houseNumber);
    await this.street.fill(address.street);
    await this.city.fill(address.city);
    await this.state.fill(address.state);
    await this.proceedToPayment.click();
  }

  async ProceedToPayment(): Promise<void> {
    await this.proceedToPayment.click();
  }

  async fillPaymentDetails(payment :paymentDetails): Promise<void> {
    await this.paymentOption.selectOption(payment.type);
    await this.cardNumber.fill(payment.creditCardNumber);
    await this.cardExpiry.fill(payment.expirationDate);
    await this.cvv.fill(payment.cvv);
    await this.cardHolder.fill(payment.cardHolderName);
    

  }

  async confirmPayment(): Promise<void> {
    await this.confirmBtn.click();
  }

  async processToCheckout(): Promise<void> {
    await this.processToCheckoutBtn.click();
  }








}