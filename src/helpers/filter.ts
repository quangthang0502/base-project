export function formatPercent(value: number): string {
  if (typeof value !== 'number') return '0.00%'
  return value.toFixed(2) + '%'
}
