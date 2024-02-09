import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { io } from 'socket.io-client'


function App() {

  const socket = io("http://127.0.0.1:3000")

  socket.on("connect",()=>{
    console.log("connection successful")
    console.log(socket.id)
    socket.emit("salutations","Hello World, I was written by Jules")

  })

  socket.on("message",(message)=>{
    console.log(`message received: ${message}`)
    setMessage(message)
  })

  socket.on("disconnect",()=>{
    console.log("disconnected")
  })

  const [message,setMessage] =  useState();

  return (
      <div>
        <h2>Message:</h2>
        <h1>{{message}}</h1>
      </div>
    );
  }

export default App
