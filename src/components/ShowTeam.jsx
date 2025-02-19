import './ShowTeam.css'

const ShowTeam = (props) => {
    return (
        <>
            <img className="images" src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>Strength: {props.strength}</p>
            <p>Agility: {props.agility}</p>
            <p style={{ color : 'red'}}>Price: ${props.price}</p>
        </>
    )
}

export default ShowTeam