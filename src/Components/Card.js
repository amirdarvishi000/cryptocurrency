import React from "react";

const Card = ({ item }) => {
      return (
            <div>
                  <div className="card my-2">
                        <ul className="card-body d-flex flex-rows align-items-center m-0 justify-content-center  list-unstyled">
                              <li className="col-2">{item.name}</li>
                              <li className="col-2">{item.symbol}</li>
                              <li className="col-2">
                                    <img
                                          style={{
                                                maxWidth: "40px",
                                          }}
                                          src={item.image}
                                    />
                              </li>
                              <li className="col-2 align-items-center">
                                    {item.price_change_percentage_24h < 0 ? (
                                          <p className="m-0 coin-percent text-danger">
                                                {item.price_change_percentage_24h.toFixed(
                                                      2
                                                )}
                                                %
                                          </p>
                                    ) : (
                                          <p className="m-0 coin-percent text-success">
                                                {item.price_change_percentage_24h.toFixed(
                                                      2
                                                )}
                                                %
                                          </p>
                                    )}
                              </li>
                              <li className="col-2">
                                    {item.market_cap.toLocaleString()}
                              </li>
                        </ul>
                  </div>
            </div>
      );
};
export default Card;
