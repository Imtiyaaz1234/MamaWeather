import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

import Forecast from "./Forecast";
import { UncontrolledAlert } from 'reactstrap';
import WeatherCardSubheader from "./WeatherCardSubheader";

const useStyles = makeStyles(theme => ({
  atmospheric: {
    fontSize: "28px",
    padding: "5px"
  },
  buttons: {
    color: "black"
  },
  card: {
    minWidth: 600,
    minHeight: 600
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  error: {
    color: "red",
    padding: "10px"
  },
  fullList: {
    width: "auto"
  },
  layout: {
    marginTop: "20px"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  recommendation: {
    fontFamily: "Montserrat, sans-serif",
    padding: "20px 0px 10px 0px",
    fontSize: "26px",
    textAlign: "center"
  },
  root: {
    flexiGrow: 1,
    color: "black"
  },
  search: {
    marginTop: "100px"
  },
  wi: {
    color: "#673ab7"
  }
}));

const StyleContainer = {
  padding: "2px",
  maxWidth: "200px",
  transitionDuration: ".3s",
  transitionProperty: "transform",
  textAlign: "center",
  borderRadius: ".25em .25em .4em .4em",
  boxShadow: "0 0 20px rgba(0, 0, 0, .2)",
};

const StyleClose = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  position: "absolute",
  top: "-4px",
  right: "0px",
  width: "20px",
  height: "20px",
  textDecoration: "none",
  border: 0,
  outline: 0,
  background: "none",
  verticalAlign: "top",
};


export default function AppLayout(props) {
  const classes = useStyles();
  const { currentWeather, forecast, icon, recommendation, styleContainer } = props;
  const celcius = Math.round(currentWeather.temperature);
  console.log(celcius);

  let showPopup;

  let scale = document.querySelector('.scale');
  let cel;
  let far;

  function cel_to_fah (celcius) {
      return (celcius * 9 / 5) + 32
  }

  let fahrenheitToCelsius = fahrenheit => {
   return (((fahrenheit - 32) * 5) / 9).toFixed(0);
  };

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={currentWeather}

            forecast={forecast}
            icon={icon}
            recommendation={recommendation}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const WeatherCard = props => {
  const classes = useStyles();
  const humidity = "wi wi-humidity";
  const strongWind = "wi wi-strong-wind";
  const { currentWeather, forecast, icon, recommendation } = props;

  let showPopup;

  if(currentWeather.temperature < 15) {
     showPopup = (
       <div>
       <link
         rel='stylesheet'
         href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
       />
      <UncontrolledAlert color="info" fade={false}>
        Its going to be a cold one
      </UncontrolledAlert>
       </div>
     )
  }
  else if(currentWeather.temperature > 25){
    showPopup = (
      <div>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
      />
     <UncontrolledAlert color="info" fade={false}>
       Its going to be a hot day
     </UncontrolledAlert>
      </div>
    )
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={currentWeather.city + ", " + currentWeather.country}
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
      />
      <CardContent>
        <CardMedia
          className={`${icon} ${classes.wi}`}
          src={icon}
          style={{ fontSize: "128px", float: "right" }}
        />
              <div>{ showPopup }</div>
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {Math.round(currentWeather.temperature)}&deg;C
        </Typography>
        <Typography
          variant="subtitle2"
          className="atmospheric-conditions"
          color="textSecondary"
          gutterBottom
          style={{ paddingTop: "40px" }}
        >
          <span
            className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {currentWeather.wind_speed} km/h Winds{" "}
          <span
            className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {currentWeather.humidity}% Humidity
        </Typography>
        <Typography
          className={`${classes.recommendation} recommendation`}
          color="textPrimary"
          gutterBottom
        >
          {recommendation}
        </Typography>
        <Divider variant="middle" />
        <Forecast forecast={forecast} />
      </CardContent>
    </Card>
  );
};
