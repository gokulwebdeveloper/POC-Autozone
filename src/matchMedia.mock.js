window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

//Will remove once we close the snapshot error with SlickSlider
// window.matchMedia = jest.fn().mockImplementation(query => {
//     return {
//       matches: false,
//       media: query,
//       onchange: null,
//       addListener: jest.fn(),
//       removeListener: jest.fn(),
//     };
//   });