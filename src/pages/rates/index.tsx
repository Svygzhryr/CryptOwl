import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Loader } from '../../components/loader'
import { default as apiStore, default as ApiStore } from '../../mobx/api-store'
import basicStore from '../../mobx/basic-store'
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

const ratesData = new ApiStore()

export const Rates = observer(() => {
  const { currentPage, nextPage, prevPage } = basicStore
  const { data: ratesStats, getData, isLoading } = ratesData

  const handlePrev = () => {
    prevPage()
  }

  const handleNext = () => {
    nextPage()
  }

  useEffect(() => {
    getData(endpoints.coins(currentPage * 10, 10))
  }, [currentPage])

  return (
    <RatesWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        ratesStats && (
          <Container>
            <ul>
              {ratesStats.data.map((coin) => (
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
