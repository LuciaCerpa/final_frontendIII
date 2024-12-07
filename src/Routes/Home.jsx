import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state: {cards} } = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {cards.map((card, index) => {
          <div key={index}>
            <Card card={card}/>
          </div>
        })}
      </div>
    </main>
  )
}

export default Home