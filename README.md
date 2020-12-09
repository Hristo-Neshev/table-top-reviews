# TableTopReviews
This project have Home, Register, Login and About pages open to anyone.
In registration form all fields are required. If some field is empty or the data is not valid. submit button is disabled.
Registered users have different home page with the most recent reviews. 
Profile page shows user's profile picture and information about the account.
My reviews page is the place where users can create and manage their reviews.
If you like given review you can like it(if you aren't already).


# Project Architecture

For this project i use Backedless for the Back-end.

The project have 3 modules and every module have own routing. The modules are:
            -Core module: includes about, home, header and not-found components.
            -User module: includes register, login, profile, myReviews components and the UserService.
            -Review module: includes allReviews, create, edit, details components and the ReviewService.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# Future of the project

Back-end : Creating custom API with Node(Express) and MongoDb(mongoose);

Refactoring : - Add more use of types in typescript. 
              - Update state management(with ngRx).
              -implement lazy loading.

Adding new functionalities like search, sortBy(in Reviews page), user types(admin and regular user) and more.

Also i planing to add two big sections in the project: Forum and Market place.
