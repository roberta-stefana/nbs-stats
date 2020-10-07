import React from 'react';
import {Bar} from 'react-chartjs-2';



const BarChart = props => {

    const {labels,data1, data2, namePlayer1, namePlayer2, title} = props;

    
    const list = {
        labels: labels,
        datasets: [
            {
              label: namePlayer1,
              backgroundColor: "#4e5361",
              borderColor: "#C0F442",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,1)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: data1
            },
  
            {
              label: namePlayer2,
              backgroundColor: "#BFCBD6",
              borderColor: "#C0F442",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,199,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: data2
            }
        ]
    }
    return ( 
        <Bar
            data={list}
            height={200}
            width={500}
            options={{
                title:{
                    display:true,
                    text:title,
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}
        />
    );
}
 
export default BarChart;