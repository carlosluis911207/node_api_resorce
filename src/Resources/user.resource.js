const userResource = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => dataFormat(item));
  } else {
    return dataFormat(data);
  }
};

const dataFormat = (item) => {
  return {
    id: item.id,
    name: item.name,
  };
};

export default userResource;
