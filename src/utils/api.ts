export const endpoints = {
  global: 'global/',
  exchanges: 'exchanges/',
  coins(start: number, limit: number) {
    return `tickers/?start=${start}&limit=${limit}`
  }
}

export async function getData<T>(url: string): Promise<T | null> {
  let result

  try {
    result = await fetch(url)
  } catch (err) {
    console.error(err)
  }

  if (!result) return null

  const json = await result.json()

  return json
}
