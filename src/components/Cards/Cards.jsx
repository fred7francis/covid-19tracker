import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

function Cards({ data: { confirmed, recovered, critical, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container justify="center" >
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Confirmed
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed} duration={2} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={recovered} duration={2} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card,styles.critical)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Critical
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={critical} duration={2} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={deaths} duration={2} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
