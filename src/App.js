import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (...params) => axios
  .get(...params)
  .then(resp => resp.data)


const App = () => {
  const { data, error } = useSWR(
    'https://api.github.com/repos/mahenrique94/jlib',
    fetcher
  )

  if (!data && !error) {
    return <h1>Buscando dados do projeto...</h1>
  }
  if (error) {
    return <h1>deu erro : {error.message} </h1>
  }

  return (
    <>
      <h1>Projeto: {data.name}</h1>
      <h1>Estrelas: {data.stargazers_count}</h1>
    </>
  )
}

export default App
