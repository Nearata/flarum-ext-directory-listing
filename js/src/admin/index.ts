import app from "flarum/admin/app";

app.initializers.add("nearata-directory-listing", () => {
  app.extensionData
    .for("nearata-directory-listing")
    .registerSetting({
      setting: "nearata-directory-listing.proxy_download",
      type: "boolean",
      label: app.translator.trans(
        "nearata-directory-listing.admin.settings.proxy_download.label"
      ),
    })
    .registerSetting({
      setting: "nearata-directory-listing.folder_suffix",
      type: "text",
      label: app.translator.trans(
        "nearata-directory-listing.admin.settings.folder_suffix.label"
      ),
    })
    .registerPermission(
      {
        icon: "fas fa-download",
        label: app.translator.trans(
          "nearata-directory-listing.admin.permissions.download_files_label"
        ),
        permission: "nearata-directory-listing.download-files",
        allowGuest: true,
      },
      "view"
    )
    .registerPermission(
      {
        icon: "fas fa-eye",
        label: app.translator.trans(
          "nearata-directory-listing.admin.permissions.view_directory_content_label"
        ),
        permission: "nearata-directory-listing.view-directory-content",
        allowGuest: true,
      },
      "view"
    );
});
