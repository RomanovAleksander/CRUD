import React from "react";
import {render, act, waitFor} from "@testing-library/react";
import {DashboardPage} from "../DashboardPage";
import "@testing-library/jest-dom/extend-expect";

const data = {
  users: [{
    _id: '617c0b1507d9aa367606e805',
    email: "email@gmail.com",
    username: "username",
    profiles: [],
    isAdmin: false
  }],
  profiles: {
    profiles: [{
      _id: "617fb26a35068083bd343f3r",
      name: "profile",
      gender: "male",
      birthdate: "1999-12-20",
      city: "Kyiv",
      owner: "617c0b1507d9aa367606e805"
    }],
    adults: 0
  }
};

describe("Dashboard", () => {
  let originFetch;
  beforeEach(() => {
    originFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originFetch;
  });

  it("should fetch dashboard data from API",() => {
    const fakeResponse = data;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    act(() => {render(<DashboardPage />)});

    waitFor(() => {
      expect(mockedFetch).toBeCalledTimes(2)
    });
  });

  it("should render Dashboard",() => {
    const fakeResponse = data;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    act(() => {render(<DashboardPage />)});

    waitFor(() => {
      expect(screen.getByTestId('dashboard')).toBeInTheDocument()
    });
  });

  it("should render loader",() => {
    const fakeResponse = null;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    act(() => {render(<DashboardPage />)});

    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    });
  });
})