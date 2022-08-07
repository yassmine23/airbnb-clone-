import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { BarSeries } from '@devexpress/dx-react-chart';



const data = [
    { year: '2011', maxPrice: 100 },
    { year: '2012', maxPrice: 160 },
  { year: '2016', maxPrice: 100 },

  { year: '2013', maxPrice: 90 },
  { year: '2014', maxPrice: 100 },
  { year: '2015', maxPrice: 130 },

  { year: '2016', maxPrice: 100 },
  { year: '2017', maxPrice: 150 },
  { year: '2018', maxPrice: 190 },
  { year: '2019', maxPrice: 220 },
  { year: '2020', maxPrice: 250 },
  { year: '2021', maxPrice: 320 },
  { year: '2022', maxPrice: 300 },
  
];

export default class ChartModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper >
        <Chart 
          data={chartData}
          height={200}
        >
          <ArgumentAxis />
          <ValueAxis max={350} />

          <BarSeries
            valueField="maxPrice"
            argumentField="year"
            color="gray"

          />
          {/* <Title text="World maxPrice" /> */}
          <Animation />
        </Chart>
      </Paper>
    );
  }
}