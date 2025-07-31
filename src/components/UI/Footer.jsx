import React from 'react';
import { MdPlace } from "react-icons/md";
import { IoCallSharp, IoMailOpen } from "react-icons/io5";
import footerData from '../../../src/Api/contact.json';

const Footer = () => {
  const iconData = {
    MdPlace: <MdPlace size={32} className="text-primary mb-2" />,
    IoCallSharp: <IoCallSharp size={32} className="text-primary mb-2" />,
    IoMailOpen: <IoMailOpen size={32} className="text-primary mb-2" />
  };

  return (
    <div className="container py-5 container-footer">
      <div className="row justify-content-center">
        {footerData.map((currEle, index) => {
          const { icon, title, details } = currEle;
          return (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  {iconData[icon]}
                  <h5 className="card-title mt-2">{title}</h5>
                  <p className="card-text text-muted">{details}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
