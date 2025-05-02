import {
  ButtonNext,
  ButtonPrev,
  CoinChangeDay,
  CoinName,
  CoinNumber,
  CoinPrice,
  CoinSymbol,
  CoinWrapper,
  Container,
  RatesWrapper,
} from './style'
import { Loader } from '../../components/loader'
import basicStore from '../../mobx/basic-store'
import { observer } from 'mobx-react-lite'
import apiStore from '../../mobx/api-store'

export const Rates = observer(() => {
  const { currentPage, nextPage, prevPage } = basicStore
  const { data, getData } = apiStore

  const handlePrev = () => {
    prevPage()
  }

  const handleNext = () => {
    nextPage()
  }

  return (
    <RatesWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Container>
            <ul>
              {data.map((coin) => (
                <CoinWrapper key={coin.name}>
                  <CoinNumber>{coin.rank}</CoinNumber>
                  <CoinSymbol>{coin.symbol}</CoinSymbol>
                  <CoinName>{coin.name}</CoinName>
                  <CoinPrice>{coin.price_usd} $</CoinPrice>
                  <CoinChangeDay $type={coin.percent_change_24h.includes('-')}>
                    {coin.percent_change_24h} %
                  </CoinChangeDay>
                </CoinWrapper>
              ))}
            </ul>
          </Container>
        )
      )}
      <ButtonPrev disabled={isLoading} onClick={handlePrev}>
        <div></div>
      </ButtonPrev>
      <ButtonNext disabled={isLoading} onClick={handleNext}>
        <div></div>
      </ButtonNext>
    </RatesWrapper>
  )
})
