const fs = require('fs');
const path = require('path');
const replaceThis = 1;
const replaceWith = 'harshal';
const preview = false;
const folder = __dirname;


try {
    fs.readdir(folder, (err, data) => {
        // console.log(data);
        for (index in data) {
            const item = data[index];
            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log("Rename Success", item, newFile);
                })
            }
            else {
                //if file didn't have same name means replacethis=replaceWith are different
                if ("data/" + item != newFile) {
                    console.log("data/" + item + "will be rename to " + newFile);
                }

            }

        }

    });

} catch (err) {
    console.error(err);
}
