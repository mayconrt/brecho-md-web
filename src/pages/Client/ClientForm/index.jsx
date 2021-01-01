import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { api, URL_CLIENT } from '../../../api/services'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}));

const ClientForm = ({clientEdit, isModEdit, showClients}) => {
    const classes = useStyles();
    const initializeClient = {
        name: "",
        email: "",
        celphone: "",
        telphone: ""
    }

    const [client, setClient] = useState(initializeClient)

    React.useEffect(() => {
        if (clientEdit) {
            setClient({ ...clientEdit })
        }else{
            setClient({ ...initializeClient })
        }
      }, []);    

    const changePropsClient = (element) => {
        const tempClient = client

        tempClient[element.target.id] = element.target.value

        setClient({ ...tempClient })
    };

    const submitClient = () => {
        if(isModEdit){
            submitClientUpdate()
        }else{
            submitClientInsert()
        }

    };

    const submitClientInsert = () => {
        api.post(URL_CLIENT, client).then(response => {
            showClients(null, 0)
        })

    };    

    const submitClientUpdate = () => {

        api.patch(`${URL_CLIENT}/${client.id}`, client).then(response => {
            showClients(null, 0)
        })

    };
    
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Nome"
                        fullWidth
                        value={client.name}
                        onChange={element => changePropsClient(element)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        value={client.email}
                        onChange={element => changePropsClient(element)}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="celphone"
                        name="celphone"
                        label="Celular"
                        fullWidth
                        value={client.celphone}
                        onChange={element => changePropsClient(element)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="telphone"
                        name="telphone"
                        label="Telefone"
                        fullWidth
                        value={client.telphone}
                        onChange={element => changePropsClient(element)}
                    />
                </Grid>
            </Grid>

            <Button
                variant="contained"
                color="primary"
                onClick={submitClient}
                className={classes.button}
            >
                SALVAR
            </Button>
        </React.Fragment>
    )
}

export default ClientForm