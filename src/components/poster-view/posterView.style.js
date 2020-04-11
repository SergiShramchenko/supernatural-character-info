import styled from 'styled-components';
import img from '../../assets/supernatural.jpg';

export const PosterViewContainer = styled.div`
  width: 68rem;
  height: 37.7rem;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in;
  }
`;
