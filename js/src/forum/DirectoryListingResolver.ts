import DefaultResolver from "flarum/common/resolvers/DefaultResolver";

export default class DirectoryListingResolver extends DefaultResolver {
  makeKey() {
    let path = m.route.param("path");

    if (!path) {
      path = "";
    }

    return path;
  }
}
