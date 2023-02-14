import DirectoryTreeState from "../states/DirectoryTreeState";
import DirectoryTree from "./DirectoryTree";
import Button from "flarum/common/components/Button";
import Page from "flarum/common/components/Page";
import listItems from "flarum/common/helpers/listItems";
import ItemList from "flarum/common/utils/ItemList";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";
import IndexPage from "flarum/forum/components/IndexPage";
import type Mithril from "mithril";

export default class DirectoryListingPage extends Page {
  directoryState!: DirectoryTreeState;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.directoryState = new DirectoryTreeState();
  }

  oncreate(vnode: Mithril.VnodeDOM<this>): void {
    super.oncreate(vnode);

    app.setTitle(
      extractText(
        app.translator.trans("nearata-directory-listing.forum.page_title")
      )
    );
    app.setTitleCount(0);
  }

  actionItems() {
    const items = new ItemList<Mithril.Children>();

    items.add(
      "refresh",
      Button.component({
        title: app.translator.trans(
          "nearata-directory-listing.forum.refresh_action_button_label"
        ),
        icon: "fas fa-sync",
        className: "Button Button--icon",
        onclick: () => this.directoryState.loadData(),
      })
    );

    return items;
  }

  view() {
    return (
      <div className="NearataDirectoryListing">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div class="sideNavContainer">
            <nav class="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div class="IndexPage-results sideNavOffset">
              <div className="DirectoryListingPage-toolbar">
                <ul className="action">
                  {listItems(this.actionItems().toArray())}
                </ul>
              </div>
              <DirectoryTree state={this.directoryState} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
