import "./App.css"
import chef from "./images/chef.jpg"

let lang = "React";
let atom = "⚛️";

const items = [
  "Mac and Cheese",
  "California Rolls",
  "Taco Salad",
  "Tofu Stir Fry"
]

const dishObjs = items.map(dish, i => ({id: i, title: dish}))

function Main({dishes}){
  return(
    <>
    <h2>Welcome to this beautiful restaurant!</h2>
    <img src={chef} alt="A photo of a smiling chef owner" />
    height={200}
    <ul>
      {dishes.map(dish => <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>)}
    </ul>
    </>
  )
}

function Header({name, year}){
  return(
  <>
    <h1>{name}'s Kitchen</h1>
    <p>Copyright {year}</p>
  </>
  )
}

export default function App() {
  return(
    <>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes={dishObjs}/>
        <h6>
          {`Hello, from ${lang} ${atom}`}!!    
        </h6>
    </>
  )
}