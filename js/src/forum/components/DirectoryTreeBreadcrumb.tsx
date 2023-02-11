import Component from "flarum/common/Component";
import Link from "flarum/common/components/Link";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class DirectoryTreeBreadcrumb extends Component {
  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
  }

  view() {
    const path: string = m.route.param("path");

    let currentPath = "";

    return (
      <div class="DirectoryTreeBreadcrumb">
        <Link class="item" href={app.route("nearataDirectoryListing")}>
          {app.translator.trans(
            "nearata-directory-listing.forum.breadcrumb_home_label"
          )}
        </Link>
        {path &&
          path.split("/").map((val, index, array) => {
            currentPath += `${val}`;

            if (index !== array.length - 1) {
              currentPath += "/";
            }

            return (
              <Link
                class="item"
                href={app.route("nearataDirectoryListing", {
                  path: currentPath,
                })}
              >
                {val}
              </Link>
            );
          })}
      </div>
    );
  }
}
