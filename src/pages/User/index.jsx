import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RoleList from './roleList'
import EmployeeList from './employeeList'


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
    const initData = {
        username: "",
        password: "",
        roles: [],
        employee: ""
    }
    const [data, setData] = useState(initData)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeData = (element) => {
        let tempData = data

        tempData[element.target.id] = element.target.value

        setData({ ...tempData })
    };

    const handleChangeRole = (roles) => {
        let tempData = data

        tempData.roles = roles

        setData({ ...tempData })
    };    

    const handleSend = () => {
        console.log(data)
    }

    return (
        <div className="div-ma-user">

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
                        <Tab label="Editar" {...a11yProps(1)} />
                        <Tab label="Novo" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    Lista
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Edição
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Usuário"
                                fullWidth
                                value={data.username}
                                onChange={e => handleChangeData(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                type="password"
                                id="password"
                                name="password"
                                label="Senha"
                                fullWidth
                                value={data.password}
                                onChange={e => handleChangeData(e)}
                            />
                        </Grid>
                    </Grid>
                    <RoleList setData={handleChangeRole}/>
                    <EmployeeList />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSend}
                    >
                        Salvar
                    </Button>

                </TabPanel>
            </div>
        </div>
    );
}
