// data/types.ts (ou dans data/address.ts)
export interface BillingAddress {
  country: string;
  postalCode: string;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
}

export const validAddress: BillingAddress = {
  country: 'Algeria',
  postalCode: '16000',
  houseNumber: '123',
  street: 'Main Street',
  city: 'Algiers',
  state: 'Algiers Province',
};