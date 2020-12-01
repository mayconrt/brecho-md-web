import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function AddressForm({ setDados }) {
  return (
    <React.Fragment>
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
            autoComplete="given-name"
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
            autoComplete="given-name"
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
            autoComplete="given-name"
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
            autoComplete="given-name"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
