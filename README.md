





## Installation
Test Pembuatan Api Express


```bash
npm start
```

in config/config.js
```bash
"development": {
    "username": db.username,
    "password": db.password,
    "database": db.table,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```


## Usage

get contact
```bash
http://localhost:3001/contact
```

###### required token

```
accessToken = 'inirahasia'
```

post contact

```
method: post
```

data

```
data:{
 name(not null),
 email:(not null, email),
 phone:(not null, number only)
}
```

```bash
http://localhost:3001/contact/create
```

edit contact

```
method: put
```

```bash
http://localhost:3001/contact/put-{contact.id}
```

delete contact

```
method: delete
```

```bash
http://localhost:3001/contact/delete-{contact.id}
```

search contact

```
method: get
```
```bash
http://localhost:3001/contact/search?{row_name}={value}
```
example
```bash
http://localhost:3001/contact/search?name=evan
```


