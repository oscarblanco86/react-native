import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const  lastOperation = useRef<Operator>();

    useEffect(() => {
      if (lastOperation.current) {
        const firstFormulaPart = formula.split(' ').at(0);
        setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
      } else {
        setFormula(number)
      }
    }, [number])
    
    useEffect(() => {
        const subResult = equalOperation()
        setPrevNumber(`${subResult}`)
    },[formula])

    const buildNumber = (numberString: string) => {
        console.log({numberString, number});
        //Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString  === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') setNumber(number + numberString);
        //     if (numberString ==='0' && number.includes('.')) setNumber(number + numberString );
            if (numberString != '0' && !number.includes('.')) setNumber(numberString);
            if(number === '0' && !number.includes(',')) return;
        };
        setNumber(number + numberString);
        // console.log({number});
    };
    const clearNumber = () => {
        setNumber('0')
        setPrevNumber('0');
        setFormula('0');
    };
    const toggleSign = () => {
        if (number.includes('-')) return setNumber(number.replace('-', ''));
        setNumber('-' + number);
    }
    const deleteNumber = () => {
        if (number.length === 2 && number.includes('-')) return setNumber('0');
        if (number.length === 1) return setNumber('0');
        setNumber(number.slice(0,-1))
    };
    const setLastNumber = () => {
        if (number.endsWith('.'))  setPrevNumber(number.slice(0,-1))
        setPrevNumber(number)
        setNumber('0')
        
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide 
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply 
    }
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract 
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add 
    }
    const equalOperation = () => {
        const [ firstValue, operation, secondValue] = formula.split(' ')
        const num1 = Number(firstValue)
        const num2 = Number(secondValue)

        if ( isNaN(num2)) return num1;

        switch(operation) {
            case Operator.add:
                return num1 + num2
            case Operator.subtract:
                return num1 - num2
            case Operator.divide:
                return num1 / num2
            case Operator.multiply:
                return num1 * num2
            case Operator.add:
                return num1 + num2
            default:
                throw new Error(`Operation ${ operation } not implemented`)
        }
    }
    const equalResult = () => {
        const result = String(equalOperation())
        lastOperation.current = undefined
        setPrevNumber('0')
        setFormula(result)
        return
    }
    return {
        // props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clearNumber,
        toggleSign,
        deleteNumber,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        equalOperation,
        equalResult
    }
}