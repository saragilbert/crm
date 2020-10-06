import React from 'react'
import ReactDOM from 'react-dom'
import Customers from './components/Customers'
import Folders from './components/Folders'


const App = () => {

  return (
    <div>
      <h1>Saran ikioma huippu-CRM</h1>
      <h2>Aasiakkaat</h2>
      <Customers />
      <h2>Folders</h2>
      <Folders />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)