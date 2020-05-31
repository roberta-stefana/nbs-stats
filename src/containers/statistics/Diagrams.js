import React from 'react';
import {BarChart} from '../../components';
import {Grid} from '@material-ui/core';

const Diagrams = props => {

    const {labels,statsPlayer1, statsPlayer2, namePlayer1, namePlayer2, classes} = props;

    const noStats1 = statsPlayer1.length
    const noStats2 = statsPlayer2.length

    const pts1 = statsPlayer1.reduce( ( sum, { madeFt, made2p, made3p } ) => sum + madeFt + made2p*2 + made3p*3, 0)
    const pts2 = statsPlayer2.reduce( ( sum, { madeFt, made2p, made3p } ) => sum + madeFt + made2p*2 + made3p*3, 0)
    const average_pts1 = pts1 / noStats1
    const average_pts2 = pts2 / noStats2

    const reb1 = statsPlayer1.reduce( ( sum, { offRebounds, defRebounds } ) => sum + offRebounds+ defRebounds, 0)
    const reb2 = statsPlayer2.reduce( ( sum, { offRebounds, defRebounds } ) => sum + offRebounds+ defRebounds, 0)
    const average_reb1 = reb1 / noStats1
    const average_reb2 = reb2 / noStats2

    const assists1 = statsPlayer1.reduce( ( sum, { assists } ) => sum + assists, 0)
    const assists2 = statsPlayer2.reduce( ( sum, { assists } ) => sum + assists, 0)
    const average_assists1 = assists1 / noStats1
    const average_assists2 = assists2 / noStats2


    const steals1 = statsPlayer1.reduce( ( sum, { steals } ) => sum + steals, 0)
    const steals2 = statsPlayer2.reduce( ( sum, { steals } ) => sum + steals, 0)
    const average_steals1 = steals1 / noStats1
    const average_steals2 = steals2 / noStats2


    const bs1 = statsPlayer1.reduce( ( sum, { blockedShots } ) => sum + blockedShots, 0)
    const bs2 = statsPlayer2.reduce( ( sum, { blockedShots } ) => sum + blockedShots, 0)
    const average_bs1 = bs1 / noStats1
    const average_bs2 = bs2 / noStats2


    const ftMade1 = statsPlayer1.reduce( ( sum, { madeFt } ) => sum + madeFt, 0)
    const ftAll1 = statsPlayer1.reduce( ( sum, { madeFt, missFt } ) => sum + madeFt+ missFt, 0)
    const ftPercentage1 = (ftMade1/ftAll1 * 100).toFixed(1)

    const ftMade2 = statsPlayer2.reduce( ( sum, { madeFt } ) => sum + madeFt, 0)
    const ftAll2 = statsPlayer2.reduce( ( sum, { madeFt, missFt } ) => sum + madeFt+ missFt, 0)
    const ftPercentage2 = (ftMade2/ftAll2 * 100).toFixed(1)

    const twoMade1 = statsPlayer1.reduce( ( sum, { made2p } ) => sum + made2p, 0)
    const twoAll1 = statsPlayer1.reduce( ( sum, { made2p, miss2p } ) => sum + made2p+ miss2p, 0)
    const twoPercentage1 = (twoMade1/twoAll1 * 100).toFixed(1)

    const twoMade2 = statsPlayer2.reduce( ( sum, { made2p } ) => sum + made2p, 0)
    const twoAll2 = statsPlayer2.reduce( ( sum, { made2p, miss2p } ) => sum + made2p+ miss2p, 0)
    const twoPercentage2 = (twoMade2/twoAll2 * 100).toFixed(1)

    const threeMade1 = statsPlayer1.reduce( ( sum, { made3p } ) => sum + made3p, 0)
    const threeAll1 = statsPlayer1.reduce( ( sum, { made3p, miss3p } ) => sum + made3p+ miss3p, 0)
    const threePercentage1 = (threeMade1/threeAll1 * 100).toFixed(1)

    const threeMade2 = statsPlayer2.reduce( ( sum, { made3p } ) => sum + made3p, 0)
    const threeAll2 = statsPlayer2.reduce( ( sum, { made3p, miss3p } ) => sum + made3p+ miss3p, 0)
    const threePercentage2 = (threeMade2/threeAll2 * 100).toFixed(1)



    
    return (
        <div className={classes.diagramsContainer}>
            <div className={classes.chartContainer}>
                <BarChart
                    title='Average Statistics'
                    labels={["Points", "Rebounds", "Assists", "Steals", "Blocked Shots"]} 
                    data1={[average_pts1, average_reb1, average_assists1, average_steals1, average_bs1]} 
                    data2={[average_pts2, average_reb2, average_assists2, average_steals2, average_bs2]}
                    namePlayer1={namePlayer1}
                    namePlayer2={namePlayer2}
                />
            </div>
            <div className={classes.chartContainer}>
                <BarChart 
                    title='Overall Statistics'
                    labels={["Points", "Rebounds", "Assists", "Steals", "Blocked Shots"]} 
                    data1={[pts1, reb1, assists1, steals1, bs1]} 
                    data2={[pts2, reb2, assists2, steals2, bs2]}
                    namePlayer1={namePlayer1}
                    namePlayer2={namePlayer2}
                />
            </div>
            <div className={classes.chartContainer}>
                <BarChart
                    title='Shots Percentages'
                    labels={["Free throws", "2 point", "3 point"]} 
                    data1={[ftPercentage1, twoPercentage1, threePercentage1]} 
                    data2={[ftPercentage2, twoPercentage2, threePercentage2]}
                    namePlayer1={namePlayer1}
                    namePlayer2={namePlayer2}
                />
            </div>
        </div>
    );
}
 
export default Diagrams;