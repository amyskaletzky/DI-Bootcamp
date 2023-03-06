import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Vote.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    }
  }

  incrementVotes = (e) => {
    console.log(e)
    this.setState({ votes: e.votes++ })

  }

  render() {
    const { languages } = this.state

    return (
      <>
        {
          languages.map(language => (
            <div className='votes'>
              <p>{language.votes}</p>
              <p>{language.name}</p>
              <button
                type='button'
                onClick={() => this.incrementVotes(language)}>Click Here</button>
            </div>

          ))

        }

      </>
    );

  }
}

export default App;
