export interface paymentDetails {
  type: string;
  creditCardNumber: string;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
}

export const paymentInfo: paymentDetails = {
  type: 'Credit Card',
  creditCardNumber: '1234-5678-9012-3456',
  expirationDate: '10/2028',
  cvv: '123',
  cardHolderName: 'John Doe',
};

export const invalidPaymentInfo: paymentDetails = {
  type: 'Credit Card',
  creditCardNumber: '1234567890123456',
  expirationDate: '22/2028',
  cvv: '123',
  cardHolderName: 'John Doe',
};