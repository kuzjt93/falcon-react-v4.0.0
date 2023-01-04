import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import merge from 'lodash.merge';
import PropTypes from 'prop-types';
import React from 'react';

const getOption = () => ({
  color: getColor('primary'),
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'none'
    },
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-100'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0
  },
  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false
  },
  yAxis: {
    show: false,
    type: 'value',
    boundaryGap: false
  },
  series: [
    {
      type: 'bar',
      symbol: 'none'
    }
  ],
  grid: { right: '0', left: '0', bottom: '0', top: '0' }
});

const BasicECharts = ({ echarts, options, ...rest }) => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={merge(getOption(), options)}
      {...rest}
    />
  );
};

BasicECharts.propTypes = {
  echarts: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired
};

export default BasicECharts;
