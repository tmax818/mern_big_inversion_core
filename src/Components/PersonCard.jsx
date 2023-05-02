export const PersonCard = ({firstName, lastName, age, hairColor}) => {
    return (
        <>
        <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </>
    )
}