GreenNest:
GreenNest is a modern React.js & Firebase web application for plant lovers. Users can browse plants, view detailed information and book consultations. This app includes secure authentication using Google Sign-In
----------------------------------------------------------------------------------------------------------------------------

Features:
  *Authentication
    # Google authentication
    # Password reset via email
    # Private routes for logged-in users
    # Displays user name, email, and profile picture
  *User Profile
    # Update profile photo and display name with "updateProfile()"
    # Logout functionality
    # Profile dropdown in Navbar - shows user info and logout button
  *Plant Details Page (protected route)
    #Displays plant info dynamically: Large image, name, description, price, rating, and stock
    #Accessible only when logged in
    #If unauthorized users detected then the page re-directs to login, then back after successful login
  *Customer Reviews
    #Displays a review section on the Home page
    #Showcases customer experiences and feedback
  *Navigation
    #Shows "Register", "Login" when logged out
    #Shows "Profile photo", "My Profile", and "Logout" when logged in
  *Firebase Hosting
    #Deployed with "Firebase Hosting"
    #Fully responsive design built with Tailwind CSS and DaisyUI
  ---------------------------------------------------------------------------------------------------------------------------

  Techonology Used:
    #React.js(Vite)
    #Firebase Authentication
    #Firebase Hosting
    #React Router
    #Tailwind CSS 
    #DaisyUI
    #React Toastify
    #React Icons
    #Context API

    repository link: https://github.com/Mrinmoy1024/Assignment09.git
    live link: https://greennest-6d606.web.app/
