import { useState } from 'react'
import ZombieFighters from './components/ZombieFighters'

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
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
  setTeam([...team, fighter])
}


  return (
    <>
      <h1>Zombie Fighters, Assemble!</h1>
      <h2>Money: ${money}</h2>
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