// import styled from 'styled-components'

// const Footer = styled.footer`
//   padding: 15px;
//   background: #F5F5F5;
// `

// export default Footer

import styled from 'styled-components'

const Wrapper = styled.footer`
  
`

const Footer = () => (
  <Wrapper>
<footer className="footer-section">
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>Copyright © 2018, All Right Reserved <a href="https://github.com/shawon3719">Masudul Hasan Shawon</a></p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  </Wrapper>
)

export default Footer