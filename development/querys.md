## Querys 

**WebUserRol**
- ID
- Name
- Description

    CREATE TABLE WebUserRol
    (
        ID SERIAL PRIMARY KEY,
        Name varchar(255) NOT NULL,
        Description varchar(512) default ''
    )

<br>

**WebUser**
- ID
- Email
- WebUserPassword
- Name
- MiddleName
- LastName
- DateofBirth
- Address
- City
- Country
- PostalCode
- PhoneNumber
- PhoneNumber2
- Createdat
- Updatedat
- Deletedat

    CREATE TABLE WebUser (
        ID SERIAL PRIMARY KEY,
        Email varchar(255) NOT NULL unique,
        WebUserPassword text NOT NULL,
        Name varchar(128) NOT NULL,
        MiddleName varchar(64) default '',
        LastName varchar(64) default '',
        DateofBirth date default '2001-01-01',
        Address varchar(128),
        City varchar(128),
        Country varchar(128),
        PostalCode varchar(20),
        PhoneNumber varchar(24),
        PhoneNumber2 varchar(24),
        ID_WebUserRol int NOT NULL,
        CreatedAt date,
        UpdatedAt date,
        DeletedAt date,

        CONSTRAINT fk_webuserrol FOREIGN KEY (ID_WebUserRol) REFERENCES webuserrol(ID)
    )

<br>

**WebUserAvatar**
- ID
- FileName
- HomePath
- PublicPath
- FileSizeKb
- ID_WebUser

    CREATE TABLE WebUserAvatar (
        ID SERIAL PRIMARY KEY,
        Filename varchar(128) NOT NULL,
        HomePath text NOT NULL,
        PublicPath text NOT NULL,
        FilesizeKb integer default 0,
        ID_WebUser integer NOT NULL,
        CONSTRAINT fk_webuser FOREIGN KEY(ID_WebUser) REFERENCES webuser(ID)
    )

 