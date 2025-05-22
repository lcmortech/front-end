import {useEffect, useReducer} from 'react'
import './App.css'
import chef from './images/chef.jpg'

//let lang = "React";
//let atom = "⚛️";

const items = [
  'Mac and Cheese',
  'California Rolls',
  'Taco Salad',
  'Tofu Stir Fry'
]

const dishObjs = items.map((dish, i) => ({id: i, title: dish}))

function Header({ name, year }){
  return(
  <header>
    <h1>{name}'s Kitchen</h1>
    <p>Copyright {year}</p>
  </header>
  )
}

function Main({ dishes, openStatus, onStatus }){
  return (
    <main>
      <div><button onClick={()=> onStatus(true)}>I want to be open</button></div>
      <h2>Welcome to this beautiful restaurant! {openStatus ? 'Open' : 'Closed'}</h2>
      <img src={chef} height={200} alt='A photo of a smiling chef owner' />
      <ul>
        {dishes.map(dish =>(
          <li key={dish.id} style={{listStyleType: 'none'}}>{dish.title}</li>
          ))}
      </ul>
    </main>
  )
}



export default function App() {
  //const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer(status => !status, true)

  useEffect(()=>{
    console.log(`The restaurant is ${status? "open": "closed"}`)
  },[])//dependency array. can also pass specific state to track

  return (
    <div>
      <h1>The restaurant is currently {status ? 'open' : 'closed'}.</h1>
      <button onClick={toggle}>{status? 'Open': 'Close'} Restaurant</button>
      <Header name='Alex' year={new Date().getFullYear()}/>
      <Main 
        dishes={dishObjs} 
        openStatus={status} 
        onStatus={toggle}/>
        {/* <h6>{`Hello, from ${lang} ${atom}`}!!    </h6> */}
    </div>
  )
}