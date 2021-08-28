import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  const elementText = /Won Games/i
  it('shoud render a while label by default', () => {
    //given
    renderWithTheme(<Logo />)

    // given
    const element = screen.getByLabelText(elementText).parentElement

    // then
    expect(element).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    // given
    renderWithTheme(<Logo color="black" />)

    // when
    const element = screen.getByLabelText(elementText).parentElement

    // then
    expect(element).toHaveStyle({ color: '#030517' })
  })

  it('should render a normal logo when the size is default', () => {
    // given
    renderWithTheme(<Logo />)

    // when
    const element = screen.getByLabelText(elementText).parentElement

    // then
    expect(element).toHaveStyle({ width: '11rem' })
  })

  it('should render a bigger logo when the size is large', () => {
    // given
    renderWithTheme(<Logo size="large" />)

    // when
    const element = screen.getByLabelText(elementText).parentElement

    // then
    expect(element).toHaveStyle({ width: '20rem' })
  })
})
