import { useState } from 'react';
//Here We Save The Fighters Elly Jaw ALTeam
function App() {

  const [team, setTeam] = useState([]);
  // Budget Malt AlTeam
  const [bgt, setbgt] = useState(100);

  const [fighters, setFighters] = useState([
    { id: 1, name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png' },
    { id: 2, name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png' },
    { id: 3, name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png' },
    { id: 4, name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png' },
    { id: 5, name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png' },
    { id: 6, name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png' },
    { id: 7, name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png' },
    { id: 8, name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png' },
    { id: 9, name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png' },
    { id: 10, name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png' },
  ]);


  //  Func ifState If the bgt Allow
  const addFighter = (fighter) => {
    if (bgt >= fighter.price) {
      setTeam([...team, fighter]); //Add in the Team
      setbgt(bgt - fighter.price); //rm from Bug
      setFighters(fighters.filter(f => f.id !== fighter.id));  //rm From the List
    } else {
      alert("you don't have any money!!");
    }
  };
  

  //Func rm Fighter & Take the Pri Back
  const rmFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id)); // rm From the Team
    setbgt(bgt + fighter.price); //Pri Back
    setFighters([...fighters, fighter]); //rm to Fighters Ava
  };

  //Total Power Team
  const totalStats = team.reduce((acc, f) => {
    acc.strength += f.strength;
    acc.agility += f.agility;
    return acc;
  }, { strength: 0, agility: 0 });

  return (
    <div>
      <h1>Zombie Defense Team</h1>
      <h2>bgt: ${bgt}</h2>
      
      <h2>Available Fighters</h2>
      <ul>
        {fighters.map(fighter => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} width="100" />
            <p>{fighter.name} - ${fighter.price}</p>
            <p>Strength: {fighter.strength} | Agility: {fighter.agility}</p>
            <button onClick={() => addFighter(fighter)}>Recruit</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length === 0 ? <p>No team members selected.</p> : (
        <ul>
          {team.map(fighter => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} width="100" />
              <p>{fighter.name} - ${fighter.price}</p>
              <p>Strength: {fighter.strength} | Agility: {fighter.agility}</p>
              <button onClick={() => rmFighter(fighter)}>Dismiss</button>
            </li>
          ))}
        </ul>
      )}
      
      <h2>Team Stats</h2>
      <p>Total Strength: {totalStats.strength}</p>
      <p>Total Agility: {totalStats.agility}</p>
    </div>
  );
}

export default App;
