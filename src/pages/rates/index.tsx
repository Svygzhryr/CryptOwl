import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Loader } from '../../components/loader'
import { endpoints } from '../../utils/api'
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
  RatesWrapper
} from './style'
import useApiStore from '../../mobx/api-store'
import useBasicStore from '../../mobx/basic-store'

export const Rates = observer(() => {
  const { prevPage, nextPage, currentPage } = useBasicStore()
  const { getCoinData, coinData } = useApiStore()

  const handlePrev = () => {
    prevPage()
  }

  const handleNext = () => {
    nextPage()
  }

  useEffect(() => {
    getCoinData(currentPage * 10, 10)
  }, [currentPage])

  return (
    <RatesWrapper>
      {coinData ? (
        <Container>
          <ul>
            {coinData.data.map((coin) => (
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
      ) : (
        <Loader />
      )}
      <ButtonPrev disabled={!coinData} onClick={handlePrev}>
        <div></div>
      </ButtonPrev>
      <ButtonNext disabled={!coinData} onClick={handleNext}>
        <div></div>
      </ButtonNext>
    </RatesWrapper>
  )
})
