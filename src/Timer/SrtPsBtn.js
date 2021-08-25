import Button from '@material-ui/core/Button';

const SrtPsBtn =(props) =>{
  return (
    <div>
      <Button onClick={ (e)=>{props.pausedorsrt(e)} }>{props.isPaused === false ? 'start': 'paused'}</Button>
    </div>
  )
};

export default SrtPsBtn;