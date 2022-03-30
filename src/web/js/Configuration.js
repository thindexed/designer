export default {
  fileSuffix: ".shape",
  appName: "Thindexed Designer",
  loginRedirect: "designer",

  backend: {
    user: {
      get:    file => `../api/user/shape/get?filePath=${file}`,
      image:  file => `../shapes/user/${file}`,
      list:   path => `../api/user/shape/list?path=${path}`
    },

    global:{
      get:    file => `../shapes/global/get?filePath=${file}`,
      image:  file => `../shapes/global/image?filePath=${file}`,
      list:   path => `../shapes/global/list?path=${path}`,
      rename:         `../shapes/global/rename`,
      delete:         `../shapes/global/delete`,
      folder:         `../shapes/global/folder`,
      save:           `../shapes/global/save`
    }
  }
}
