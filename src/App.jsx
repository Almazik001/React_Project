import { useState } from 'react'
import './App.scss'
import MyModal from './companent/MyModal'


function App() {

  const [modal, setModal] = useState(false)

  return (
    <div className='App'>
      <MyModal modal={modal} setModal={setModal}>
        <h1>222</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium sapiente maxime magnam repellendus incidunt illum quidem. Eos, eum tenetur ad rem illum aut ab delectus distinctio vitae. Tempora, beatae?</p>
      </MyModal>
    </div>
  )
}

export default App
