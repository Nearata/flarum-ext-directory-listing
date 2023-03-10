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

    const elems = this.element.querySelectorAll(".item");

    for (let i = 0; i < elems.length - 1; i++) {
      const separator = document.createElement("div");

      separator.classList.add("separator");
      separator.innerHTML = "/";

      elems[i].after(separator);
    }
  }

  view() {
    const path: string | undefined = m.route.param("path");

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
            if (index > 0) {
              currentPath += `/${val}`;
            } else {
              currentPath += val;
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
