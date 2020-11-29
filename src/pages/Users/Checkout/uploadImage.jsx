import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography';
import DropzoneArea from '../../../common/File/dropZoneArea'


export default function AddressForm() {
  const { register, handleSubmit, errors } = useForm();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Foto de Perfil
      </Typography>

      <DropzoneArea />

    </React.Fragment>
  );
}