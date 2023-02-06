import Digit from "../Digit/Digit";

const Display = ({ data, op }) => {
    let display = new Array(12).fill([]);

    const digits = data.split('').reverse();

    const filtered = digits.filter(digit => digit !== '.');

    if ((filtered.length > 10 && data > 0) || (filtered.length > 11 && data < 0))
        display = ("OUT OF RANGE").split('');

    else {
        filtered.forEach((digit, index) => {
            display[index] = digits[index] === '.' ? [digit, true] : [digit, false];
        });

        display.reverse();

        // if (data < 0)
        //     display[1] = '-';

        if (op)
            display[0] = op;
    }

    return (
        <div className="display">
            {display.map((sector, index) => (
                <Digit key={index} digit={sector[0]} dot={sector[1]} sign={index !== 0} />
            ))}
        </div>
    );
};

export default Display;