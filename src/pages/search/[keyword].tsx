import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useSearchRecipeQuery } from 'store/services';
import { useState } from 'react';
const RESULTS_PER_PAGE = 12;

const Search: NextPage = ({ data }) => {
  // const {
  //   query: { keyword },
  // } = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const { data, error, isLoading } = useSearchRecipeQuery({
  //   keyword,
  //   number: RESULTS_PER_PAGE,
  //   offset: (currentIndex - 1) * RESULTS_PER_PAGE,
  // });
  // console.log(data);
  return (
    <div>
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { keyword } = context.query;
  const { results: data } = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com//recipes/search`, {
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
    params: {
      query: keyword,
      number: RESULTS_PER_PAGE,
      offset: 0,
    },
  }).then((res) => res.json());
  return {
    props: { data }, 
  };
}
export default Search;
