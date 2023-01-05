import { Item } from "./Item";
import PropTypes from "prop-types";

import { Loading, Title } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const ListarItems = ({ items }) => {
  const { images, isLoading } = useFetchGifs(items);

  // se pasa a un hook (useFetchGifs)
  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   const newImages = await getGifs(items);
  //   setImages(newImages);
  // };
  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <Title titulo={items} />
      <Loading isLoading={isLoading} />
      <div className="card-grid">
        {images.map((image) => (
          <Item key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

ListarItems.propTypes = {
  items: PropTypes.string.isRequired,
};
