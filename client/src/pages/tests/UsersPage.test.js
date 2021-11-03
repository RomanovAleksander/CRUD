import React from 'react';
import { UsersPage } from "../UsersPage";
import { render, waitFor } from "@testing-library/react";

const fakeData = [{
  _id: '617c0b1507d9aa367606e805',
  email: "email@gmail.com",
  username: "username",
  profiles: [],
  isAdmin: false
}];

describe('UsersPage', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeData)
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders users data',() => {
    const {getByText} = render(<UsersPage />);

    waitFor(() => {
      expect(getByText(fakeData.username)).toBeInTheDocument();
    });
  });

  it('users state should be changed',() => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    render(<UsersPage />);

    waitFor(() => {
      expect(setState).toHaveBeenCalledWith(fakeData);
    });
  });
});
