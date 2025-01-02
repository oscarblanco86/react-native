interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
    country: string;
    houseNo: string;
    street?: string;
}
export const ObjectLiterals = () => {
    const person: Person = {
        age: 38,
        firstName: 'Oscar',
        lastName: 'Blanco',
        address: {
            country: 'Honduras',
            houseNo: '666'
        }
    }
        
    return (
        <>
            <h3>Objectos literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
