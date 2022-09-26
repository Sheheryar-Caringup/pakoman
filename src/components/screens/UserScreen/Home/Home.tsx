import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

import HeaderLayout from '../../../layouts/HeaderLayout';
import CustomCard from '../../../shared/CustomCard';
import CustomIconLabelValue from '../../../shared/CustomIconLabelValue';
import CustomChartLabel from '../../../shared/CustomChartLabel';
import CustomPortfolioCard from '../../../shared/CustomPortfolioCard';
import CustomTitle from '../../../shared/CustomTitle';
import {useDashboardChartInfo} from '../../../../modules/m_transactions/hooks';
import Loader from '../../../shared/Loader';
import {languageTxt} from '../../../../utils/constants/languageTxt';

const Home = () => {
  const chartConfig = {
    color: (opacity = 1) => `rgba(213, 155, 40, ${opacity})`,
  };
  const screenWidth = Dimensions.get('window').width;

  const {data: userChat} = useDashboardChartInfo();

  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalInvest, setTotalInvest] = useState('0');
  const [numberFunds, setNumberFunds] = useState('0');
  const [totalUnits, setTotalUnits] = useState('0');

  useEffect(() => {
    setTimeout(() => {
      setIsScrollEnabled(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (userChat)
      userChat.then((item: any) => {
        setIsLoading(false);
        setData(item?.data);

        let invest = 0;
        let unit = 0;
        if (item?.data) {
          item?.data?.map((val: any) => {
            invest = invest + Number(val?.population);
            unit = unit + parseFloat(val?.unit);
          });
          setTotalInvest(`${invest}`);
          setNumberFunds(item?.data?.length);
          setTotalUnits(`${unit.toFixed(2)}`);
        }
      });
  }, [userChat]);

  const renderCard = ({item}: any) => {
    return (
      <View style={styles?.chartLabelContainer}>
        <CustomChartLabel label={item.name} color={item.color} />
      </View>
    );
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <HeaderLayout
        bgColor={colorConstants?.primary}
        body={
          <ScrollView style={styles?.container}>
            <View style={styles?.chartContainer}></View>
            <View style={styles?.cardContainer}>
              <CustomCard
                isClickable={false}
                body={
                  <>
                    <View style={styles?.chartBody}>
                      <View style={{width: '55%'}}>
                        <PieChart
                          data={data ? data : []}
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
                          value={`PKR ${totalInvest}`}
                        />
                        <CustomIconLabelValue
                          icon="finance"
                          label="Number of Funds"
                          value={`${numberFunds}`}
                        />
                        <CustomIconLabelValue
                          icon="chart-donut"
                          label="Total Units"
                          value={`${totalUnits}`}
                        />
                      </View>
                    </View>

                    <View style={styles.listContainer}>
                      <FlatList
                        data={data}
                        scrollEnabled={isScrollEnabled}
                        numColumns={2}
                        renderItem={renderCard}
                        keyExtractor={(item: any) => item.name}
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

              {data ? (
                data?.map((element: any, key) => (
                  <CustomPortfolioCard
                    key={key}
                    fundsName={element?.name}
                    unit={Number(element?.unit).toFixed(2)}
                    investment={element?.population}
                    percentages={Number(element?.percentages)}
                    color={element?.color}
                  />
                ))
              ) : (
                <View style={styles.noDataContainer}>
                  <MaterialCommunityIcons
                    name="alert"
                    size={dimensionConstants?.iconXXLarge}
                    color={colorConstants?.primary}
                  />
                  <CustomTitle
                    title={languageTxt?.noDataAvailable}
                    fontSize={fontConstants.large}
                  />
                </View>
              )}
            </View>
          </ScrollView>
        }
      />
    </>
  );
};

export default Home;
