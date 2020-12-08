import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import UserInfo from './employeeInfo';
import AddressForm from './address';
import UploadImage from './uploadImage'

import {api, URL_EMPLOYEE} from '../../../api/services'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
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
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Dados Pessoais', 'Endereço', 'Foto'];

export default function Checkout() {
  const initInfoData = {
    name: "",
    email: "",
    telphone: "",
    celphone: "",
    position: "",
    rg: "",
    cpf:"",
    birthDate: null,
    startDate: null,
    endDate: null,
    file:[],
    address: {}
  }
  const initAddressData = {
    zipCode: "",
    uf: "",
    numberHouse: "",
    street: "",
    neighborhood: "",
    city: "",
    complement: ""    
  }
  const initFileData = []

  const [infoData, setInfoData] = useState(initInfoData)
  const [addressData, setAddressData] = useState(initAddressData)
  const [fileData, setFileData] = useState(initFileData)

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSend = () => {
    const data = infoData
    data.file = fileData
    data.address = addressData

    api.post(URL_EMPLOYEE, data).then(res=>{
      console.log('teste', res)
    })
  };

  const handleInfoData = (element, date) => {
    let tempData = infoData
    
    if(date){
      const tempDate = new Date(date)
      tempData[element.id] = tempDate
    }else{
      tempData[element.target.id] = element.target.value
    }
      
    setInfoData({...tempData})

  };


  const handleAddressData = (element) => {
    let tempData = addressData

    if (element)
      tempData[element.target.id] = element.target.value

      setAddressData({...tempData})

  };  


  const handleFileData = (file) => {
    
    if (file){
      setFileData(file)
    }

  };

  const handleNext = () => {
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
          {activeStep==0 &&
            <UserInfo setData={handleInfoData} 
                       handleNext={handleNext} 
                       data={infoData}
                       classes={classes} />            
          }

          {activeStep==1 &&
            <AddressForm setData={handleAddressData} 
                          handleBack={handleBack} 
                          handleNext={handleNext} 
                          data={addressData}
                          classes={classes} />          
          }
          {activeStep==2 &&
            <UploadImage setData={handleFileData} 
                          handleBack={handleBack} 
                          handleSend={handleSend} 
                          data={fileData}
                          classes={classes} />          
          }          
        </React.Fragment>

      </main>
    </React.Fragment>
  );
}