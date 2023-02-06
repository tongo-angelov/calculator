import Button from "../Button/Button";

const Panel = ({ onClick }) => {
    return (
        <div className="panel">
            <div className="panel-row">
                <Button onClick={onClick} label='CE' sign />
                <Button onClick={onClick} label='/' sign />
                <Button onClick={onClick} label='X' sign />
                <Button onClick={onClick} label='+/-' sign />
            </div>
            <div className="panel-row">
                <Button onClick={onClick} label='7' />
                <Button onClick={onClick} label='8' />
                <Button onClick={onClick} label='9' />
                <Button onClick={onClick} label='C' sign />
            </div>
            <div className="panel-row">
                <Button onClick={onClick} label='4' />
                <Button onClick={onClick} label='5' />
                <Button onClick={onClick} label='6' />
                <Button onClick={onClick} label='-' sign />
            </div>
            <div className="panel-row">
                <Button onClick={onClick} label='1' />
                <Button onClick={onClick} label='2' />
                <Button onClick={onClick} label='3' />
                <Button onClick={onClick} label='+' sign />
            </div>
            <div className="panel-row">
                <Button onClick={onClick} label='0' width={2} />
                <Button onClick={onClick} label='.' />
                <Button onClick={onClick} label='=' width={2} special />
            </div>
        </div>
    );
};

export default Panel;
