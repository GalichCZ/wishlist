export const formatToPrice = (number: number, currency: string) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number)
}
