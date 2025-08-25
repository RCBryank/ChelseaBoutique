export class WebUser {
    ID: number;
    Email: string;
    WebUserPassword: string;
    Name: string;
    MiddleName: string;
    LastName: string;
    DateofBirth: string;
    Address: string;
    City: string;
    Country: string;
    PostalCode: string;
    PhoneNumber: string;
    PhoneNumber2: string;
    CreatedAt: string;
    UpdatedAt: string | null;
    DeletedAt: string | null;

    constructor() {
        this.ID = -1;
        this.Email = '';
        this.WebUserPassword = '';
        this.Name = '';
        this.MiddleName = '';
        this.LastName = '';
        this.DateofBirth = Date.now().toString();
        this.Address = '';
        this.City = '';
        this.Country = '';
        this.PostalCode = '';
        this.PhoneNumber = '';
        this.PhoneNumber2 = '';
        this.CreatedAt = Date.now().toString();
        this.UpdatedAt = null;
        this.DeletedAt = null;
    }
}
