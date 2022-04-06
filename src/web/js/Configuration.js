export default {
  fileSuffix: ".shape",
  fileNew: "NewComponent",
  appName: "Thindexed Designer",
  
  fileScreen: {
    title: "Component Library",
    addFolderButton: "Folder",
    addFileButton: "Component"
  },
  
  backend: {
    user: {
      get:    file => `../shapes/user/get?filePath=${file}`,
      image:  file => `../shapes/user/image?filePath=${file}`,
      list:   path => `../shapes/user/list?path=${path}`,
      rename:         `../shapes/user/rename`,
      delete:         `../shapes/user/delete`,
      folder:         `../shapes/user/folder`,
      save:           `../shapes/user/save`
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
