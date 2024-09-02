const fs = require('fs')
const path = require('path')

const folderPath = path.join(__dirname, '../../cleon-svg')
const newFileNamePrefix = 'icon-'

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const newFileName = `${newFileNamePrefix}${file}`

      fs.rename(
        `${folderPath}/${file}`,
        `${folderPath}/${newFileName}`,
        (err) => {
          if (err) {
            console.error(err)
          } else {
            console.log(`File ${file} has been renamed to ${newFileName}`)
          }
        },
      )
    }
  })
})
