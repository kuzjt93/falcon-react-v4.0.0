import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { getColor, rgbaColor } from 'helpers/utils';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';

import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import BasicECharts from 'components/common/BasicEChart';
import SoftBadge from 'components/common/SoftBadge';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = data => ({
  tooltip: {
    trigger: 'axis',
    formatter: '<strong>{b0}</strong> : {c0}'
  },
  xAxis: {
    data: [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
      'Week 9',
      'Week 10'
    ]
  },
  series: [
    {
      type: 'line',
      data,
      smooth: true,
      lineStyle: {
        width: 2
      },

      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getColor('primary'), 0.25)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('primary'), 0)
            }
          ]
        }
      }
    }
  ],
  grid: {
    bottom: '2%',
    top: '2%',
    right: '0px',
    left: '10px'
  }
});

const Spendings = ({ data }) => {
  return (
    <Card className="font-sans-serif">
      <Card.Header className="pb-0">
        <h6 className="mb-0">Spendings</h6>
      </Card.Header>

      <Card.Body
        as={Flex}
        alignItems="end"
        justifyContent="between"
        className="pt-0"
      >
        <div>
          <h4 className="text-700 lh-1 mb-1">$1971.52</h4>
          <SoftBadge bg="danger" pill className="fs--2">
            <FontAwesomeIcon icon="caret-down" className="me-1" />
            5.1% last month
          </SoftBadge>
        </div>
        <div className="ps-0">
          <BasicECharts
            echarts={echarts}
            options={getOptions(data)}
            style={{ width: '8.5rem', height: 70 }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

Spendings.propTypes = { data: PropTypes.array.isRequired };

export default Spendings;
