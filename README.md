# angular-blog-project
A blog app to manage a mock database consisting of four tables: users, categories, posts and comments.

The mock data is given in data.ts and imported in every component.

Services and add-edit-delete-detail methods are included separately.

### FAQ
- After downloading the zip and running ng serve, if you are getting the error "Node packages may not be installed. Try installing with 'npm install'.
Error: Could not find the '@angular-devkit/build-angular:dev-server' builder's node package." a fix is "npm install @angular-devkit/build-angular --force".

- When first run the site may not respond for the first few seconds, which would not be an issue in production.
