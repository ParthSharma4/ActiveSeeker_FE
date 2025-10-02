# ActiveSeeker_FE
JD matching portal with generative AI and a sophisticated backend

Contents of the front page - 

/active-seeker-frontend - 
1. package.json
   
2. next.config.js

3. tailwind.config.js
 
4. postcss.config.js

5. env.local        (dor API URLs)

6. /public
    - logo.png

7. /styles
    - globals.css

8. /utils
    - api.js

9. /components
    - Navbar.jsx
    - WeeklyUpdateForm.jsx
    - ProfileEditor.jsx
    - JobCard.jsx

10./pages
    - _app.jsx
    - index.jsx
    - dashboard.jsx
    - profile.jsx
    - jobs.jsx
    - job/[id].jsx


CHANGES TO BE MADE -

1. env.local - set the backend API URL.

2. utils/api.js → adjust endpoints to match backend routes.

3. index.jsx - the login right now just redirects, need to integrate  actual login (Google/Firebase).

5. User IDs - right now hardcoded "123" in API calls — replace with the real logged-in user’s ID.

6. Styling/branding - TBD
