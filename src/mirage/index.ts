import { createServer, Factory, Model, Response } from 'miragejs';
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

type Author = {
  id: string;
  name: string;
  description: string;
  email: string;
  imageUrl: string;
  status: string;
  employed: string;
  functions: string;
  projectCover: string[];
}

type BillingsInfo = {
  name: string;
  company: string;
  email: string;
  vatNumber: string;
}

type PaymentMethod = {
  id: string;
  flag: string;
  cardNumber: string;
}

type UserSetting = {
  account: {
    follows: boolean;
    answers: boolean;
    mentions: boolean;
  };

  application: {
    projects: boolean;
    products: boolean;
    newsletter: boolean;
  }
}

type Social = {
  imageUrl: string;
  link: string;
}

type UserInfo = {
  imageUrl: string;
  name: string;
  function: string;
  about: string;
  mobile: string;
  email: string;
  location: string;
  social: Social[];
}

type Conversation = {
  id: string;
  imageUrl: string;
  name: string;
  message: string;
}

export function makeServer({ environment = "test" } = {}) {
  
  const monthly = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

  let server = createServer({
    environment,

    models: {
      project: Model.extend<Partial<Project>>({}),
      author: Model.extend<Partial<Author>>({}),
      billingsInfo: Model.extend<Partial<BillingsInfo>>({}),
      paymentMethod: Model.extend<Partial<PaymentMethod>>({}),
      userSetting: Model.extend<Partial<UserSetting>>({}),
      userInfo: Model.extend<Partial<UserInfo>>({}),
      conversation: Model.extend<Partial<Conversation>>({}),
    },

    factories: {
      project: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },

        projectCover() {
          const imageUrl = ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80']

          return imageUrl[Math.round(Math.random() * 2)]
        },

        description() {
          return faker.lorem.paragraph()
        },

        name() {
          return faker.company.companyName();
        },

        imageUrl(){
          return 'https://github.com/wendson13.png';
        },

        members() {
          return (
            Array.from({ length: 4}).map(() => (
                {
                  email: faker.internet.email(),
                  imageUrl: 'https://github.com/wendson13.png',
                }
              )
            )
          )
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
          const status = ['working', 'canceled', 'done']

          return status[Math.round(Math.random() * 2)]
        }
      }),

      author: Factory.extend({
        id() {
          return faker.datatype.uuid()
        },

        name() {
          return faker.name.findName()
        },

        email() {
          return faker.internet.email()
        },

        imageUrl() {
          return 'https://github.com/wendson13.png'
        },

        status() {
          const statusType = ['Online', 'Offline']

          return statusType[Math.round(Math.random())]
        },

        employed() {
          return faker.date.past(Math.ceil(Math.random() * 20))
        },

        functions() {
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

          return functionsType[Math.ceil(Math.random() * 4)]
        }
      }),

      billingsInfo: Factory.extend({
        
        id() {
          return faker.datatype.uuid();
        },

        name() {
          return faker.name.findName();
        },

        company() {
          return faker.company.companyName();
        },
        
        email() {
          return faker.internet.email();
        },

        vatNumber() {
          return `FRB-${faker.finance.bic()}`
        }
      }),

      paymentMethod: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },

        flag() {
          const flags = ['visa', 'mastercard'];

          return flags[Math.round(Math.random() * flags.length)];
        },

        cardNumber() {
          return `**** **** **** ${faker.datatype.number({ min: 1000, max: 9999})}`;
        }
      }),

      conversation: Factory.extend({

        id() {
          return faker.datatype.uuid();
        },

        imageUrl() {
          return 'https://github.com/wendson13.png';
        },

        name() {
          return faker.name.findName();
        },

        message() {
          return faker.lorem.sentence();
        }
      })
    },

    seeds(server) {
      server.createList('project', 50);
      server.createList('author', 5);
      server.createList('billingsInfo', 10);
      server.createList('paymentMethod', 2);
      server.create('userSetting', {
        account: {
          follows: false,
          answers: false,
          mentions: false,
        },

        application: {
          projects: false,
          products: false,
          newsletter: false,
        }
      });
      server.create('userInfo', {
        imageUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: faker.name.findName(),
        function: faker.name.jobTitle(),
        about: faker.lorem.paragraph(),
        mobile: faker.phone.phoneNumber('(##) ### #### ####'),
        email: faker.internet.email(),
        location: faker.address.country(),
        social: Array.from({ length: Math.ceil(Math.random() * 2)}).map(() => {
          return {
            imageUrl: 'https://github.com/wendson13.png',
            link: 'https://github.com/wendson13'
          };
        })
      });
      server.createList('conversation', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/projects', (schema, _) => {
        const projects = schema.all('project').models as Project[];

        const summaryMonth = () => {
          return Array.from({ length: 12}).map((_,index) => {
            return {
              month: monthly[index],
              money: faker.datatype.number({ min: 100, max: 1000 }),
              users: faker.datatype.number({ min: 100, max: 1000 }),
              clients: faker.datatype.number({ min: 10, max: 100 }),
              sales: faker.datatype.number({ min: 100, max: 50000 }),
              clicks: faker.datatype.number({ min: 100, max: 10000000 }),
              items: faker.datatype.number({ min: 5, max: 100 }),
            }
          })
        }

        const currentYear = new Date().getFullYear();

        const summaryYear = Array.from({ length: 2 }).map((_, index) => {
          return {
            year: faker.date.between(new Date(`${currentYear - index}`).toJSON(), new Date(`${currentYear - (index + 1)}`).toJSON()).getFullYear(),
            monthly: summaryMonth()
          }
        })
        
        return {
          projects,

          summary: {
            money: projects.reduce((count, project) => project.budget + count, 0),
            users: projects.reduce((count, project) => project.users + count, 0),
            clients: projects.reduce((count, project) => project.clients + count, 0),
            sales: projects.reduce((count, project) => project.sales + count, 0),
          },

          summaryMonth: summaryMonth(),

          summaryYear,

          orders: {
            lastMonth:  Math.ceil(Math.random() * 10),

            list: (
              Array.from({ length: 5}).map((_,index) => {
                return {
                  id: index + 1,
                  imageUrl: 'https://github.com/wendson13.png',
                  message: `New order #${faker.datatype.number({min: 10000000, max: 99999999})}`,
                  createdAt: faker.date.past()
                }
              })
            )
          }
        };
      });

      this.get('projects/:id');

      this.post('projects/:id', (schema, req) => {
        
        const id = req.params.id;
        const data = JSON.parse(req.requestBody)

        const project = schema.findBy('project', {
          id: id
        })

        if(project){
          project.update({
            status: data.status,
            budget: data.budget,
            percentageCompeted: data.percentageCompeted
          })
          
          return project.attrs
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      }, { timing: 5000 })

      this.delete('projects/:id', (schema, req) => {
        const id = req.params.id;

        const project = schema.findBy('project', {
          id: id
        })

        if(project){
          project.destroy()

          return new Response(200, {}, {});
        }
        else {
          return new Response(404, {}, { error: 'Not Found' });
        }
      }, { timing: 5000 })

      this.get('user/notification', () => {
        const totalNotifications = Math.ceil(Math.random() * 10)

        return {
          notifications: (
            Array.from({ length: 5}).map((_, index) => {
              return {
                id: index,
                imageUrl: 'https://github.com/wendson13.png',
                name: faker.name.firstName(),
                type: 'New message',
                date: faker.date.past(index + 1, new Date(`${new Date().getFullYear() - index}`).toJSON()),
              }
            })
          ),
          total: totalNotifications
        }
      }, { timing: 2000 })

      this.get('user/authors', (schema, _) => {
        const authors = schema.all('author').models as Author[];

        return authors;
      })

      this.post('user/authors/:id', (schema, req) => {
        
        const id = req.params.id;
        const data = JSON.parse(req.requestBody)

        const author = schema.findBy('author', {
          id: id
        })

        if(author){
          author.update({
            employed: data.employed,
            functions: data.functions
          })
          
          return author.attrs
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      }, { timing: 5000 })

      this.get('user/billing', (schema, _) => {
        const billingsInfo = schema.all('billingsInfo').models as BillingsInfo[];
        const paymentMethods = schema.all('paymentMethod').models as PaymentMethod[];

        const getRandomTransactionInfo = () => {
          const randomAmount = faker.datatype.number({ min: -100000, max: 100000})
          
          const randomType = randomAmount === 0 ? 'pending'
          : randomAmount > 0 ? 'deposit' : 'withdraw'

          return {
            amount: randomAmount,
            type: randomType,
            date: faker.date.past(2),
          }
        }

        const flags = ['visa', 'mastercard'];

        return {
          salary:  faker.datatype.number({ min: 1000, max: 60000}),
          paypal: faker.datatype.number({ min: 1000, max: 80000}),

          cardHolder: {
            flag: flags[Math.round(Math.random() * flags.length)],
            name: faker.name.findName(),
            cardNumber: faker.finance.creditCardNumber('#### #### #### ####'),
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

          billingsInfo,

          transactions : {
            newest: (
              Array.from({ length: 2}).map((_, index) => {
                return {
                  id: faker.datatype.uuid() + index,
                  title: faker.company.companyName(),
                  info: getRandomTransactionInfo()
                }
              })
            ),

            yesterday: (
              Array.from({ length: 4}).map((_, index) => {
                return {
                  id: faker.datatype.uuid() + index,
                  title: faker.company.companyName(),
                  info: getRandomTransactionInfo()
                }
              })
            )
          }
        }
      })

      this.put('user/billing/info/:id', (schema, req) => {
        const id = req.params.id;
        const data: Partial<BillingsInfo>  = JSON.parse(req.requestBody)

        const info = schema.findBy('billingsInfo', {
          id: id
        })

        if(info){
          info.update({
            name: data.name,
            company: data.company,
            email: data.email
          })
          
          return info.attrs
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      })

      this.delete('user/billing/info/:id', (schema, req) => {
        const id = req.params.id;

        const info = schema.findBy('billingsInfo', {
          id: id
        })

        if(info){
          info.destroy()

          return new Response(200, {}, {});
        }
        else {
          return new Response(404, {}, { error: 'Not Found' });
        }
      })

      this.put('user/payment-method/:id', (schema, req) => {
        const id = req.params.id;
        const data: Partial<PaymentMethod>  = JSON.parse(req.requestBody)

        const payment = schema.findBy('paymentMethod', {
          id: id
        })

        if(payment && data.cardNumber && data.flag){
          payment.update({
            cardNumber: `**** **** **** ${data.cardNumber.slice(-4)}`,
            flag: data.flag,
          })
          
          return payment.attrs
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      })

      this.post('user/payment-method', (schema, req) => {

        const data: Partial<PaymentMethod>  = JSON.parse(req.requestBody)
        
        if(data.cardNumber && data.flag){
          
          const payment = schema.create('paymentMethod', {
            id: faker.datatype.uuid(),
            cardNumber: `**** **** **** ${data.cardNumber.slice(-4)}`,
            flag: data.flag
          })
          
          return payment.attrs
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      }, { timing: 5000 })

      this.delete('user/payment-method/:id', (schema, req) => {
        const id = req.params.id;

        const payment = schema.findBy('paymentMethod', {
          id: id
        })

        if(payment){
          payment.destroy()

          return new Response(200, {}, {});
        }
        else {
          return new Response(404, {}, { error: 'Not Found' });
        }
      })

      this.get('user/profile', (schema, _) => {
        const userInfo = schema.first('userInfo');
        const settings = schema.first('userSetting');
        const conversations = schema.all('conversation').models as Conversation[];


        return {
          userInfo,
          settings,
          conversations
        }
      })

      this.put('user/profile-about', (schema, req) => {
        const userInfo = schema.first('userInfo');
        const data: Partial<UserInfo>  = JSON.parse(req.requestBody)

        if(data && userInfo){
          userInfo.update({
            about: data.about
          })

          return new Response(200);
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      })

      this.put('user/notifications-settings', (schema, req) => {

        const data: Partial<UserSetting>  = JSON.parse(req.requestBody)
        const settings = schema.first('userSetting')
        
        if(data.account && data.application && settings){
          settings.update({
            ...data,
          })

          return new Response(200)
        }
        else {
          return new Response(404, {}, { error: 'Not Found' })
        }
      })
    },
  })

  return server
}