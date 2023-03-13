/**
 * Format a number with comma on thousand separator and no decimals
 *
 * @param x number
 *
 * @return string
 */
export function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
