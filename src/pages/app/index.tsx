import {
  Container,
  Grid,
  GridItem,
  GridItemDesc,
  GridItemName,
  GridItemValue,
  MarketItem,
  Markets,
  Title,
} from './styles'
import {
  useGetAllMarketsQuery,
  useGetGlobalStatsQuery,
} from '../../redux/apiSlice'
import { globalStatDesc, globalStatKeys } from '../../utils/globalStats'
import { Loader } from '../../components/loader'
import link from '../../assets/link.svg'

const App = () => {
  const {
    data: statsData,
    error: statsError,
    isLoading: statsIsLoading,
  } = useGetGlobalStatsQuery()
  const {
    data: marketData,
    error: marketError,
    isLoading: marketIsLoading,
  } = useGetAllMarketsQuery()

  return (
    <>
      <Container>
        <Title>Global stats</Title>
        {statsIsLoading ? (
          <Loader />
        ) : (
          statsData && (
            <Grid>
              {Object.keys(statsData).map((key, index) => {
                const values = Object.values(statsData)
                if (!values[index]) return
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

        {marketIsLoading ? (
          <Loader />
        ) : (
          marketData && (
            <Markets>
              {marketData.map((market) => {
                const { name, country, volume_usd, url } = market
                return (
                  <MarketItem key={name}>
                    <div>
                      <h2>{name}</h2>
                      <h2>
                        {new Intl.NumberFormat('en-US').format(volume_usd)} $
                      </h2>
                      <h2>{country || 'N/A'}</h2>
                    </div>
                    <a target="_blank" href={url}>
                      <img src={link}></img>
                    </a>
                  </MarketItem>
                )
              })}
            </Markets>
          )
        )}
      </Container>
    </>
  )
}

export default App
