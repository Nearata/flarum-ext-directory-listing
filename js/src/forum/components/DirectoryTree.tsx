import DirectoryTreeState from "../states/DirectoryTreeState";
import DirectoryTreeBackItem from "./DirectoryTreeBackItem";
import DirectoryTreeBreadcrumb from "./DirectoryTreeBreadcrumb";
import DirectoryTreeItem from "./DirectoryTreeItem";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Placeholder from "flarum/common/components/Placeholder";
import app from "flarum/forum/app";
import type Mithril from "mithril";

type Attrs = {
  state: DirectoryTreeState;
};

export default class DirectoryTree extends Component<Attrs> {
  directoryState!: DirectoryTreeState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.directoryState = this.attrs.state;
    this.directoryState.loadData();
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);
  }

  view() {
    const placeholderText = app.translator.trans(
      "nearata-directory-listing.forum.placeholder_empty_folder_text"
    );

    return (
      <div class="DirectoryTree">
        <DirectoryTreeBreadcrumb />
        <DirectoryTreeBackItem />
        {this.directoryState.isLoading() && <LoadingIndicator />}
        {this.directoryState.isLoading() ||
          (!this.directoryState.getData().length && (
            <Placeholder text={placeholderText} />
          ))}
        <div class="DirectoryTreeList">
          {this.directoryState.getData().map(function (val) {
            return <DirectoryTreeItem data={val} />;
          })}
        </div>
      </div>
    );
  }
}
