import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UserInfo from "./userInfo";
import AddressForm from "./address";
import UploadImage from "./uploadImage";

export default function Checkout() {
  const steps = ["Dados Pessoais", "Endereço", "Foto"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = useState({});

  const setDados = (element) => {
    let id = element.target.id;
    let value = element.target.value;

    let temp = data;
    temp[id] = value;
    setData(temp);
  };

  function getStepContent(step, setDados) {
    switch (step) {
      case 0:
        return <UserInfo setDados={setDados} />;
      case 1:
        return <AddressForm setDados={setDados} />;
      case 2:
        return <UploadImage setDados={setDados} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const handleNext = () => {
    console.log("Teste função setDados##", data);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography component="h1" variant="h4" align="center">
          Etapas
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <React.Fragment>
          {getStepContent(activeStep, setDados)}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
            )}

            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Enviar
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Próximo
              </Button>
            )}
          </div>
        </React.Fragment>
      </main>
    </React.Fragment>
  );
}
