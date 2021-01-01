import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FieldAutocomplete from '../Products'

import { api, URL_ORDER, URL_CLIENT, URL_PRODUCT } from '../../../api/services'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}));

const OrderForm = ({ orderEdit, isModEdit, showOrders }) => {
    const classes = useStyles();
    const initializeOrder = {
        product: {
            id: "",
            name: "",
            description: "",
            quantity: "",
            price: ""
        },
        client: {
            id: "",
            name: "",
            email: "",
            celphone: "",
            telphone: ""
        },
        quantity: "",
        unit_value: "",
        discount_value: "",
        total_value: ""
    }

    const [order, setOrder] = useState(initializeOrder)

    React.useEffect(() => {
        if (orderEdit) {
            setOrder({ ...orderEdit })
        } else {
            setOrder({ ...initializeOrder })
        }
    }, []);

    const changePropsOrder = (element) => {
        const tempOrder = order

        tempOrder[element.target.id] = element.target.value

        setOrder({ ...tempOrder })
        if (element.target.id == "quantity" || element.target.id == "discount_value")
            updateValues()
    };

    const setProduct = (product) => {
        const tempOrder = order
        tempOrder.product = product
        setOrder({ ...tempOrder })
        updateValues()
    };

    const setClient = (client) => {
        const tempOrder = order
        tempOrder.client = client
        setOrder({ ...tempOrder })
    };

    const updateValues = () => {
        const tempOrder = order
        tempOrder.unit_value = order.product.price
        tempOrder.total_value = (order.quantity * order.unit_value) - order.discount_value

        setOrder({ ...tempOrder })
    };

    const submitOrder = () => {
        const tempData = order
        tempData.idProduct = order.product.id
        tempData.idClient = order.client.id

        if (isModEdit) {
            submitOrderUpdate(tempData)
        } else {
            submitOrderInsert(tempData)
        }

    };

    const submitOrderInsert = (order) => {
        api.post(URL_ORDER, order).then(response => {
            showOrders(null, 0)
        })

    };

    const submitOrderUpdate = (order) => {

        api.patch(`${URL_ORDER}/${order.id}`, order).then(response => {
            showOrders(null, 0)
        })

    };

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FieldAutocomplete
                        setValue={setProduct}
                        valueOption={order.product}
                        title="Produtos"
                        urlAPI={URL_PRODUCT}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FieldAutocomplete
                        setValue={setClient}
                        valueOption={order.client}
                        title="Clientes"
                        urlAPI={URL_CLIENT}
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
                        value={order.quantity}
                        onChange={element => changePropsOrder(element)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="unit_value"
                        name="unit_value"
                        label="Valor Unitario"
                        fullWidth
                        disabled
                        value={order.product.price}
                        onChange={element => changePropsOrder(element)}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="discount_value"
                        name="discount_value"
                        label="Toral Desconto"
                        fullWidth
                        value={order.discount_value}
                        onChange={element => changePropsOrder(element)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="total_value"
                        name="total_value"
                        label="Valor Total"
                        fullWidth
                        disabled
                        value={(order.product.price * order.quantity) - order.discount_value}
                        onChange={element => changePropsOrder(element)}
                    />
                </Grid>
            </Grid>

            <Button
                variant="contained"
                color="primary"
                onClick={submitOrder}
                className={classes.button}
            >
                SALVAR
            </Button>
        </React.Fragment>
    )
}

export default OrderForm