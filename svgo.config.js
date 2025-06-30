export default {
  plugins: [
    "cleanupAttrs",
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeTitle",
    "removeDesc",
    "removeUselessDefs",
    "removeEditorsNSData",
    "removeEmptyAttrs",
    "removeHiddenElems",
    "removeEmptyText",
    "removeEmptyContainers",
    {
      name: "removeViewBox",
      active: false,
    },
    "cleanupEnableBackground",
    "minifyStyles",
    "convertStyleToAttrs",
    "convertColors",
    "collapseGroups",
    "mergePaths",
    "convertShapeToPath",
    "sortAttrs"
  ]
};