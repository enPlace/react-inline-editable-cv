const deleteInfo = (userInfo, setUserInfo, setPos, id) => {
  const newInfo = userInfo.filter((obj) => obj.id !== id);
  let ids = 0;
  if (newInfo.length < 1) {
    setUserInfo(false);
    setPos(0);
  } else {
    newInfo.forEach((info) => {
      info.id = ids;
      ids++;
    });
    setUserInfo(newInfo);
    setPos(newInfo.length);
  }
};

export { deleteInfo };
