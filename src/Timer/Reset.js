import Button from '@material-ui/core/Button';

const Reset =(props) =>{
  return (
    <div>
      <Button onClick={ ()=>{ props.reset() } }>{'reset'}</Button>
    </div>
  )
};

export default Reset;