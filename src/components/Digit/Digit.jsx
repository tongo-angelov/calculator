const Digit = ({ digit, dot = false, sign = false }) => {
    return (
        <div className="digit">
            {sign &&
                <div className="digit digit-bgr">
                    <span className="digit-inactive">8.</span>
                </div>
            }
            <span className='digit-active'>{digit}</span>
            <span className={dot ? 'digit-active' : 'digit-inactive'}>.</span>
        </div>
    );
};

export default Digit;
