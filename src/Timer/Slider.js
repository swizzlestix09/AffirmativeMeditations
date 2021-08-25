import { Slider } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const Slide = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PrettoSlider
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
