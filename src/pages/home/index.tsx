import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import linklight from '../../assets/link-light.svg'
import link from '../../assets/link.svg'
import { Loader } from '../../components/loader'
import ApiStore from '../../mobx/api-store'
import themeStore from '../../mobx/theme-store'
import { endpoints } from '../../utils/api'
import { globalStatDesc, globalStatKeys } from '../../utils/globalStats'
import {
  Container,
  Grid,
  GridItem,
  GridItemDesc,
  GridItemName,
  GridItemValue,
  MarketItem,
  Markets,
  Title
} from './styles'
import { IMarketData } from '../../types/api'

const globalStats = new ApiStore()
const marketStats = new ApiStore()

const Home = observer(() => {
  const { theme } = themeStore
  const {
    data: globalData,
    getData: getGlobalData,
    isLoading: isGlobalStatsLoading
  } = globalStats

  const {
    data: marketData,
    getData: getMarketData,
    isLoading: isMarketStatsLoading
  } = marketStats

  useEffect(function () {
    getGlobalData(endpoints.global)
    getMarketData(endpoints.exchanges)
  }, [])

  return (
    <Container>
      <Title>Global stats</Title>
      {isGlobalStatsLoading ? (
        <Loader />
      ) : (
        globalData && (
          <Grid>
            {Object.keys(globalData[0]).map((key, index) => {
              const values = Object.values(globalData[0])
              if (!values[index] || key.includes('ath')) return
              let type
              if (globalStatKeys[index].includes('Change')) {
                values[index][0] === '-' ? (type = 'fall') : (type = 'rise')
              } else {
                type = 'm1'
              }
              return (
                <GridItem key={`${key}`}>
                  <GridItemDesc>{globalStatDesc[index]}</GridItemDesc>
                  <GridItemName>{globalStatKeys[index]}</GridItemName>
                  <GridItemValue $type={type}>
                    {new Intl.NumberFormat('en-US').format(values[index])}
                    {index > 3 && '%'}
                  </GridItemValue>
                </GridItem>
              )
            })}
          </Grid>
        )
      )}
      <Title>Top markets</Title>

      {isMarketStatsLoading ? (
        <Loader />
      ) : (
        marketData && (
          <Markets>
            {Object.keys(marketData).map((market) => {
              const { name, country, volume_usd, url } = marketData[
                market
              ] as IMarketData
              return (
                <MarketItem href={market.url} key={name}>
                  <div>
                    <h2>{name}</h2>
                    <h2>
                      {new Intl.NumberFormat('en-US').format(volume_usd)} $
                    </h2>
                    <h2>{country || 'N/A'}</h2>
                  </div>
                  <a target="_blank" href={url}>
                    <img src={theme === 'darkTheme' ? link : linklight}></img>
                  </a>
                </MarketItem>
              )
            })}
          </Markets>
        )
      )}
    </Container>
  )
})

export default Home
