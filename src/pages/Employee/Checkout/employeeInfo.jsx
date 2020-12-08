import 'date-fns'
import React, { Fragment, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const UserInfo = (props) => {

  const handleChangeBirthday = (date) => {
    const element = document.getElementById("birthDate")
    props.setData(element, date)
  };

  const handleChangeStartDate = (date) => {
    const element = document.getElementById("startDate")
    props.setData(element, date)
  };

  const handleChangeEndDate = (date) => {
    const element = document.getElementById("endDate")
    props.setData(element, date)
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Dados Funcionário
            </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              value={props.data.name}
              onChange={e => props.setData(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              value={props.data.email}
              onChange={e => props.setData(e)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="position"
              name="position"
              label="Função"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="rg"
              name="rg"
              label="RG"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="cpf"
              name="cpf"
              label="CPF"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telphone"
              name="telphone"
              label="Telefone"
              fullWidth
              value={props.data.telphone}
              onChange={e => props.setData(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="celphone"
              name="celphone"
              label="Celular"
              fullWidth
              value={props.data.celphone}
              onChange={e => props.setData(e)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="position"
              name="position"
              label="Função"
              fullWidth
              value={props.data.position}
              onChange={e => props.setData(e)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="rg"
              name="rg"
              label="RG"
              fullWidth
              value={props.data.rg}
              onChange={e => props.setData(e)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="cpf"
              name="cpf"
              label="CPF"
              fullWidth
              value={props.data.cpf}
              onChange={e => props.setData(e)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              margin="normal"
              id="birthDate"
              name="birthDate"
              label="Dt Nascimento"
              format="dd/MM/yyyy"
              value={props.data.birthDate}
              onChange={handleChangeBirthday}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              margin="normal"
              id="startDate"
              name="startDate"
              label="Dt Admissão"
              format="dd/MM/yyyy"
              value={props.data.startDate}
              onChange={handleChangeStartDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              margin="normal"
              id="endDate"
              name="endDate"
              label="Dt Demissão"
              format="dd/MM/yyyy"
              value={props.data.endDate}
              onChange={handleChangeEndDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </Grid>

        <div className={props.classes.buttons}>

          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
            className={props.classes.button}
          >
            Próximo
                    </Button>

        </div>

      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default UserInfo
