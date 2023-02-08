import app from "flarum/forum/app";

export type Data = {
  type: string;
  path: string;
  timestamp: number;
  dirname: string;
  basename: string;
  filename: string;
  size: number | undefined;
};

export default class DirectoryTreeState {
  loading: boolean;
  data: Array<Data>;

  constructor() {
    this.loading = true;
    this.data = [];
  }

  isLoading() {
    return this.loading;
  }

  loadData() {
    let { path } = m.route.param();

    if (!path) {
      path = "";
    }

    app
      .request({
        method: "POST",
        url: app.forum.attribute("apiUrl") + "/nearata/directoryListing",
        body: { path },
      })
      .then((res: any) => {
        this.data = res.data;

        this.loading = false;

        m.redraw();
      })
      .catch(() => {
        this.loading = false;

        m.redraw();
      });
  }

  getData() {
    return this.data;
  }
}
