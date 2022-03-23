import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  email: string;
  imageUrl: string;
}

type Project = {
  company: string;
  members: User[];
  users: number;
  clients: number;
  sales: number;
  budget: number;
  percentageCompeted: number;
}

export function makeServer({ environment = "test" } = {}) {
  
  const monthly = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

  let server = createServer({
    environment,

    models: {
      project: Model.extend<Partial<Project>>({}),
    },

    factories: {
      project: Factory.extend({
        id() {
          return faker.company.companyName();
        },

        imageUrl(){
          return 'https://github.com/wendson13.png';
        },

        members() {
          return [
            Array.from({ length: 6}).map(() => (
                {
                  email: faker.internet.email(),
                  imageUrl: 'https://github.com/wendson13.png',
                }
              )
            )
          ]
        },

        budget() {
          return faker.datatype.number({ min: 100, max: 100000 });
        },

        clients() {
          return faker.datatype.number({ min: 100, max: 100000 });
        },

        users(){
          return faker.datatype.number({ min: 50, max: 10000 });
        },

        sales() {
          return faker.datatype.number({ min: 1357, max: 50000});
        },

        percentageCompeted() {
          return faker.datatype.number(100);
        },

        status() {
          const status = ['progress', 'cancel', 'complete']

          return status[Math.round(Math.random() * 2)]
        }
      })
    },

    seeds(server) {
      server.createList('project', 50);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get("/projects", (schema, _) => {
        const projects = schema.all('project').models as Project[];
        
        return {
          projects,

          summary: {
            money: projects.reduce((count, project) => project.budget + count, 0),
            users: projects.reduce((count, project) => project.users + count, 0),
            clients: projects.reduce((count, project) => project.clients + count, 0),
            sales: projects.reduce((count, project) => project.sales + count, 0),
          }
        };
      });

      this.get("projects/:id");

      this.get('projects/month', () => {

        return (
          Array.from({ length: 12}).map((_,index) => {
            return {
              month: monthly[index],
              money: faker.datatype.number({ min: 100, max: 1000 }),
              users: faker.datatype.number({ min: 100, max: 1000 }),
              clients: faker.datatype.number({ min: 10, max: 100 }),
              sales: faker.datatype.number({ min: 100, max: 50000 }),
              clicks: faker.datatype.number({ min: 100, max: 100000 }),
              items: faker.datatype.number({ min: 5, max: 100 }),
            }
          })
        )
      })

      this.get('projects/sales/years', () => {
        return [
          {
            year: 2019,
            monthly: (
              Array.from({ length: 12}).map((_,index) => {
                return {
                  month: monthly[index],
                  sales: faker.datatype.number({ min: 1000, max: 50000})
                }
              })
            )
          },
          {
            year: 2020,
            monthly: (
              Array.from({ length: 12}).map((_,index) => {
                return {
                  month: monthly[index],
                  sales: faker.datatype.number({ min: 1000, max: 50000})
                }
              })
            )
          },
          {
            year: 2021,
            monthly: (
              Array.from({ length: 12}).map((_,index) => {
                return {
                  month: monthly[index],
                  sales: faker.datatype.number({ min: 1000, max: 50000})
                }
              })
            )
          },
          {
            year: 2022,
            monthly: (
              Array.from({ length: 12}).map((_,index) => {
                return {
                  month: monthly[index],
                  sales: faker.datatype.number({ min: 1000, max: 50000})
                }
              })
            )
          },
        ]
      })

      this.get('user/orders', () => {

        return {
          lastMonth:  Math.ceil(Math.random() * 10),

          orders: (
            Array.from({ length: 5}).map((_,index) => {
              return {
                id: index + 1,
                imageUrl: 'https://github.com/wendson13.png',
                message: `${faker.finance.transactionDescription()}`,
                createdAt: faker.date.past()
              }
            })
          )
        }
      })

      this.get('user/notification', () => {
        return (
          Array.from({ length: Math.ceil(Math.random() * 5)}).map(() => {
            return {
              imageUrl: 'https://github.com/wendson13.png',
              name: faker.name.findName(),
              message: faker.lorem.paragraph(),
              date: faker.date.past(),
            }
          })
        );
      })

      this.get('user/authors', (schema, _) => {
        const projects = schema.all('project').models as Project[];

        const statusType = ['Online', 'Offline']
        const functionsType = [
          {
            primary: 'Manager',
            secondary: 'Organization'
          },
          {
            primary: 'Programmer',
            secondary: 'Developer'
          },
          {
            primary: 'Executive',
            secondary: 'Projects'
          },
          {
            primary: 'Marketing',
            secondary: 'Organization'
          },
          {
            primary: 'Tester',
            secondary: 'Developer'
          },
        ]

        const authors = projects.map((project) => {
          return project.members.map(item => {
           return {
            name: faker.name.findName(),
            email: item.email,
            imageUrl: item.imageUrl,
            status: statusType[Math.round(Math.random())],
            employed: faker.date.past(Math.ceil(Math.random() * 20)),
            functions: functionsType[Math.ceil(Math.random() * 4)]
           }
          })
        })    

        return authors[0];
      })

      this.get('user/billing', () => {

        const flags = ['visa', 'mastercard'];

        const paymentMethods = [
          {
            id: 1,
            flag: flags[Math.round(Math.random() * flags.length)],
            numberCard: `**** **** **** ${faker.datatype.number({ min: 1000, max: 9999})}`
          },
          {
            id: 2,
            flag: flags[Math.round(Math.random() * flags.length)],
            numberCard: `**** **** **** ${faker.datatype.number({ min: 1000, max: 9999})}`
          }
        ]

        const getRandomTransactionInfo = () => {
          const randomAmount = faker.datatype.number({ min: -10000, max: 100000})
          
          const randomType = randomAmount === 0 ? 'pending'
          : randomAmount > 0 ? 'deposit' : 'withdraw'

          return {
            amount: randomAmount,
            type: randomType,
            date: faker.date.past(2),
          }
        }

        return {
          salary:  faker.datatype.number({ min: 1000, max: 60000}),
          paypal: faker.datatype.number({ min: 1000, max: 80000}),

          cardHolder: {
            flag: flags[Math.round(Math.random() * flags.length)],
            name: faker.name.findName(),
            numberCard: faker.finance.creditCardNumber(),
            expires: faker.date.future(5),
          },

          paymentMethods,

          invoices : (
            Array.from({ length: 5}).map(() => {
              return {
                amount: faker.datatype.number({ min: 100, max: 1000}),
                cod: faker.finance.bic(),
                date: faker.date.past(),
              }
            })
          ),

          billingsInfo : (
            Array.from({ length: 5}).map(() => {
              const name = faker.name.findName();

              return {
                name,
                company: faker.company.companyName(),
                email: faker.internet.email(name),
                vatNumber: `FRB-${faker.finance.bic()}`
              }
            })
          ),

          transactions : {
            newest: (
              Array.from({ length: 2}).map(() => {
                return {
                  title: faker.company.companyName(),
                  info: getRandomTransactionInfo()
                }
              })
            ),

            yesterday: (
              Array.from({ length: 4}).map(() => {
                return {
                  title: faker.company.companyName(),
                  info: getRandomTransactionInfo()
                }
              })
            )
          }
        }
      })

      this.get('user/profile', () => {
        return {
          userInfo: {
            imageUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: faker.name.findName(),
            function: faker.name.jobTitle()
          }

        }
      })
    },
  })

  return server
}