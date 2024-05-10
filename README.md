# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




COOKIES ROUTES / ENDPOINTS

| HTTP verb     | URL                  |Request body      | Action                      | 
| ------------- |--------------------  | -----------------|-----------------------------|         
| POST          | `/cookies`           | JSON             |Create a new cookie          |
| GET           | `/cookies `          | (empty)          |Rerurns all the cookies      |
| GET           | `/cookies/:cookieId` | (empty)          |Returns the specified cookie |
| PUT/PATCH     | `/cookies/:cookieId` | JSON             |Edit the specified cookie    |
| DELETE        | `/cookies/:cookieId `| (empty)          |Delete the specified cookie  |


REVIEWS ROUTES / ENDPOINTS

| HTTP verb     | URL                |Request body      | Action                      | 
| ------------- |--------------------| -----------------|-----------------------------|         
| POST          | `/reviews `        | JSON             |Create a new review          |







PATH FOR COOKIES:

| PATH                      | DESCRIPTION           |
|---------------------------|-----------------------|
| `/Home`                   | Home Page             |
| `/cookies/my-cookies`     | List of all cookies   |
| `/cookies/cookies-details`| Details of one cookie |
| `/cookies/add-cookies`    | Add one cookie        |


PATH FOR REVIEWS:

| PATH                      | DESCRIPTION           |
|----------------------     |--------------------   |
| `/`                       | Home Page             |
| `/reviews/my-reviews`     | List of all reviews   |
| `/reviews/add-reviews`    | Add one reviews       |