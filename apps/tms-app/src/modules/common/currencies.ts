export const currencies = [
  'USD',
  'EUR',
  'GBP',
] as const;
export type Currency = (typeof currencies)[number];

export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};