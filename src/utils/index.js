const Utils = {};

Utils.getRouteInfo = (navTree, path) => {
  let route;
  navTree.forEach((p) => {
    if (path.indexOf(p.path) >= 0) {
      route = p;
    }
  });
  return route;
}

export default Utils;
