import { useState } from 'react';
import '../CSS/calculator.css';
import * as math from 'mathjs';

const Calculator = () => {
    const [result, setResult] = useState('');

    function calculate() {

        try {
            const evaluatedResult = math.evaluate(result);
            setResult(evaluatedResult.toString());
        } catch (error) {
            setResult('Error');
        }
    }
    function display(val) {
        if (val === 'sqrt') {

            try {
                const number = math.evaluate(result);
                const sqrtResult = Math.sqrt(number).toFixed(5);
                setResult(`${sqrtResult}`);
            } catch (error) {
                setResult('Error');
            }
        } else if (val === 'cbrt') {

            try {
                const number = math.evaluate(result);
                const cbrtResult = Math.cbrt(number).toFixed(5);
                setResult(`${cbrtResult}`);
            } catch (error) {
                setResult('Error');
            }
        } 
        else if (val === 'sin' || val === 'cos' || val === 'tan') {
            // Handle trigonometric functions separately
            try {
                const number = math.evaluate(result);
                const trigResult = math[val](number * (Math.PI / 180)).toFixed(5);
                setResult(` ${trigResult}`);
            } catch (error) {
                setResult('Error');
            }
        } else if (val === '%') {
            
            try {
                const number = math.evaluate(result);
                const percentResult = (number / 100).toFixed(5);
                setResult(` ${percentResult}`);
            } catch (error) {
                setResult('Error');
            }
        }else {
            setResult((prevResult) => prevResult + val);
        }
    }
    function clearResult() {
        setResult('');
    }

    return (
        <>
            <div className="main-body">
                <div className="calc-body m-auto">

                    <div className="calc-screen">

                        <input type="text" id="calc-typed" value={result} />
                    </div>

                    <div className="calc-button-row" >

                        <button className="ac" value="clr" onClick={clearResult}>AC</button>
                        <button className="opt" value="sqrt" onClick={() => display('sqrt')}>√</button>
                        <button className="opt" value="cbrt" onClick={() => display('cbrt')}>∛</button>
                        <button className="opt" value="/" onClick={() => display('/')}>÷</button>

                        <button className="opt" value="sin" onClick={() => display('sin')}>Sin</button>
                        <button className="opt" value="cos" onClick={() => display('cos')}>Cos</button>
                        <button className="opt" value="tan" onClick={() => display('tan')}>Tan</button>
                        <button className="opt" value="%" onClick={() => display('%')}>%</button>


                        <button value="7" onClick={() => display('7')}>7</button>
                        <button value="8" onClick={() => display('8')}>8</button>
                        <button value="9" onClick={() => display('9')}>9</button>
                        <button className="opt" value="*" onClick={() => display('*')}>×</button>
                        <button value="4" onClick={() => display('4')}>4</button>
                        <button value="5" onClick={() => display('5')}>5</button>
                        <button value="6" onClick={() => display('6')}>6</button>
                        <button className="opt" value="-" onClick={() => display('-')}>-</button>
                        <button value="1" onClick={() => display('1')}>1</button>
                        <button value="2" onClick={() => display('2')}>2</button>
                        <button value="3" onClick={() => display('3')}>3</button>
                        <button className="opt" value="+" onClick={() => display('+')}>+</button>
                        <button value="0" onClick={() => display('0')}>0</button>
                        <button value="00" onClick={() => display('00')}>00</button>
                        <button value="." onClick={() => display('.')}>.</button>
                        <button className="opt" onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;
