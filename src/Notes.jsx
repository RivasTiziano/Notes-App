export const Notes = ({day, description, important})=>{

    return (
        <div>
            <h3>{day}</h3>
            <p>{description}</p>
            <p>{important}</p>
        </div>
    )
}