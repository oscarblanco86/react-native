export const BasicFunctions = () => {
    const addTwoNumbers = (a:number, b:number): string => {
        return `${a + b}`;
    }
    
  return (
    <>
    <h3>Funciones</h3>
    <span>El resultado de sumar 2 + 8 = { addTwoNumbers(2,8) }</span>
    </>
  )
}
