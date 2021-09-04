



## Installation
Test Pembuatan Api Express


```bash
npm start
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
```bash
http://localhost:3001/contact/put-{contact.id}
```

delete contact
```bash
http://localhost:3001/contact/delete-{contact.id}
```

search contact
```bash
http://localhost:3001/contact/search?{row_name}={value}
```
example
```bash
http://localhost:3001/contact/search?name=evan
```


