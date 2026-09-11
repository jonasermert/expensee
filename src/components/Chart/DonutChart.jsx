import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import './DonutChart.scss'
import { AmountContext } from '../../contexts/AmountContext'
import { useContext } from 'react';

ChartJS.register(ArcElement, Legend, Tooltip);

const DoughnutChart = () => {
  const { einkommen, ausgaben, sparen, sonstiges } = useContext(AmountContext);
  const kontostand = Number(einkommen) - Number(ausgaben) - Number(sparen) - Number(sonstiges);
  return (
    <div className='chart'>
        <div className="konto"> 
        {`${kontostand.toFixed(0)}€`}
             
        </div>
      <div className='chartText'>
      </div>
      <Doughnut
      
        data={{
          labels: ['Einkommen', 'Ausgaben', 'Sparen', 'Sonstiges'],
          datasets: [
            {
              label: '# of votes',
              data: [Math.max(kontostand, 0), ausgaben, sparen, sonstiges],
              backgroundColor: [
                'rgba(246, 53, 53, 1)',
                'rgba(81, 95, 235, 1)',
                'rgba(247, 199, 53, 1)',
                'rgba(149, 152, 154, 1)',
              ],
              borderWidth: 0,
              weight:17,
              radius:120,
            },      
          ],
          hoverOffset: 4
        }}
        width={'20'}
	    height={'20'}
      
        options={{  
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              position: 'bottom',
              labels: {
                color: '#ffffff',
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default React.memo(DoughnutChart);
