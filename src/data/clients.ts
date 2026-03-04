export interface Client {
  id: number;
  name: string;
  logo: string;
  url?: string;
}

const clients: Client[] = [
  { id: 7,  name: "Client 7",  logo: "/assets/Photos/clients/7.svg"  },
  { id: 9,  name: "Client 9",  logo: "/assets/Photos/clients/9.svg"  },
  { id: 2,  name: "Client 2",  logo: "/assets/Photos/clients/2.svg"  },
  { id: 3,  name: "Client 3",  logo: "/assets/Photos/clients/3.svg"  },
  { id: 4,  name: "Client 4",  logo: "/assets/Photos/clients/4.svg"  },
  { id: 6,  name: "Client 6",  logo: "/assets/Photos/clients/6.svg"  },
  { id: 5,  name: "Client 5",  logo: "/assets/Photos/clients/5.svg"  },
  { id: 8,  name: "Client 8",  logo: "/assets/Photos/clients/8.svg"  },
  { id: 1,  name: "Client 1",  logo: "/assets/Photos/clients/1.svg"  },
  { id: 10, name: "Client 10", logo: "/assets/Photos/clients/10.svg" },
  { id: 11, name: "Client 11", logo: "/assets/Photos/clients/11.svg" },
  { id: 12, name: "Client 12", logo: "/assets/Photos/clients/12.svg" },
  { id: 13, name: "Client 13", logo: "/assets/Photos/clients/13.svg" },
  { id: 14, name: "Client 14", logo: "/assets/Photos/clients/14.svg" },
  { id: 15, name: "Client 15", logo: "/assets/Photos/clients/15.svg" },
  { id: 16, name: "Client 16", logo: "/assets/Photos/clients/16.svg" },
  { id: 17, name: "Client 17", logo: "/assets/Photos/clients/17.svg" },
  { id: 18, name: "Client 18", logo: "/assets/Photos/clients/18.svg" },
];

export default clients;
