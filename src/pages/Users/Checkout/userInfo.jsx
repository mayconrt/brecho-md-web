import "date-fns";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const UserInfo = ({ setDados }) => {
  const { register } = useForm();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Dados Funcionário
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="name"
              name="name"
              label="Name"
              ref={register({ required: "Enter your user name" })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="telphone"
              name="telphone"
              label="Telefone"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setDados(e)}
              required
              id="celphone"
              name="celphone"
              label="Celular"
              fullWidth
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
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              margin="normal"
              id="birthDate"
              name="birthDate"
              label="Dt Nascimento"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              margin="normal"
              id="startDate"
              name="startDate"
              label="Dt Admissão"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              margin="normal"
              id="endDate"
              name="endDate"
              label="Dt Demissão"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default UserInfo;
