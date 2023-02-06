export const op = {
    add: '+',
    sub: '-',
    mul: 'x',
    div: '/',
    res: '='
};

export const calculate = (a, b, o) => {
    console.log('a: ', a, ' b: ', b, ' o: ', o);

    let result = 0;

    if (o === op.add)
        result = a + b;

    else if (o === op.sub)
        result = a - b;

    else if (o === op.mul)
        result = a * b;

    else if (o === op.div)
        result = b === 0 ? 0 : a / b;

    const display = result.toString();
    if (display.length > 11 && display.includes('.')) {
        const num = display.split('.')[0];

        result = Number(result.toFixed(10 - num.length));
    }
    return result;
};
