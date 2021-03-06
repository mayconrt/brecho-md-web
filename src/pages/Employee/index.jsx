import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import CheckOut from './Checkout/chekout'
import Search from './Search'

import './style.css'

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
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const initEmployee = {
        id:"",
        name: "",
        email: "",
        telphone: "",
        celphone: "",
        position: "",
        rg: "",
        cpf: "",
        birthDate: null,
        startDate: null,
        endDate: null,
        file: [],
        address: {}
    }
    const [employeeData, setEmployeeData] = React.useState(initEmployee);

    const handleChange = (data, newValue) => {
        
        if (data) {
            setEmployeeData({...data})
        }        
        setValue(newValue);
    };

    return (
        <div className="div-ma-users">

            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
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
                    <Search handleChange={handleChange}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <CheckOut setValue={setValue}/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <CheckOut employeeData={employeeData} setValue={setValue} edit={true}/>
                </TabPanel>
            </div>
        </div>
    );
}
