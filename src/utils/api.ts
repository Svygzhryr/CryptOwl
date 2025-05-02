export const endpoints = {
  global: 'global/',
  exchanges: 'exchanges/',
  coins(start: number, limit: number) {
    return `tickers/?start=${start}&limit=${limit}`
  },
}

export async function getData(
  url: string,
  isLoading: boolean
): Promise<T | null> {
  let result

  try {
    isLoading = true
    result = await fetch(url)
  } catch (err) {
    console.error(err)
  } finally {
    isLoading = false
  }

  if (!result) return null

  const json = await result.json()

  return json
}
