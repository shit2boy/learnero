import React from "react";
import "./Pricing.css";

const Pricing = ({ title, types }) => {
  return (
    <div className="container mt-4">
      <h3 className="title">{title}</h3>
      <hr style={{ width: "15%" }} className="hr-line" />

      <div style={{ marginTop: "50px" }}>
        <div className="row">
          {types.map((type) => (
            <div className="col-lg-4 col-md col-sm mb-3">
              <div className="pricing-card">
                <div className="card card-type" style={{ maxWidth: "350px" }}>
                  <h2 className="text-center card-title ">{type.type}</h2>
                  <div className="price-label">
                    {" "}
                    <h3 className="p-3">
                      <sup style={{ color: "white" }}>&#65284;</sup>
                      {type.price}
                      <sub className="">/Monthly</sub>
                    </h3>
                  </div>
                  <div>
                    <ul>
                      {type.features.map((item) => (
                        <li>
                          {" "}
                          <i
                            class="px-2 fa fa-check-square"
                            aria-hidden="true"
                          ></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
