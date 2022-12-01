import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 20px;
`

export const SearchArea = styled.div`
  width: 700px;
  margin: 0 auto 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FilterInput = styled.input.attrs({ type: 'text' })`
  width: 400px;
  height: 30px;
  border: 2px solid #c5eff7;
  border-radius: 10px;
  font-family: 'regular';
  font-size: 15px;
  text-align: center;
  padding: 0 10px;
  margin-right: 20px;
`

export const SearchButton = styled.button`
  width: 100px;
  background-color: #2d55ff;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
  font-size: 100%;
`

export const Loading = styled.img`
  display: block;
  width: 48px;
  margin: auto;
`

export const ResultsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
`

export const NavigationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const NavigationButton = styled.button`
  width: 200px;
  background-color: #2d55ff;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
  margin: 10px;
`

export const CurrentPage = styled.span`
  font-family: 'regular';
  margin: 0 5px;
`
