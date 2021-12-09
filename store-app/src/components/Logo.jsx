import styled from 'styled-components';

const StyledLogo = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  overflow: hidden;

  div {
    background-color: white;
  }

  .line-1 {
    width: 15%;
    height: 7%;
    position: absolute;
    left: 8%;
    top: 25%;
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg); 
    border-bottom-left-radius: 35%;
  }

  .line-2 {
    width: 35%;
    height: 7%;
    position: absolute;
    left: 6%;
    top: 40%;
    -webkit-transform: rotate(80deg);
    -moz-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    transform: rotate(80deg); 
  }

  .line-2:before {
    content: "";
    width: 120%;
    height: 100%;
    position: absolute;
    left: 45%;
    top: -280%;
    -webkit-transform: rotate(-80deg);
    -moz-transform: rotate(-80deg);
    -ms-transform: rotate(-80deg);
    transform: rotate(-80deg); 
    background-color: inherit;
  }

  .line-2:after {
    content: "";
    width: 70%;
    height: 100%;
    position: absolute;
    left: 59%;
    top: -670%;
    background-color: inherit;
    -webkit-transform: rotate(40deg);
    -moz-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg); 
    border-top-left-radius: 50%;
    border-bottom-left-radius: 25%;
  }

  .line-3 {
    width: 30%;
    height: 7%;
    position: absolute;
    left: 33%;
    top: 45%;
  }

  .line-3:after {
    content: "";
    width: 124%;
    height: 100%;
    position: absolute;
    top: -150%;
    left: -5%;
    background-color: inherit;
  }

  .wheel {
    width: 12%;
    height: 12%;
    border-radius: 100%;
    position: absolute;
    left: 28%;
    bottom: 20%;
  }

  .wheel:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 100%;
    position: absolute;
    left: 200%;
    bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 0.5rem;
  color: white;
`;

const Logo = ({clickHandler}) => {
  return (
    <StyledLogo onClick={clickHandler}>
      <Icon>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="wheel"></div>
      </Icon>
      <Title>StoreApp</Title>
    </StyledLogo>
  );
}

export default Logo;