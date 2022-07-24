export const getTotalPrice = (cart, selectedCurrency) => {
    const totalPrice = Object.entries(cart).reduce((total, curr) => {
        const price = curr[1].item.prices.find(
            (i) => i.currency === selectedCurrency
        );
        total += curr[1].count * price.amount;
        return total;
    }, 0);
    return Math.round(totalPrice * 100) / 100;
};