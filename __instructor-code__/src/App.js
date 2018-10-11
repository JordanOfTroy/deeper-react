import React, { Component, Fragment } from 'react'
import './App.css'

import CurrencyHOC from './Components/CurrencyHOC'
import CurrencyRP from './Components/CurrencyRP'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <h1>Higher Order Components</h1>
          <CurrencyHOC currency={`AUD`} exchangeRate={1.4} />
          <CurrencyHOC currency={`CAD`} exchangeRate={1.3} />
          <CurrencyHOC currency={`Piso`} exchangeRate={54.05} />
        </Fragment>
        <h1>Render Prop</h1>
        <CurrencyRP
          render={(data) => (
            <p>
              US Dollar: ${data.amount.toFixed(2)} - AUD{' '}
              {(data.amount * 1.4).toFixed(2)}
            </p>
          )}
        />
      </div>
    )
  }
}

export default App
