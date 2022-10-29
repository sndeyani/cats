import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`

export const Img = styled.img`
  height: 400px;
  object-fit: cover
`
export const ImageCard = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 10px;
  border: 1px solid #c4c4c4;
  width: 30% ;
  margin-top: 10px
`
export const ImageContainer= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%
`

export const Button = styled.div`
  padding: 10px 15px;
  width: 150px;
  border: none;
  border-radius: 10px;
  text-align: center;
  margin: 40px auto;
  background-color: #000;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2d2d2d;
  }
`


export const SidebarContainer = styled.div`
  padding: 20px 10px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 120px;
  background-color: #000;
`
export const Menu = styled.div`
  padding: 12px 18px;
  border-bottom: 1px solid #333333;
  cursor: pointer;

  &:hover {
    background-color: #2d2d2d;
  }
`
// ${props => props.active && `
//    background: white;
//    color: black;
//  `}

export const MenuItem = styled.a`
  color: #EFF2F7;
  text-decoration: none;
  font-weight: 600;
`

export const Spinner = styled.div`
  margin: 15% auto;
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; 
  border-top: 10px solid #000; 
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const Circle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`