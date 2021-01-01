import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import OrderForm from './OrderForm'
import ShowOrders from './ShowOrders'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="ma-users-container"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
    }
}));

export default function FullWidthTabs() {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [order, setOrder] = useState({})

    const changeTab = (orderEdit, newValue) => {
        if(orderEdit){
            setOrder({...orderEdit})
        }

        setValue(newValue);
    };

    return (
        <div className="div-ma-user">
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={changeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Consulta" {...a11yProps(0)} />
                        <Tab label="Novo" {...a11yProps(1)} />
                        <Tab label="Editar" {...a11yProps(2)} disabled />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ShowOrders changeTab={changeTab}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <OrderForm isModEdit={false} showOrders={changeTab}/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <OrderForm orderEdit={order} isModEdit={true} showOrders={changeTab}/>
                </TabPanel>

            </div>
        </div>
    );
}
