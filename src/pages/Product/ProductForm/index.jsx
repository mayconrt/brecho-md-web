import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '../../../common/Alert'
import CurrencyNumber from '../../../common/CurrencyNumber'

import { api, URL_PRODUCT } from '../../../api/services'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}));

const ProductForm = ({ productEdit, isModEdit, showProducts }) => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("Produto processado com sucesso")
    const [typeMessage, setTypeMessage] = useState("success")
    const classes = useStyles();
    const initializeProduct = {
        name: "",
        description: "",
        quantity: 0,
        price: ""
    }

    const [product, setProduct] = useState(initializeProduct)

    React.useEffect(() => {
        if (productEdit) {
            setProduct({ ...productEdit })
        } else {
            setProduct({ ...initializeProduct })
        }
    }, []);

    const changePropsProduct = (element) => {
        const tempProduct = product

        tempProduct[element.target.id] = element.target.value

        setProduct({ ...tempProduct })
    };

    const submitProduct = () => {
        if (isModEdit) {
            submitProductUpdate()
        } else {
            submitProductInsert()
        }

    };

    const submitProductInsert = () => {
        api.post(URL_PRODUCT, product).then(response => {
            showMessageApi(response)
            setProduct(initializeProduct)

        }).catch(error => {
            showMessageApi(error.response)
        })

    };

    const submitProductUpdate = () => {

        api.patch(`${URL_PRODUCT}/${product.id}`, product).then(response => {
            showMessageApi(response)
        }).catch(error => {
            showMessageApi(error.response)
        })

    };

    const showMessageApi = (response) => {
        if (response.status == 200) {
            setTypeMessage("success")
        } else {
            setTypeMessage("error")
        }

        setMessage(response.data.message)
        setShowMessage(true)

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
                        value={product.name}
                        onChange={element => changePropsProduct(element)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Descrição"
                        fullWidth
                        value={product.description}
                        onChange={element => changePropsProduct(element)}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        disabled
                        id="quantity"
                        name="quantity"
                        label="Quantidade"
                        fullWidth
                        type="number"
                        value={product.quantity}
                        onChange={element => changePropsProduct(element)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CurrencyNumber
                        required
                        id="price"
                        name="price"
                        label="Preço"
                        fullWidth
                        value={product.price}
                        onChange={changePropsProduct}
                    />
                </Grid>
            </Grid>

            <Button
                variant="contained"
                color="primary"
                onClick={submitProduct}
                className={classes.button}
            >
                SALVAR
            </Button>
            {showMessage &&
                <Alert type={typeMessage} message={message} showMessage={setShowMessage} />
            }
        </React.Fragment>
    )
}

export default ProductForm