# Steps on how we deployed our app to GitHub Pages

1. Check if your project is running perfectly on the localhost.
2. Create a Git repository.
3. Initialize git in your project folder.
4. Add your files, commit and then push your code to the repository/branch(This adding of your files, step is not there on the website below, please be carefull).
4. Then in the index.html file which is present in the public/index.html path generally, when using create-react-app. Add your base url link like: <base href="/------yourGitRepositoryName-------/" >. "yourGitRepositoryName" is the name of your choice(repository name), when deploying in the GitHub Pages. when deploying in some other platform it may change.
5. Follow this page for the initial setup for the deployment in GitHub Pages: https://dzone.com/articles/how-to-deploy-react-apps-for-free-with-github-page
6. When deploying with the webpack your build folder name will be dist so, the script used in the above website i.e., "deploy":"gh-pages -d build" will be changed to "deploy":"gh-pages -d dist" in your project.