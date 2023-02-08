import DirectoryTreeState from "../states/DirectoryTreeState";
import DirectoryTreeItem from "./DirectoryTreeItem";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
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
    if (this.directoryState.isLoading()) {
      return <LoadingIndicator />;
    }

    return (
      <div class="DirectoryTreeList">
        {this.directoryState.getData().map(function (val) {
          return <DirectoryTreeItem data={val} />;
        })}
      </div>
    );
  }
}
