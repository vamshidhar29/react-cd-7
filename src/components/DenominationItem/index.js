// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatebalance} = props
  const {value} = denominationDetails
  const onClickDenomination = () => {
    updatebalance(value)
  }
  return (
    <l1 className="denomination-item">
      <button onClick={onClickDenomination} className="btn-bg" type="button">
        {value}
      </button>
    </l1>
  )
}

export default DenominationItem
