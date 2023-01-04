import world from 'assets/json/world.json';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { MapChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor, rgbaColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MapChart,
  CanvasRenderer,
  ToolboxComponent,
  LegendComponent,
  VisualMapComponent
]);

echarts.registerMap('world', { geoJSON: world });

const total = 6961500;

const getOptions = (data, maxZoomLevel, minZoomLevel) => ({
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: params =>
      `<strong>${params.data?.name} :</strong> ${(
        (params.data?.value / total) *
        100
      ).toFixed(2)}%`
  },
  toolbox: {
    show: false,
    feature: {
      restore: {}
    }
  },
  visualMap: {
    show: false,
    min: 800,
    max: 50000,
    inRange: {
      color: [
        getColor('primary'),
        rgbaColor(getColor('primary'), 0.8),
        rgbaColor(getColor('primary'), 0.6),
        rgbaColor(getColor('primary'), 0.4),
        rgbaColor(getColor('primary'), 0.2)
      ].reverse()
    }
  },
  series: [
    {
      type: 'map',
      map: 'world',
      data,
      roam: true,
      scaleLimit: {
        min: minZoomLevel,
        max: maxZoomLevel
      },
      left: 0,
      right: 0,
      label: {
        show: false
      },
      itemStyle: {
        borderColor: getColor('gray-300')
      },
      emphasis: {
        label: {
          show: false
        },
        itemStyle: {
          areaColor: getColor('warning')
        }
      }
    }
  ]
});

const WorldMap = forwardRef(
  ({ data, style, minZoomLevel = 1, maxZoomLevel = 5 }, ref) => {
    return (
      <ReactEChartsCore
        ref={ref}
        echarts={echarts}
        option={getOptions(data, maxZoomLevel, minZoomLevel)}
        style={style}
      />
    );
  }
);

WorldMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ),
  style: PropTypes.object.isRequired,
  minZoomLevel: PropTypes.number,
  maxZoomLevel: PropTypes.number
};

export default WorldMap;
