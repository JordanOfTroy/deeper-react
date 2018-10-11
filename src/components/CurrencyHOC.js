import React, {Component} from 'react' 

const withCurrency = (Basecomponent) => (
  class Currency extends Component {
    state = {
      amount: 1
    }
    render () {
      return (
        <div>
          US Dollar
          <Basecomponent />
        </div>
      )
    }
  }
)

const CurrencyDisplay = () => <p>Money</p>

const exchangeCurrency = withCurrency(CurrencyDisplay)

export default exchangeCurrency