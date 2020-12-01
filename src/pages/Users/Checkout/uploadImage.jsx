import React from "react";
import Typography from "@material-ui/core/Typography";
import DropzoneArea from "../../../common/File/dropZoneArea";

export default function AddressForm() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Foto de Perfil
      </Typography>

      <DropzoneArea />
    </div>
  );
}
