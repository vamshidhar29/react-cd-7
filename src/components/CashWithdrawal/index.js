// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onChange = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="background">
        <div className="card">
          <div className="title-bg">
            <p className="circle-bg">s</p>
            <h1 className="head-title">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="rupees-value">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text ">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="btns-bg">
            {denominationsList.map(item => (
              <DenominationItem
                denominationDetails={item}
                updatebalance={this.onChange}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
