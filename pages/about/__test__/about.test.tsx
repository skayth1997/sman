/** @jest-environment jsdom */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import About, { getServerSideProps } from "../index";
import React from "react";
import fetchMock from "fetch-mock";

const renderComponent = (
  aboutState = { title: "ABOUT US", description: "description" }
) => {
  return render(<About aboutState={aboutState} />);
};

describe("About Page", () => {
  const fakeFetch = (response) => {
    return fetchMock.getOnce(`${process.env.BACKEND_DOMAIN}about`, response);
  };
  afterEach(() => {
    fetchMock.restore();
  });

  it("should fetch a simple URL correctly", async () => {
    const response = { data: "someData" };
    const fetchAboutMock = fakeFetch(response);
    const { props } = await getServerSideProps();

    await waitFor(() => expect(fetchAboutMock.called()).toBeTruthy());
    expect(props).toEqual({ aboutState: response });
  });

  it("should title appear after fetch", async () => {
    renderComponent();
    const h1Element = screen.getByRole("aboutUs");
    expect(h1Element).toHaveTextContent("ABOUT US");
  });

  it("should description appear after fetch", async () => {
    renderComponent();
    const paragraphElement = screen.getByRole("description");
    expect(paragraphElement).toHaveTextContent("description");
  });
});
