// import React from 'react';
// import UserDetail from './UserDetail';
// import { render, waitFor, act } from '@testing-library/react';
// import { Router } from "react-router-dom";
// import {AuthContext} from "../../context/AuthContext";
// import {Provider, useDispatch, useSelector} from "react-redux";
// import {createMemoryHistory} from "history";
// import configureStore from "redux-mock-store";
// import {setUser} from "../../actions/users/actions";
//
// const mockStore = {
//   user: {
//     user: fakeData,
//     loadingState: false
//   },
// };
//
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//     useDispatch: jest.fn()
// }));
//
// const fakeData = {
//   _id: '617c0b1507d9aa367606e805',
//   email: "email@gmail.com",
//   username: "username",
//   profiles: [],
//   isAdmin: false
// };
//
// describe('UserDetail', () => {
//   const history = createMemoryHistory();
//
//   beforeEach(() => {
//     jest.spyOn(global, 'fetch').mockResolvedValue({
//         json: jest.fn().mockResolvedValue(fakeData)
//     });
//   });
//
//   afterEach(() => {
//     jest.restoreAllMocks();
//   });
//
//   it('renders userDetail',() => {
//
//     const {getByText} = render(
//
//               <UserDetail/>
//
//       );
//
//
//      waitFor(() => {
//        screen.debug
//        expect(getByText(fakeData.username)).toBeInTheDocument();
//        // expect(container.getByText(fakeData.email)).toBeInTheDocument();
//        // expect(container.getByText('admin')).toBeInTheDocument();
//        // expect(setUser).toBeCalled();
//      })
//   });
// });
