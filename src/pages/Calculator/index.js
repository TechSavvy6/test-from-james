import { useState } from "react";

import "./style.css";

const Calculator = function () {
    const [operandA, setOperandA] = useState(null);
    const [operandB, setOperandB] = useState(null);
    const [operator, setOperator] = useState("+");
    const [valueA, setValueA] = useState(null);
    const [valueB, setValueB] = useState(null);
    const [oper, setOper] = useState("+");
    const [result, setResult] = useState(null);

    function calculate() {
        setValueB(operandB);
        setOper(operator);
        const [a, b] = [parseInt(operandA), parseInt(operandB)];

        switch (operator) {
            case "*":
                setResult(a * b);
                break;
            case "/":
                setResult(a / b);
                break;
            case "-":
                setResult(a - b);
                break;
            default:
                setResult(a + b);
        }
    }

    return (
        <div className="container calc-board">
            <p className="title">
                Expression
                <br />
                Evaluator
            </p>
            <div className="box-operandA">
                <div className="row">
                    <div className="form-floating col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            id="input-operandA"
                            value={operandA ? operandA : ""}
                            onChange={(e) => setOperandA(e.target.value)}
                            placeholder="Please enter a numuber"
                        />
                        <label className="text-label" htmlFor="input-operandA">
                            Please enter a numuber
                        </label>
                    </div>
                    <div className="col-md-6">
                        <button
                            className="btn"
                            onClick={() => setValueA(operandA)}
                        >
                            Add number
                        </button>
                    </div>
                </div>
            </div>
            <div className="operandB">
                <div className="display-operation">
                    <div className="operation d-flex justify-content-center">
                        <div>{valueA}</div>
                        <div>{valueB}</div>
                        <div>{oper}</div>
                    </div>
                    <div className="symbol-equal">=</div>
                    <div className="display-result">{result ? result : ""}</div>
                </div>
            </div>
            <div className="box-operandB">
                <div className="row">
                    <div className="col-lg-4 col-6 form-floating">
                        <select
                            className="form-select"
                            onChange={(e) => setOperator(e.target.value)}
                            id="selectOperator"
                        >
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                        <label
                            className="operator-label"
                            htmlFor="selectOperator"
                        >
                            Operator
                        </label>
                    </div>
                    <div className="col-lg-4 col-6 form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="input-operandB"
                            value={operandB ? operandB : ""}
                            onChange={(e) => setOperandB(e.target.value)}
                            placeholder="Please enter a numuber"
                        />
                        <label className="text-label" htmlFor="input-operandB">
                            Operand
                        </label>
                    </div>
                    <div className="col-lg-4 col-12">
                        <button className="btn" onClick={calculate}>
                            Add Operation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
