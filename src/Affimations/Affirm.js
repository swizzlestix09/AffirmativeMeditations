import Quote from './Quote';
import ChangeQuoteBtn from './ChangeQuoteBtn';

const Affirm = (props) => {
  return (
    <div>
      <Quote mantra={props.mantra} />
      <ChangeQuoteBtn changeQuote={props.changeQuote}/>
    </div>
  )
};

export default Affirm;