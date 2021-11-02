// import React, {useCallback, useContext, useEffect, useState} from 'react';
// import { render, act, screen, cleanup, waitFor } from '@testing-library/react';
// import {AuthContext} from '../../context/AuthContext';
// import {useHttp} from '../../hooks/http.hook';
// import {Loader} from '../../components/Loader/Loader';
// import {UsersList} from '../../components/UsersList/UsersList';
// import { BrowserRouter as Router } from 'react-router-dom';
// import {UsersPage} from '../UsersPage';

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve([{
//       _id: '617c0b1507d9aa367606e805',
//       email: "email@gmail.com",
//       password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeJSpMaobf9fAmTtF8IsnES69OWa",
//       username: "username",
//       profiles: [],
//       isAdmin: false
//     }, {
//       _id: '617c0b1507d9aa367606e8fg',
//       email: "mail@gmail.com",
//       password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeMKpMaobf9fAmTtF8IsnES69OWa",
//       username: "name",
//       profiles: [],
//       isAdmin: true
//     }])
// }));

// describe('Users Page', () => {
//   it('it shows a list of users', async () => {
//     const fakeResponse = [{
//       _id: '617c0b1507d9aa367606e805',
//       email: "email@gmail.com",
//       password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeJSpMaobf9fAmTtF8IsnES69OWa",
//       username: "username",
//       profiles: [],
//       isAdmin: false
//     }];
//
//     jest.spyOn(global, "fetch").mockImplementation(() => {
//       return Promise.resolve(fakeResponse);
//     });
//
//     await act( async () => render(
//       <Router>
//         <UsersPage />
//       </Router>
//       ));
//
//     await waitFor(() => {
//       expect(screen.getByText('email@gmail.com')).toBeInTheDocument();
//     })
//
//     global.fetch.mockRestore();
//   });
// });

// import React from 'react';
// import {UsersPage} from "../UsersPage";
// import {BrowserRouter} from "react-router-dom";
// import {render, act, cleanup, waitFor} from "@testing-library/react";
// import {useHttp} from "../../hooks/http.hook";
//
// const fakeData = {
//   _id: '617c0b1507d9aa367606e805',
//   email: "email@gmail.com",
//   password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeJSpMaobf9fAmTtF8IsnES69OWa",
//   username: "username",
//   profiles: [],
//   isAdmin: false
// };
// const fetchMock = jest
//   .spyOn(global, 'fetch')
//   .mockImplementation(() =>
//     Promise.resolve({ json: () => Promise.resolve(fakeData) })
//   )
//
// describe('UsersPage', () => {
//   it("renders users data", async () => {
//     await act( async () => render(
//         <UsersPage />
//       ));
//
//         await waitFor(() => {
//       expect(screen.getByText('email@gmail.com')).toBeInTheDocument()
//         })
//   });
// });

// import React from 'react';
// import {UsersPage} from "../UsersPage";
// import {render, act, waitFor} from "@testing-library/react";
//
// describe('UsersPage', () => {
//   let originFetch;
//
//   beforeEach(() => {
//     originFetch = global.fetch;
//   });
//
//   afterEach(() => {
//     global.fetch = originFetch;
//   });
//
//   it("renders users data", async () => {
//     const fakeData = [{
//       _id: '617c0b1507d9aa367606e805',
//       email: "email@gmail.com",
//       username: "username",
//       profiles: [],
//       isAdmin: false
//     }];
//
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeData) };
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
//     global.fetch = mockedFetch;
//
//     const {getByText} = render(<UsersPage />);
//     // await act(async () => render(<UsersPage />));
//
//     await waitFor(() => {
//       expect(getByText("username")).toBeInTheDocument();
//     })
//   });
// });

// import React from 'react';
// import { render, screen, waitFor, act } from '@testing-library/react';
//
// import {UsersPage} from "../UsersPage";
//
// describe("Test", () => {
//   let originalFetch;
//
//   beforeEach(() => {
//     originalFetch = global.fetch;
//     global.fetch = jest.fn(() => Promise.resolve({
//       json: () => Promise.resolve({
//         value: [{
//       _id: '617c0b1507d9aa367606e805',
//       email: "email@gmail.com",
//       username: "username",
//       profiles: [],
//       isAdmin: false
//     }]
//       })
//     }));
//   });
//
//   afterEach(() => {
//     global.fetch = originalFetch;
//   });
//
//   it('Should have proper description after data fetch', async () => {
//     await act(async () => render(<UsersPage />));
//     const description = await screen.findByTestId('description');
//     await waitFor(() => {
//       expect(getByText("username")).toBeInTheDocument();
//     })
//   });
// });
