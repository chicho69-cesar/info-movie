export const dateFormat = date => {
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    let [year, month, day] = date.split('-');
    return `${day} de ${months[month - 1]} del ${year}`;
}

export const moneyFormat = money => {
    return money.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
}