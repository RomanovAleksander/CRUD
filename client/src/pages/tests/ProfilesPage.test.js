// import React from 'react';
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';
// import ProfilesPage from '../ProfilesPage';
// import {render, fireEvent} from "@testing-library/react";
//
// const mockStore = configureStore([]);
//
// describe('Header', () => {
//   let store;
//   let component;
//   let isOpen = false;
//
//   beforeEach(() => {
//     store = mockStore({
//       modal: {
//         isOpen: isOpen
//       },
//       profiles: {
//         profile: null,
//         isCreate: true
//       },
//       user: {
//         user: null
//       }
//     });
//
//     component = render(
//       <Provider store={store}>
//         <ProfilesPage/>
//       </Provider>
//     );
//     });
//
//   it('should not render modal form', () => {
//     const modal = component.queryByTestId('modal-form');
//     expect(modal).not.toBeInTheDocument();
//     isOpen = true;
//   });
//
//   // it('should render modal form', () => {
//   //   const modal = component.queryByTestId('modal-form');
//   //   expect(modal).toBeInTheDocument();
//   // });
// });
