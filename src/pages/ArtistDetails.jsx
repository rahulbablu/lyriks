import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetArtistDetailsQuery,
} from "../redux/services/shazamCore";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const ArtistDetails = () => {
  const {id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((s) => s.player);

  const { data: artistData, isFetching: isFetchingArtistDetails, error } =
  useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails)
    return <Loader title="Loading artist details" />;

  if (error) return <Error />;

const result = Object.values(artistData.data[0].views);
console.log(artistData)
console.log(result[0].data)
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={result[0].data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
