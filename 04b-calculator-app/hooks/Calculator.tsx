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
        setFormula(number);
    },[number])
    const buildNumber = (numberString: string) => {
        console.log({numberString, number});
        //Verificar si ya existe el punto decimal
        if (number.includes('.') numberStrin&& g === '.') return;
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
    // const toggleSign = (num) => {

    // }
    const deleteNumber = () => setNumber(number.slice(0,1));
    return {
        // props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clearNumber,
        deleteNumber
    }
}