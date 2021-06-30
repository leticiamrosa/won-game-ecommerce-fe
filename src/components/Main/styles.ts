import styled from 'styled-components'

const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`

const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

const Title = styled.h1``

const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export default {
  Wrapper,
  Title,
  Logo,
  Description,
  Illustration
}
