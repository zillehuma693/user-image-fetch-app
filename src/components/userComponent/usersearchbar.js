import { useState, useEffect } from "react";
import React from "react";
import { userApi } from "../../lib/apis/unsplash";
import Grid from "./usergrid";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchUsersSuccess } from "../../redux/users/userAction";
import { useSelector } from "react-redux";
function Search(props) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState(null);
  const { images, setImages } = props;
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let index;
  useEffect(() => {
    reduxSetValue();
  }
  // eslint-disable-next-line
  , [id]);
  const reduxSetValue = () => {
    for (let i = 0; i <= user.length; i++) {
      if (id) {
        if (user[i].id === id) {
          index = i;
          break;
        }
      }
    }
    if (index >= 0) {
      setData(user[index].title);
      console.log(user[index]);
      return setImages(user[index].images);
    }
  };
  const handlerSearch = (page) => {
    userApi(data, page)
      .then((res) => {
        if (page === 1) {
          dispatch(fetchUsersSuccess(res.data.results, data));
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
        <h2> User search </h2>
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
