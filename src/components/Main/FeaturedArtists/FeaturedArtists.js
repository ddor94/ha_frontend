import React from 'react';
import ListArtists from '../ListArtists/ListArtists';

import { useQuery } from '@apollo/react-hooks';
import { getArtists } from '../../../utils/apiCalls';

function RenderFeaturedArtists() {
  const { loading, error, data } = useQuery(getArtists);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ListArtists
      featured={true}
      artists={data.artists || []}
    />
  )
};

class FeaturedArtists extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">
          Artistas populares
        </h2>

        <RenderFeaturedArtists />
      </div>
    );
  }
}

export default FeaturedArtists;
