const getAdultsCount = require('../utils/profiles');
const profiles = [
  {
    _id: "617fb26a35068083bd343f2e",
    name: "profile",
    gender: "male",
    birthdate: "1999-12-20",
    city: "Kyiv",
    owner: {$oid: "617cfba211dbfc5b26126c61"}
  },
  {
    _id: "617fb26a35068083bd343f3k",
    name: "profile2",
    gender: "male",
    birthdate: "2020-12-20",
    city: "Kyiv",
    owner: {$oid: "617cfba211dbfc5b26126c61"}
  }
]

it('should return length equal to one', () => {
  const res = getAdultsCount(profiles);
  expect(res).toEqual(1);
})
