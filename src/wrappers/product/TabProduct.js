import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category
}) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <SectionTitle titleText="DAILY DEALS!" positionClass="text-center" />
        <Tab.Container defaultActiveKey="bestSeller">
            
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="new"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="bestSeller"
                  limit={4}
                  spaceBottomClass="mb-150"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="saleItems"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProduct;
