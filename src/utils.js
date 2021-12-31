export const currencyFormatter = ({ currency, amount }) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency }).format(amount)
