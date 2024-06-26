import React, { useState } from "react";
import "./Products.css";
import { useGetProductsQuery } from "../../context/api/productApi";
import noimage from "../../assets/images/noimage.jpg";
import { Pagination, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SkeletonComponent from "../skelton/Skelton";
import rating from "../../assets/images/rating.svg";
const Products = () => {
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("page") || 6
  );
  const { data, isFetching } = useGetProductsQuery({
    limit: perPageCount,
    page,
  });

  let totalPagination = Math.ceil(data?.data?.count / perPageCount);

  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };

  const handleChangePage = (e) => {
    let value = e.target.value;
    setPerPageCount(value);
    localStorage.setItem("page", value);

    let result = Math.ceil((page * perPageCount) / value);

    setPage(result);
    sessionStorage.setItem("page-count", result);
  };
  return (
    <div>
      <p className="products__title">Find your favourite smart watch.</p>
      <h3 className="products__title2">Our Latest Products</h3>
      {isFetching ? (
        <SkeletonComponent perPageCount={perPageCount} />
      ) : (
        <div className="products__items">
          {data?.data?.products?.map((product) => (
            <div className="card" key={product.id}>
              {product.urls[0] ? (
                <img
                  src={product.urls[0]}
                  width={330}
                  height={330}
                  alt="rasm"
                />
              ) : (
                <div>
                  <img src={noimage} alt="noimg" width={330} height={330} />
                </div>
              )}
              <h3 className="product__title">{product.title}</h3>
              <img src={rating} alt="rating" />
              <p className="product__price">
                <span>${product.oldPrice}</span> ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPagination}
          page={page}
          onChange={handleChangePagination}
          color="primary"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <FormControl
          sx={{
            m: 1,
            minWidth: 80,
          }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">Pages</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={perPageCount}
            onChange={handleChangePage}
            autoWidth
            label="Pages"
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Products;
