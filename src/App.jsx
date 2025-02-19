import { useState } from 'react'
import ZombieFighters from './components/ZombieFighters'
import ShowTeam from './components/ShowTeam'
import './App.css'

const App = () => {

  const [teams, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://images.pexels.com/photos/27673375/pexels-photo-27673375/free-photo-of-a-cat-with-green-eyes-is-laying-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://images.pexels.com/photos/13445514/pexels-photo-13445514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://images.pexels.com/photos/4468793/pexels-photo-4468793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://images.pexels.com/photos/1754909/pexels-photo-1754909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://images.pexels.com/photos/2930204/pexels-photo-2930204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://images.pexels.com/photos/3257811/pexels-photo-3257811.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ])

const handleAddFighter = (fighter) => {
  {money < fighter.price ? console.log('Not enough money!') : ''}
  {money > fighter.price ? setMoney(money - fighter.price) : money}
  {money > fighter.price ? setTeam([...teams, fighter]) : [...teams]}
  {money > fighter.price ? setTotalStrength(totalStrength + fighter.strength) : totalStrength}
  {money > fighter.price ? setTotalAgility(totalAgility + fighter.agility) : totalStrength}
}

const handleRemoveFighter = (fighter) => {
  setMoney(money + fighter.price)
  setTotalStrength(totalStrength - fighter.strength)
  setTotalAgility(totalAgility - fighter.agility)

  const filteredFighters = teams.filter((team) => {
    return team.name !== fighter.name
  });
  setTeam(filteredFighters)
}

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>ᓚ₍ ^. ̫ .^₎</h2>
      <h2 style={{color : 'red'}}>Money: ${money}</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team agility: {totalAgility}</h3>
      <h3>Team</h3>
      {teams.length === 0 ? <p>Pick some team members!</p> : ''}
      
      <ul>
        {teams.map((fighter) => (
          <li>
            <ShowTeam
            img = {fighter.img}
            name = {fighter.name}
            strength = {fighter.strength}
            agility = {fighter.agility}
            price = {fighter.price}
            />
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))}
      </ul>

      <hr />

        <ul>
          {zombieFighters.map((fighter) => (
            <li>
                <ZombieFighters 
                img = {fighter.img}
                name = {fighter.name}
                strength = {fighter.strength}
                agility = {fighter.agility}
                price = {fighter.price}
                />
                <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
    </>
  );
}

export default App