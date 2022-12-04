import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Materia = ({id,formateador}) => {
  const [laMateria,setLaMateria] = useState([])
  const hooks = () =>  {
    axios
    .get(`https://apiunpaz-production.up.railway.app/lgti/materias/${id}`)
    .then(response => {
      setLaMateria(response.data)
    })
    .catch(error => {
      console.log("Dato inexistente")
    })
  }
  useEffect(hooks, [])
  let listaCorrelativas = laMateria.correlativas;
  return(
    <div className="contenedorMateria">
      <h4>{laMateria.nombre}📚📒</h4>
      <h5>Carga horaria semanal: {laMateria.CargaSemanal} horas</h5>
      <h5>Carga horaria total: {laMateria.cargaTotal} horas</h5>
      <p><span>Temas de la materia: </span>{laMateria.temas}</p>
      <h5>Tipo de cursada: {laMateria.tipo}</h5>
      <button className="volverAbuscar" onClick={() => {formateador(0)}}> Volver a buscar</button>
    </div>
  )
}


const App = () => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(0)
  const [lista, setLista] = useState([])

  const hooks = () => {
    axios
    .get("https://apiunpaz-production.up.railway.app/lgti/materias")
    .then(response => {
      setLista(response.data)
    })
  }
  useEffect(hooks, [])

  const verMas = (argumento) => {
    setMateriaSeleccionada(argumento)
  }

  if(materiaSeleccionada === 0){
    return (
      <div>
        <div id="carrera">
          <h1>Materias de la Licenciatura en gestión en tecnoloías de la información 🤓</h1>
        </div>
        <h3>Primer Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 1).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Segundo Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 2).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Tercero Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 3).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Cuarto Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 4).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Quinto Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 5).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Sexto Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 6).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Septimo Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 7).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Octavo Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 8).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
        <h3>Noveno Cuatrimestre</h3>
        <ul>
            {lista.filter(m => m.cuatrimestre === 9).map(materia => (
              <li>{materia.nombre} <button onClick={() => {verMas(materia.id)}}>Ver más</button></li>
            ))}
        </ul>
      </div>
      
    );
  }else{
    return(
      <Materia id={materiaSeleccionada} formateador={setMateriaSeleccionada}/>
    )
  }
}

export default App;
