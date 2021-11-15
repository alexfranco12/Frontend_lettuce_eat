import styled from 'styled-components'
import useAxios from '../utils/useAxios';
import { SearchForm } from '../components';


export const HomePage = () => {
  const { data, error, loading } = useAxios({
    method: 'get',
    url: '/restaurants',
  })

  console.log(data)

  return (
    <HomePageStyled>
      <SearchForm/>

      <h4> Featured Restaurants </h4>
      {loading ? <div className="featured-restaurants">LOADING...</div> : 
        <div className="featured-restaurants">
          {data.map(r => (
            <div className="restaurant-card">
              <div className="restaurant-name">{r.name}</div>
            </div>
          ))}
        </div>
      }
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  & .featured-restaurants {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
`;