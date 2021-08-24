import Button from '@material-ui/core/Button';

const ChangeQuoteBtn = (props) => {
  return (
    <div>
      <Button onClick={props.changeQuote}>CHANGE AFFIRMATION</Button>
    </div>
  )
}

export default ChangeQuoteBtn;