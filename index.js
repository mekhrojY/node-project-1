import fs from "fs"
fs.mkdir('./myfolder/nested folder 1', (err) => {
  if (err) {
    console.error('Error creating folder:', err);
  } else {
    console.log('Folder created successfully');
  }
});
