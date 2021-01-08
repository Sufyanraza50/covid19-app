import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5'
    }
}));

export default function AllCountries() {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            setGlobalData(Object.values((data.Countries)));
            console.log("Object Values" + Object.values(Object.values(data.Countries)[0]));
        }
        getData();
    }, []);

    console.log("Global Data" + globalData);

    return (
        <div className={classes.root}>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Total Confirmed</th>
                    <th>Total Recovered</th>
                    <th>Total Deaths</th>
                </tr>
                {
                    globalData.map((key, ind) => {
                        return (
                            <tr>
                                <td>{globalData[ind].Country}</td>
                                <td>
                                    {globalData[ind].TotalConfirmed}
                                </td>
                                <td>
                                    {globalData[ind].TotalRecovered}
                                </td>
                                <td>
                                    {globalData[ind].TotalDeaths
                                    }
                                </td>
                            </tr>


                        )
                    })
                }
            </table>
        </div>
    );
}
