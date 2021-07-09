import React from 'react';

import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector
} from 'devextreme-react/pie-chart';

export const dataSource = [{
  timeCategory: 'Mental',
  timeSpent: 2
}, {
  timeCategory: 'Physical',
  timeSpent: 8
}, {
  timeCategory: 'Intellectual',
  timeSpent: 10
}, {
  timeCategory: 'ETC',
  timeSpent: 4
}];


const DevExpressExampleChart: React.FC = () => {
  return (
    <PieChart id="pie"
              palette="Bright"
              dataSource={dataSource}
              title="Olympic Medals in 2008"
    >
      <Legend
        orientation="horizontal"
        itemTextPosition="right"
        horizontalAlignment="center"
        verticalAlignment="bottom"
        columnCount={4} />
      <Export enabled={true} />
      <Series argumentField="timeCategory" valueField="timeSpent">
        <Label
          visible={true}
          position="columns"
          customizeText={customizeText}>
          <Font size={16} />
          <Connector visible={true} width={0.5} />
        </Label>
      </Series>
    </PieChart>
  );
};

function customizeText(arg:any) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default DevExpressExampleChart;