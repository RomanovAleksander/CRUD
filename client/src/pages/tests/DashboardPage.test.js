import React from "react";
import {render, waitFor} from "@testing-library/react";
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

describe("DashboardPage", () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch')
      .mockImplementation((url) => {
        switch (url) {
          case '/api/user/':
            return Promise.resolve({ json: () => Promise.resolve(data.users) });
          case '/api/profile/all':
            return Promise.resolve({ json: () => Promise.resolve(data.profiles) });
          default:
            break
        }
      }
      )
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch dashboard data from API",async () => {
    render(<DashboardPage />);

    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(2)
    });
  });

  it("should render Dashboard",async () => {
    const {getByTestId} = render(<DashboardPage/>);

    await waitFor(() => {
      expect(getByTestId('dashboard')).toBeInTheDocument()
      expect(getByTestId('users-length').innerHTML).toBe(`${data.users.length}`)
    })
  });

  it("should render loader",async () => {
    const {getByTestId} = render(<DashboardPage />);

    await waitFor(() => {
      expect(getByTestId('loader')).toBeInTheDocument()
    });
  });
})