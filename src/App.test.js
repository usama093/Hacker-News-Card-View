import React, { Component } from "react";
import App from "./App";
import { render, unmountComponentAtNode, mount } from "react-dom";
import axios from "axios";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { act } from "react-dom/test-utils";
import CardView from "./Components/cardView";
import { truncate } from "./Utils/helper";
import {
  defaultTextSize,
  defaultTitleSize,
  getPostsIdUrl
} from "./Utils/constants";

// jest.mock("axios");
// enzyme.configure({ adapter: new Adapter() });

// describe("App component", () => {
//   describe("when rendered", () => {
//     it("should fetch a list of posts", () => {
//       const getSpy = jest.spyOn(axios, "default");
//       shallow(<App />);
//       expect(getSpy).toBeCalled();
//     });
//   });
// });
//TODO mock API call
