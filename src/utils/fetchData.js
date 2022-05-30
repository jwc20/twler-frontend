import * as d3 from "d3";

export const getTotalsData = () => {
  d3.json(
    "http://127.0.0.1:3000/events/years/2021/xxxii-olympic-games/result"
  ).then((data) => {
    // console.log(data)
    return data
  });
};
