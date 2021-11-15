import React, { Component } from 'react'

class Popular extends Component {
  constructor() {
    super()

    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({movie: result}) }) // on détaille l'action à exécuter sur ce JSON
  }

  render() {
    console.log(this.state.movie)

    return (
      <div>
        <h1>Popular</h1>
      </div>
    )
  }
}

export default Popular