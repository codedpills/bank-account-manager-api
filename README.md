# bank-account-manager-api
A node express based api for managing bank accounts
<br/> <br/>

Endpoint: /api/accounts <br/> <br/>
Methods:
* GET - fetch all accounts
* GET - add optional query param (/?accountType=) to query for accounts based on type
* POST - save a new account

<br/>

Endpoint: /api/accounts/accountId <br/> <br/>
Methods:
* GET - fetch a single account (with account id as url param)
* PUT - update a single account (with account id as url param)
* DELETE - delete a single account (with account id as url param)
