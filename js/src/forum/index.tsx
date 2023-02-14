import DirectoryListingPage from "./components/DirectoryListingPage";
import DirectoryListingResolver from "./resolvers/DirectoryListingResolver";
import LinkButton from "flarum/common/components/LinkButton";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import IndexPage from "flarum/forum/components/IndexPage";

app.initializers.add("nearata-directory-listing", () => {
  app.routes.nearataDirectoryListing = {
    path: "/directoryListing",
    component: DirectoryListingPage,
    resolverClass: DirectoryListingResolver,
  };

  extend(IndexPage.prototype, "navItems", function (items) {
    items.add(
      "nearataDirectoryListing",
      <LinkButton
        icon="fas fa-folder"
        href={app.route("nearataDirectoryListing")}
      >
        {app.translator.trans("nearata-directory-listing.forum.page_title")}
      </LinkButton>,
      -1
    );
  });
});
