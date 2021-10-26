import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`

`

const Nav = () => (
  <Wrapper>
    {/* <Link href='/'><a>Home</a></Link> |
    <Link href='/about' prefetch><a>About</a></Link> |
    <Link href='/contact' prefetch><a>Contact</a></Link> */}


    <nav className="navigation" id="navigation">
      <div className="container">
        <div className="logo"><Link href='/'>YOUR lOGO</Link></div>
        <ul className="navigation-links">
          <li className="active"><Link href='/'>Home</Link></li>
          <li><Link href='/about' prefetch>About</Link></li>
          <li><Link href='/contact' prefetch>Contact</Link></li>
        </ul>
      </div>
    </nav>

  </Wrapper>
)

export default Nav