import usersData from "../db/VerifiedUsers";

function getAllUsers() {
  let data = [];
  data = usersData;
  return [200, { data, status: 200 }];
}

export const addUser = async (payload: any) => {
  const data = payload;
  let user;

  const isAlready = usersData.some((u: any) => u.email === data.email);

  if (isAlready) {
    return [400, { message: "This email is already in use.", status: 400 }];
  }

  user = {
    ...data,
    id: Math.random(),
    password: data.password,
    email: data.email,
  };

  usersData.unshift(user);
  return [201, { message: "Invitation Sent...", status: 201 }];
};
export const updateUser = async (payload: any) => {
  if (!payload.email) return [400, { message: "Something went wrong" }];

  const index = usersData.findIndex((user) => user.email === payload.email);

  let updatedValues = {
    ...usersData[index],
    ...payload,
  };

  if (index !== -1) {
    usersData[index] = updatedValues;
    return [200, { message: "User Updated", status: 200 }];
  } else {
    return [400, { message: "This email does not exist" }];
  }
};

export const login = async (payload: any) => {
  if (!payload.email || !payload.password) {
    return [400, { message: "Something went wrong" }];
  }

  const isUserValid = usersData.filter(
    (u: any) => u.email === payload.email && u.password === payload.password
  );
  console.log("data- ", payload, "user exist - ", isUserValid);

  if (!isUserValid.length) {
    return [400, { message: "Credentials do not match.", status: 400 }];
  } else {
    const loggedInUser = usersData.filter(
      (u: any) => u.email === payload.email && u.password === payload.password
    );
    console.log("user detail = ", loggedInUser);

    return [200, { loggedInUser, status: 200 }];
  }
};

export default getAllUsers;
