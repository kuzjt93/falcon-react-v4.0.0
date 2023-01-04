import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import BasicECharts from 'components/common/BasicEChart';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
]);

const getOptions = data => ({
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    formatter: '{b0} : {c0}',
    transitionDuration: 0,
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1
  },
  xAxis: {
    type: 'category',
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    boundaryGap: false,
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    axisPointer: { type: 'none' }
  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    axisPointer: { type: 'none' }
  },
  series: [
    {
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        borderRadius: 10
      },
      barWidth: '5px',
      itemStyle: {
        borderRadius: 10,
        color: getColor('primary')
      },
      data,
      z: 10
    }
  ],
  grid: { right: 5, left: 10, top: 0, bottom: 0 }
});

const WeeklySales = ({ data, width, amountClassName }) => {
  return (
    <Card className="h-md-100">
      <Card.Header className="pb-0">
        <h6 className="mb-0 mt-2">
          Weekly Sales
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>Calculated according to last week's sales</Tooltip>
            }
          >
            <span>
              <FontAwesomeIcon
                icon={['far', 'question-circle']}
                transform="shrink-1"
                className="ms-1 text-400"
                id="weeklySalesTooltip"
              />
            </span>
          </OverlayTrigger>
        </h6>
      </Card.Header>

      <Card.Body as={Flex} alignItems="end" justifyContent="between">
        <div>
          <h2
            className={classNames(
              amountClassName,
              'mb-1 text-700 fw-normal lh-1'
            )}
          >
            $47K
          </h2>
          <SoftBadge pill bg="success" className="me-2 fs--2">
            +3.5%
          </SoftBadge>
        </div>
        <BasicECharts
          echarts={echarts}
          options={getOptions(data)}
          style={{ width: width || '8.5rem', height: 60 }}
        />
      </Card.Body>
    </Card>
  );
};

WeeklySales.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.string,
  amountClassName: PropTypes.string
};

export default WeeklySales;
