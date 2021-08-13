import { render, screen } from '@testing-library/react'

import HeroBanner from '.'

describe('<HeroBanner />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroBanner />)

    expect(
      screen.getByRole('heading', { name: /HeroBanner/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
