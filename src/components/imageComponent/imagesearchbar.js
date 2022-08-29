import { useEffect, useState } from "react";
import React from "react";
import { imageApi } from "../../lib/apis/unsplash";
import Grid from "./imagegrid";
import { useDispatch } from "react-redux";
import { fetchimagesSuccess } from "../../redux/images/imageAction";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Search(props) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { images, setImages } = props;
  const [page, setPage] = useState(2);
  const image = useSelector((state) => state.image);
  let index;
  useEffect(() => {
    reduxSetValue();
  }, [id]);

  const reduxSetValue = () => {
    for (let i = 0; i <= image.length; i++) {
      if (id && image[i].id === id) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      setData(image[index].title);
      return setImages(image[index].images);
    }
  };
  const handlerSearch = (page) => {
    imageApi(data, page)
      .then((res) => {
        if (page === 1) {
          dispatch(fetchimagesSuccess(res.data.results, data));
          return setImages(res.data.results);
        }
        if (page >= 2) {
          return setImages([...images, ...res.data.results]);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  const pageIncrement = async () => {
    setPage((page) => {
      return page + 1;
    });
    handlerSearch(page);
  };
  return (
    <div className="root">
      <div className="search">
        <h2> Image Search </h2>
        <input
      type="text"
      onKeyPress={(e) => e.key === "Enter" && handlerSearch(1)}
      onChange={(e) => setData(e.target.value)}
      value={data || ""}
    />
      </div>
      <Grid images={images} />
      <div>
        <button onClick={pageIncrement}>Load more</button>
      </div>
    </div>
  );
}

export default Search;
