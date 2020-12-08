import React from 'react';
import Typography from '@material-ui/core/Typography';
import DropzoneArea from '../../../common/File/dropZoneArea'
import Button from '@material-ui/core/Button';


export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Foto de Perfil
      </Typography>

      <DropzoneArea setData={props.setData}/>

      <div className={props.classes.buttons}>

        <Button onClick={props.handleBack} className={props.classes.button}>
          Voltar
                </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={props.handleSend}
          className={props.classes.button}
        >
          Enviar
        </Button>

      </div>

    </React.Fragment>
  );
}