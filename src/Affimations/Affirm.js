import Quote from "./Quote";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ChangeQuoteBtn from "./ChangeQuoteBtn";

const Affirm = (props) => {
  return (
    <div className="affirmation">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Quote mantra={props.mantra} />
          </Typography>
        </CardContent>
        <CardActions>
        <ChangeQuoteBtn changeQuote={props.changeQuote} />
        </CardActions>
      </Card>
    </div>
  );
};

export default Affirm;
