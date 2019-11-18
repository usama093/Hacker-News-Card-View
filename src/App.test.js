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

let container = null;
const testData = {
  title: "Test Ttile",
  by: "Tester",
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  score: "0"
};
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders card view and check given props", () => {
  act(() => {
    render(<CardView post={testData} />, container);
  });
  expect(container.textContent).toContain(
    truncate(testData.title, defaultTitleSize)
  );
  expect(container.textContent).toContain(testData.score);
  expect(container.textContent).toContain(testData.by);
  expect(container.textContent).toContain(
    truncate(testData.text, defaultTextSize)
  );
});

it("checks if truncate is working", () => {
  const limit = 25;
  const truncateText = truncate(testData.text, 25);
  expect(truncateText.length === limit);
});

it("checks if Api return data", async () => {
  const data = await axios(getPostsIdUrl);
  expect(data.status === 200);
});

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
