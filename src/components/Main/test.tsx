import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main component', () => {
  it('should render the heading', () => {
    // given

    // when
    const { container } = render(<Main />)

    // then
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // when
    const { container } = render(<Main />)

    // then
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
