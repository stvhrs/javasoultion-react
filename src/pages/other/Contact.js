import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Java Solution | Contact</title>
        <meta
          name="description"
          content="Contact of Java Solution react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="-7.40239347899013" longitude="110.84066026559094" />
            </div>
            <div className="custom-row-3">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>0813 2507 6363</p>

                    </div>
                  </div>



                </div>
                
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">

                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:javasolution1st@gmail.com">javasolution1st@gmail.com</a>
                      </p>
                      <p>
                        <a href="//javasolution.store">javasolution.store</a>
                      </p>
                    </div>
                  </div>

                </div>

              </div>
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">

                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      
                      <p>Pantirejo 04 Tegaldowo</p>
                      <p>Gemolong Sragen</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
