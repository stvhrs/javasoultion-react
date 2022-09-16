import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import ProductgridList from "../../wrappers/product/ProductgridList";
import HeroSliderEighteen from "../../wrappers/hero-slider/HeroSliderEighteen";

const HomeFashion = () => {
  let width = window.innerWidth;


  let widget;
  let desktop = <TabProduct></TabProduct>
  let mobile = <div className="col-lg-9">

    <div className="shop-bottom-area mt-35" >
      <div className={`row grid two-column`}>
        <ProductgridList products={[{


          "id": "Bowan",
          "sku": "asdf253",
          "name": "Bowan",
          "price": 4.5,
          "discount": 0,
          "new": false,
          "rating": 3,
          "saleCount": 20,
          "category": ["christmas"],
          "tag": ["christmas"],
          "stock": 60,
          "image": [
            "/assets/img/product/Bowan1.png",
            "/assets/img/product/Bowan2.png",
           
          ],
          "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        },
        {


          "id": "Rotten_Kecoa",
          "sku": "asdf253",
          "name": "Rotten Kecoa",
          "price": 4.5,
          "discount": 0,
          "new": false,
          "rating": 3,
          "saleCount": 20,
          "category": ["christmas"],
          "tag": ["christmas"],
          "stock": 60,
          "image": [
            "/assets/img/product/RottenKecoa1.png",
            "/assets/img/product/RottenKecoa2.png",
            "/assets/img/product/RottenKecoa3.png",
           
          ],
          "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }, {


          "id": "Rotten_Kutu",
          "sku": "asdf253",
          "name": "Rotten Kutu",
          "price": 4.5,
          "discount": 0,
          "new": false,
          "rating": 3,
          "saleCount": 20,
          "category": ["christmas"],
          "tag": ["christmas"],
          "stock": 60,
          "image": [
            "/assets/img/product/RottenKutu1.png",
            "/assets/img/product/RottenKutu2.png",
            "/assets/img/product/RottenKutu3.png",
    
          ],
          "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }, {


          "id": "Rotten_Semut",
          "sku": "asdf253",
          "name": "Rotten Semut",
          "price": 4.5,
          "discount": 0,
          "new": false,
          "rating": 3,
          "saleCount": 20,
          "category": ["christmas"],
          "tag": ["christmas"],
          "stock": 60,
          "image": [
            "/assets/img/product/RottenSemut1.png",
            "/assets/img/product/RottenSemut2.png",
            "/assets/img/product/RottenSemut3.png",
          
          ],
          "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }
        ]
        } spaceBottomClass="mb-100" />
      </div> </div>

  </div>;
  if (width > 768) {
    // set renderComponent property according to window size
    // components are declared using JSX, not string (do not use ``)
    widget = desktop;
  } else {
    widget = mobile;
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Java Solution</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderEighteen />

        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}

        {/* tab product */}

        {widget}


        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
