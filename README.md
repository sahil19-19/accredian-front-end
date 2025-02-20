#  Front end for Accredian full stack assignment

##  Working demo video

    ```
    https://www.loom.com/share/ef8d927e56fb404ebbed0f68ac84473d?sid=67666352-0f8f-4d8c-b566-f044de7de9c1
    ```
##  Screenshot of email
    ![image](https://github.com/user-attachments/assets/652899d7-83c4-47a3-8384-6c36a92c98d0)


##  Created using
-  Material UI
-  React.js

###  Note: Since there was no way to host MySQL database pressing "Refer" button in the modal returns back an error as no database is connected, however you can still use the app on localhost

##  Steps to use app on localhost
-  Clone repository
-  Run

    ```
    npm install
    ```

    to download dependencies
-  If error occurs, run
  
    ```
    npm install --force
    ```

-  Create `.env ` file using `.env.sample` file  
  REACT_APP_EMAIL_USER stores the email of current user to simulate a state in which the user is signed-in. Enter your personal email here, this will be the email from which mails will be sent.
  Keep in mind, this same email along with it's app password has to be entered in the `.env` file of Accredian-back-end which is the backend of this project.  
  More about app passwords -

    ```
    https://support.google.com/mail/answer/185833?hl=en
    ```


-  Run

     ```
     npm start
     ```
     to start the app at localhost:3000
