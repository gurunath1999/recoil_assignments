import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import Main1 from './assignment1/components/Main1'
import Main2 from '../assignment2/Main2'

function App() {
  return(
    <RecoilRoot>
     {/* <Main1></Main1> */}
      <Main2></Main2>
    </RecoilRoot>
  )
}

export default App
