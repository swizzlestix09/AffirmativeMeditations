import { Slider } from '@material-ui/core'

const Slide = (props) => {
  return (
    <div>
      <Slider
         defaultValue={0}
         aria-labelledby="discrete-slider"
         valueLabelDisplay="on"
         step={1}
         marks={false}
         min={0}
         max={10}
        onChange={(e, value) => props.setTimer( value ) }
      />
    </div>
  );
};

export default Slide;
