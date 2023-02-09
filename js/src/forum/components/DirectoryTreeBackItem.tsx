import Component from "flarum/common/Component";
import Link from "flarum/common/components/Link";
import icon from "flarum/common/helpers/icon";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class DirectoryTreeBackItem extends Component {
  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
  }

  view() {
    const { path }: { path: string } = m.route.param();

    if (!path) {
      return;
    }

    const splitPath = path.split("/");
    splitPath.pop();

    const href = app.route("nearataDirectoryListing", {
      path: splitPath.join(),
    });

    return (
      <Link class="DirectoryTreeBackItem" href={href}>
        <div class="icon">{icon("fas fa-level-up-alt")}</div>
        <div>..</div>
      </Link>
    );
  }
}
