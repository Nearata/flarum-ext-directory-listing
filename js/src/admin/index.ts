import app from "flarum/admin/app";

app.initializers.add("nearata-directory-listing", () => {
  app.extensionData
    .for("nearata-directory-listing")
    .registerSetting({
      setting: "nearata-directory-listing.proxyDownload",
      type: "boolean",
      label: app.translator.trans(
        "nearata-directory-listing.admin.settings.proxy_download.label"
      ),
    })
    .registerSetting({
      setting: "nearata-directory-listing.folderSuffix",
      type: "text",
      label: app.translator.trans(
        "nearata-directory-listing.admin.settings.folder_suffix.label"
      ),
    });
});
