import dayjs from 'dayjs';

export const getPosition = (pos, params, dom, rect, size) => ({
  top: pos[1] - size.contentSize[1] - 10,
  left: pos[0] - size.contentSize[0] / 2
});

export const tooltipFormatter = params => {
  let tooltipItem = ``;
  if (Array.isArray(params)) {
    params?.forEach(el => {
      tooltipItem =
        tooltipItem +
        `<div class='ms-1'> 
      <h6 class="text-700">
      <div class="dot me-1 fs--2 d-inline-block" style="background-color:${
        el.borderColor ? el.borderColor : el.color
      }"></div>
      ${el.seriesName} : ${
          typeof el.value === 'object' ? el.value[1] : el.value
        }
      </h6>
      </div>`;
    });
  }
  return `<div>
            <p class='mb-2 text-600'>
              ${
                dayjs(params[0].axisValue).isValid()
                  ? dayjs(params[0].axisValue).format('MMMM DD')
                  : params[0].axisValue
              }
            </p>
            ${tooltipItem}
          </div>`;
};
