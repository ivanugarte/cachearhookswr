import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [project, updateProject] = useState({})
  const [isLoading, updateIsLoading] = useState(true)
  const [error, updateError] = useState('')

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/mahenrique94/jlib')
      .then(resp => {
        updateProject(resp.data)
        updateIsLoading(false)
      })
      .catch(error => {
        updateError(error.message)
        updateIsLoading(false)
      })
  }, [])  

  if (isLoading) {
    return <h1>Buscando dados do projeto.....</h1>
  }

  if (error) {
    return <h1>deu erro: {error}</h1>
  }

  return (
    <>
      <h1>Projeto: {project.name}</h1>
      <h1>Estrelas: {project.stargazers_count}</h1>
    </>
  )
}

export default App
