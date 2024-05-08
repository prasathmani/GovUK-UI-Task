export interface IMyPatent {
  id: number;
  number: string;
  status: string;
  owners: Owner[];
  registrationDate: string;
  renewalDate: string;
}

export interface Owner {
  name: string;
  address: string;
}
