const mySelf = {
  name: "hadis",
  friends: [
    {
      name: "mohaddeseh",
      friends: [
        {
          name: "Mahyar",
        },
        {
          name: "Negar",
        },
      ],
    },
    {
      name: "Zahra",
      friends: [
        {
          name: "Mahsa",
        },
        {
          name: "Fatemeh",
        },
      ],
    },
  ],
};

function getFriendNames(person) {
  let collectFriends = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    collectFriends.push(friend.name);
    collectFriends.push(...getFriendNames(friend));
  }
  return collectFriends;
}

console.log(getFriendNames(mySelf));

let newArr = [1, 2, 3, 4].map((el) => el * 2);
let newArr2 = [1, 2, 3, 4, 5].find((el) => el >= 4);
// newArr.push()
console.log(newArr);
console.log(newArr2);
