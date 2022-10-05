# Notes
## Authentication
What is authentication?
- My answer: A token specific to a user that allows the user to go to a secured page
- A way to protect private data
- Allows access to certain Routes in the app
- Process that grants permission
- Process that certain info is going to certain places
- Cross checking user info and info stored in the server

Teacher Answer: 
- the process of determining the identity of a user

### Authentication Flow
               Client:                                Server:
Login:      User/Passwoard             ---->    Search DB for user/password
            Sent Login request                           |
                                                         |
            Show error to user         <----    IF not found, throw error
                                                         |
            Recieve + stores token     <----    IF found, store + return token


Request:    User sends request body    ---->    Search for an active token
            + token                                      |
                                                         |
            Recieves + process         <----    IF found, process + return request
            request                          


Logout:     User deletes local token   ---->    Server deletes token
            + sends token to server 


## Authorization
- the process of determing the access and permissions of a user


# Q+A
Is a token a cookie?
- A cookie is what you put the token in to - it's a placeholder for the token data