import './styles.css'
import LogoPNG from './assets/logo.png'
import LogoSVG from './assets/logo.svg'
import { Counter } from './components/Counter'

export const App = () => {
  const callApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <h1>Hello, World!</h1>
      <img src={LogoPNG} height={'200px'} width={'200px'} alt="" />
      <img src={LogoSVG} height={'200px'} width={'200px'} alt="" />
      <p>Mode: {process.env.NODE_ENV}</p>
      <Counter />
      <button onClick={callApi}>Call API</button>
    </>
  )
}
