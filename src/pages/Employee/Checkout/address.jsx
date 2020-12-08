import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddressForm(props) {

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Endereço
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="zipCode"
            name="zipCode"
            label="CEP"
            fullWidth
            value={props.data.zipCode}
            onChange={e => props.setData(e)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="uf"
            name="uf"
            label="UF"
            fullWidth
            value={props.data.uf}
            onChange={e => props.setData(e)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="numberHouse"
            name="numberHouse"
            label="Numero"
            fullWidth
            value={props.data.numberHouse}
            onChange={e => props.setData(e)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="street"
            name="street"
            label="Rua"
            fullWidth
            value={props.data.street}
            onChange={e => props.setData(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="neighborhood"
            name="neighborhood"
            label="Bairro"
            fullWidth
            value={props.data.neighborhood}
            onChange={e => props.setData(e)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            value={props.data.city}
            onChange={e => props.setData(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setDados(e)}
            required
            id="complement"
            name="complement"
            label="Complemento"
            fullWidth
            value={props.data.complement}
            onChange={e => props.setData(e)}
          />
        </Grid>
      </Grid>


      <div className={props.classes.buttons}>

        <Button onClick={props.handleBack} className={props.classes.button}>
          Voltar
                </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={props.handleNext}
          className={props.classes.button}
        >
          Próximo
              </Button>

      </div>

    </div>

  );
}
