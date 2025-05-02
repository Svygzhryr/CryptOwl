import { SwitchButton } from './style'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

const theme = 'darkTheme'

export const ThemeSwitch = () => {
  const changeTheme = () => {}

  return (
    <SwitchButton onClick={changeTheme}>
      <img src={theme === 'darkTheme' ? sun : moon} />
    </SwitchButton>
  )
}
