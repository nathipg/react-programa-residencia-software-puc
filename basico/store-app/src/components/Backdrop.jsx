import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: ${({bgColor}) => bgColor ? bgColor : 'rgba(0, 0, 0, 0.5)'};
`;

const Backdrop = ({show, clickHandler, bgColor}) => (
  show ?
    <StyledBackdrop
      bgColor={bgColor}
      onClick={clickHandler} />
    : null
);

export default Backdrop;
