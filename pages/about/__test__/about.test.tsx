/** @jest-environment jsdom */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../index";
import React from "react";
import fetchMock from "fetch-mock";

describe("About Page", () => {
  const fakeFetch = (response) => {
    return fetchMock.getOnce("/api/about", response);
  };
  afterEach(() => {
    fetchMock.restore();
  });

  it("should fetch a simple URL correctly", async () => {
    const fetchAboutMock = fakeFetch({});
    render(<About />);
    await waitFor(() => expect(fetchAboutMock.called()).toBeTruthy());
  });

  it("should title appear after fetch", async () => {
    fakeFetch({ title: "ABOUT US", description: "description" });
    render(<About />);
    const h1Element = screen.getByRole("aboutUs");
    await waitFor(() => expect(h1Element).toHaveTextContent("ABOUT US"));
  });

  it("should description appear after fetch", async () => {
    fakeFetch({ title: "ABOUT US", description: "description" });
    render(<About />);
    const paragraphElement = screen.getByRole("description");
    await waitFor(() =>
      expect(paragraphElement).toHaveTextContent("description")
    );
  });
});
