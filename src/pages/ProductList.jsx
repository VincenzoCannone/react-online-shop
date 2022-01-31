import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowBack } from "@material-ui/icons";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Home>
        <Title>{cat}</Title>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="categories"
        >
          <Title>
            <ArrowBack style={{ color: "red" }}></ArrowBack>
            Go back
          </Title>
        </Link>
      </Home>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>brown</Option>
            <Option>yellow</Option>
            <Option defaultValue>orange</Option>
          </Select>
          {/* <Select name="gender" onChange={handleFilters}>
            <Option disabled>Gender</Option>
            <Option>women</Option>
            <Option defaultValue>unisex</Option>
            <Option>men</Option>
          </Select> */}
          {cat === "sunglasses" ? (
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>oversize</Option>
              <Option defaultValue>standard</Option>
              <Option>small</Option>
            </Select>
          ) : (
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>xs</Option>
              <Option>s</Option>
              <Option defaultValue>m</Option>
              <Option>l</Option>
              <Option>xl</Option>
              <Option>xxl</Option>
            </Select>
          )}
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          {cat === "sunglasses" || cat === "tshirt" ? (
            <></>
          ) : (
            <Select name="season" onChange={handleFilters}>
              <Option disabled>Season</Option>
              <Option defaultValue>spring</Option>
              <Option>summer</Option>
              <Option>autumn</Option>
              <Option>winter</Option>
            </Select>
          )}
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
