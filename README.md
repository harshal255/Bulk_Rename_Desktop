# Bulker Rename Desktop tool

This tool allows you to perform bulk renaming in your files or directories on your PC.



## How we can use??

Let's suppose I have a Computer That contains 200 files and all those files contain my name as "Harshal", and let's suppose sometimes we make a mistake in writing the actual name & written the spelling of the name incorrectly (Hershal).

But I want my name to be written as (Harshal)So to solve this problem I can use this bulk rename desktop tool.

How you can rename more than one file at a time. & also can use it as a desktop utility whether you have Windows, Mac, or Ubantu operating system.

### Technology

NodeJS

* file modules
* path modules


### Installation

A step by step guide that will tell you how to get the development environment up and running.

Step 1. Fork [this](https://github.com/harshal255/Bulk_Rename_Desktop) repository.

Step 2. Clone your forked copy of the repo

```bash
git clone "https://github.com/<yourusername>/Bulk_Rename_Desktop.git"

```

Step 3.go inside a directory Bulk_Rename_Desktop

```base
cd Bulk_Rename_Desktop
```

Step 4. install npm 
```base
npm install
```

Step 5. Now you have to add some same name directory or file 
In case of this image I have add some same name files like "1" & you can change replaceWith variable string that you want to rename with your all files name.

![Alt text](https://res.cloudinary.com/dlsxq98fr/image/upload/v1693640493/Bulk%20Rename%20Desktop%20tool/image_cu4vci.png)

Step 6. Run your index.js

```base
node index.js
```

Step 7. After run index.js you can see all of files are changed with harshal name

![Alt text](https://res.cloudinary.com/dlsxq98fr/image/upload/v1693640493/Bulk%20Rename%20Desktop%20tool/image-harshal_zdypwt.png)

## How we can you as a desktop tool

Step 1. install git Base terminal

Step 2. then open git bash terminal & then Make the script executable of my rename.sh file using the chmod command: 

```
chmod +x rename.sh
```

Step 3. Now, you can run the script by simply typing its name in the terminal:
```
./rename.sh
```

Step 4. Now open any directory in File Explorer & make inside various files with same name & directory & modified index.js file variables you want to replace & rename.
```
const replaceThis = 1;
const replaceWith = 'harshal';
```

& then move files like (index.js,package.json,rename.sh) in that directory,now open gitbash & run ```npm install``` & then click rename.sh file

now, you can see the automatically renamed file you want to change it

like this : 
[![Video Thumbnail](https://res.cloudinary.com/dlsxq98fr/video/upload/v1693643328/Bulk%20Rename%20Desktop%20tool/Video.Guru_20230902_135734117_1_a8tdog.jpg)](https://res.cloudinary.com/dlsxq98fr/video/upload/v1693643328/Bulk%20Rename%20Desktop%20tool/Video.Guru_20230902_135734117_1_a8tdog.mp4)


