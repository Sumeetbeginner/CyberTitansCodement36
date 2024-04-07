import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home'
import Registration from './components/Authentication/Registration'
import Login from './components/Authentication/Login'
import Clubs from './components/Interaction/Clubs'
import LearnBoard from './components/Learnboard/LearnBoard'
import Roadmap from './components/Roadmap/Roadmap'
import Assessment from './components/Assessment/Assessment'
import QuizGame from './components/Home/QuizGame'
import CodingGame from './components/Home/CodingGame'
import CircuitSimulator from './components/Home/SimulationGame'
import Dashboard from './components/Dashboard/Dashboard'
import Institute from './components/Institute/Institute'
import  Labs  from './components/Labs/Labs'
import Terms from './components/Authentication/Terms'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/registration' Component={Registration} />
        <Route path='/login' Component={Login} />
        <Route path='/' Component={Home} />
        <Route path='/clubs' Component={Clubs} />
        <Route path="/learnboard/:type" Component={LearnBoard} />
        <Route path='/roadmap' Component={Roadmap}/>
        <Route  path="/assessment" Component={Assessment}/>
        <Route  path="/quizgame" Component={QuizGame}/>
        <Route  path="/codinggame" Component={CodingGame}/>
        <Route  path="/simulationgame" Component={CircuitSimulator}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/institute' Component={Institute}/>
        <Route path='/labs' Component={Labs}/>
        <Route path='/terms' Component={Terms}/>
      </Routes>
    </BrowserRouter>
  )
}
