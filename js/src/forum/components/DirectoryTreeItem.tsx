import { Data } from "../states/DirectoryTreeState";
import Component from "flarum/common/Component";
import Link from "flarum/common/components/Link";
import icon from "flarum/common/helpers/icon";
import humanTime from "flarum/common/utils/humanTime";
import app from "flarum/forum/app";
import type Mithril from "mithril";
import prettyBytes from "pretty-bytes";

type Attrs = {
  data: Data;
};

export default class DirectoryTreeItem extends Component<Attrs> {
  data!: Data;
  external!: boolean;
  externalHref!: any;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.data = this.attrs.data;

    this.external = this.data.type !== "dir";
    this.externalHref =
      this.external &&
      location.origin + "/assets/nearataDirectoryListing/" + this.data.path;
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
  }

  view() {
    return (
      <Link
        class="DirectoryTreeItem"
        external={this.external}
        href={
          this.external
            ? this.externalHref
            : app.route("nearataDirectoryListing", { path: this.data.path })
        }
      >
        <div class="icon">
          {this.external ? icon("fas fa-file") : icon("fas fa-folder")}
        </div>
        <div class="fileName">
          {this.data.filename}
          {"extension" in this.data && "." + this.data.extension}
        </div>
        <div class="size">
          {this.data.size ? prettyBytes(this.data.size) : "-"}
        </div>
        <div class="date">
          {humanTime(window.dayjs.unix(this.data.timestamp).toISOString())}
        </div>
      </Link>
    );
  }
}
