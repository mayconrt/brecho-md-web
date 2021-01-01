import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { api, URL_PRODUCT } from '../../../api/services'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}));

const ProductForm = ({productEdit, isModEdit, showProducts}) => {
    const classes = useStyles();
    const initializeProduct = {
        name: "",
        description: "",
        quantity: "",
        price: ""
    }

    const [product, setProduct] = useState(initializeProduct)

    React.useEffect(() => {
        if (productEdit) {
            setProduct({ ...productEdit })
        }else{
            setProduct({ ...initializeProduct })
        }
      }, []);    

    const changePropsProduct = (element) => {
        const tempProduct = product

        tempProduct[element.target.id] = element.target.value

        setProduct({ ...tempProduct })
    };

    const submitProduct = () => {
        if(isModEdit){
            submitProductUpdate()
        }else{
            submitProductInsert()
        }

    };

    const submitProductInsert = () => {
        api.post(URL_PRODUCT, product).then(response => {
            showProducts(null, 0)
        })

    };    

    const submitProductUpdate = () => {

        api.patch(`${URL_PRODUCT}/${product.id}`, product).then(response => {
            showProducts(null, 0)
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
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Preço"
                        fullWidth
                        value={product.price}
                        onChange={element => changePropsProduct(element)}
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
        </React.Fragment>
    )
}

export default ProductForm