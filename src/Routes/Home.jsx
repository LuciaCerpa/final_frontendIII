import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state: {dentists} } = useContextGlobal();
  return (
    <main className='animate__animated animate__fadeIn'>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
          ))}
      </div>
    </main>
  )
}

export default Home