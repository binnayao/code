function selfInfoAuthorize(
  clientId,
  corpId,
  cancelAuthorize = false // 如果为true，则触发取消授权
) {
  if (!compareVersion(version, "6.0.5")) {
    return endCb();
  }
  let path = "pages/home/home";
  cancelAuthorize && (path = "pages/cancel/index");
  return openAuthMiniApp({
    panelHeight: "percent45",
    path, //不要改,这里是小程序dingwlanwvdmrtjjwdmd下的一个页面地址
    extraData: {
      clientId, // 应用ID(唯一标识)
      corpId, //三方企业ID
      rpcScope: "Contact.User.Read",
      fieldScope: "Contact.User.mobile",
      type: 0,
      ext: JSON.stringify({}),
      from: "",
    },
  });
}

selfInfoAuthorize
  .then(() => {})
  .finally(() => {
    endCb();
  });
