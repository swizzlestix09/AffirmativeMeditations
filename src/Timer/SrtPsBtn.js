import Button from '@material-ui/core/Button';

const SrtPsBtn =(props) =>{
  return (
    <div>
      <Button onClick={ ()=>{props.pausedorsrt()} }>{props.isPaused === false ? 'start': 'paused'}</Button>
    </div>
  )
};

export default SrtPsBtn;