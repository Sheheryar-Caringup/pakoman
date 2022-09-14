import React from 'react';
import {Dimensions, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import {styles} from './styles';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

import HeaderLayout from '../../layouts/HeaderLayout';
import CustomCard from '../../shared/CustomCard';
import CustomIconLabelValue from '../../shared/CustomIconLabelValue';
import CustomChartLabel from '../../shared/CustomChartLabel';
import CustomPortfolioCard from '../../shared/CustomPortfolioCard';
import CustomTitle from '../../shared/CustomTitle';

const Home = () => {
  const data = [
    {
      name: 'Askari High Yield Scheme 1',
      population: 215000,
      percentages: '10',
      unit: 67,
      color: 'rgba(12, 140, 169, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 10,
    },
    {
      name: 'Askari High Yield Scheme 2',
      population: 280000,
      percentages: '10',
      unit: 67,
      color: 'rgba(12, 140, 169, 0.7)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 10,
    },
    {
      name: 'Askari High Yield Scheme 3',
      population: 227612,
      percentages: '10',
      unit: 67,
      color: 'rgba(12, 140, 169, 0.4)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 10,
    },
  ];
  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  const screenWidth = Dimensions.get('window').width;

  return (
    <HeaderLayout
      bgColor={colorConstants?.primary}
      body={
        <View style={styles?.container}>
          <View style={styles?.chartContainer}></View>
          <View style={styles?.cardContainer}>
            <CustomCard
              isClickable={false}
              body={
                <>
                  <View style={styles?.chartBody}>
                    <View style={{width: '55%'}}>
                      <PieChart
                        data={data}
                        width={screenWidth}
                        height={150}
                        chartConfig={chartConfig}
                        accessor={'population'}
                        backgroundColor={'transparent'}
                        paddingLeft={'-10'}
                        center={[0, 0]}
                        hasLegend={false}
                        absolute
                      />
                    </View>
                    <View style={styles?.totalValueContainer}>
                      <CustomIconLabelValue
                        icon="database-outline"
                        label="Total Invest"
                        value="PKR 2156006"
                      />
                      <CustomIconLabelValue
                        icon="finance"
                        label="Number of Funds"
                        value="9090"
                      />
                      <CustomIconLabelValue
                        icon="chart-donut"
                        label="Total Units"
                        value="215.6"
                      />
                    </View>
                  </View>
                  <View style={styles?.chartLabelContainer}>
                    <CustomChartLabel
                      label={'Askari High Yield Scheme 1'}
                      color={'rgba(12, 140, 169, 1)'}
                    />
                    <CustomChartLabel
                      label={'Askari High Yield Scheme 2'}
                      color={'rgba(12, 140, 169, 1)'}
                    />
                  </View>
                  <View style={styles?.chartLabelContainer}>
                    <CustomChartLabel
                      label={'Askari High Yield Scheme 3'}
                      color={'rgba(12, 140, 169, 1)'}
                    />
                    <CustomChartLabel
                      label={'Askari High Yield Scheme 4'}
                      color={'rgba(12, 140, 169, 1)'}
                    />
                  </View>
                </>
              }
            />
            <CustomTitle
              title="Portfolio Summary"
              fontSize={fontConstants?.large}
              titleColor={colorConstants?.drakGray}
              extraStyles={{marginVertical: dimensionConstants?.margin}}
            />
            {data.map((element, key) => (
              <CustomPortfolioCard
                key={key}
                fundsName={element?.name}
                unit={element?.unit}
                investment={element?.population}
                percentages={element?.percentages}
                color={element?.color}
              />
            ))}
          </View>
        </View>
      }
    />
  );
};

export default Home;
