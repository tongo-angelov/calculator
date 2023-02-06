const Button = ({ label, width = 1, sign = false, special = false, onClick }) => {
    return (
        <div className="panel-button" style={{ flex: width }}>
            <button className={`${sign && "panel-sign"} ${special && "panel-special"}`} style={{ flex: width }} onClick={() => onClick(label)} > {label}</button>
        </div>
    );
};

export default Button;
