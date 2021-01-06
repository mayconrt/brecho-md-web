import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',  
      margin: theme.spacing(0),
    },
  },
}));


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            id:props.id,
            name: props.name,
            value: values.value,
          },
        });
      }}
      
      decimalScale={2}
      decimalSeparator=","
      isNumericString
      placeholder="R$ 0,00"
      prefix="R$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onChange(event)
  };

  return (
    <div className={classes.root}>
      <TextField
        required={props.required}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        label={props.label}
        value={props.value}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </div>
  );
}
