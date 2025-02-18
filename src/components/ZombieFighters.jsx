import './ZombieFighters.css'

const zombieFighters = (props) => {
    return (
        <>
            <img className="images" src={props.img} alt="" />
            {props.name}
            {props.strength}
            {props.agility}
            {props.price}
        </>
    )
}

export default zombieFighters