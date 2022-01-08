import { Resume } from '../types';

export const en: Resume = {
    footerCaption: 'Source code is available here:',
    education: {
        label: 'Education',
        value: [
            {
                position: [ 'Bachelor', 'Novosibirsk State University'],
                city: 'Novosibirsk',
                dateFrom: 'Sep 2010',
                dateUntil: 'Jun 2014',
                details: [
                    ['Department of Mechanics and Mathematics']
                ]
            },
            {
                position: [ 'Master', 'Novosibirsk State University'],
                city: 'Novosibirsk',
                dateFrom: 'Sep 2014',
                dateUntil: 'Jun 2016',
                details: [
                    ['Department of Mechanics and Mathematics']
                ]
            }
        ]
    },
    profile: {
        about: {
            label: 'About me',
            value: [
                ['Until 2019 I have been doing math professionally and studying C# as hobby.'],
                ['I have programming as profession now, and hiking and snowboarding are still as hobbies.']
            ]
        },
        position: 'Frontend developer',
        firstName: 'Konstantin',
        lastName: 'Gotin'
    },
    workExperience: {
        label: 'Work experience', value: [
            {
                position: ['Frontend developer', 'Fit Service'],
                city: 'Novosibirsk',
                dateFrom: 'Dec 2020',
                dateUntil: 'Jun 2021',
                details: [
                    ['Tech stack: TypeScript, React, Styled Components, GraphQL, ApolloClient, MemoryRouter, ReactRouter, Formik, Webpack.'],
                    ['Projects:', 'bold'],
                    ['CRM to simplify the use of service center services for partners.', 'li'],
                    [
                        `Service booking application, the module can be used as the React component in other projects or
                        can be deployed independently to use in partners resources using IFrame.`, 'li'
                    ],
                    [
                        `Booking application adapter -- the script to integrate the application with minimal effort of partners.
                        It is developed without frameworks, using only TypeScript, Webpack, Dom and Window api.`, 'li'
                    ]
                ]
            },
            {
                position: ['Frontend engineer', 'True Engineering'],
                city: 'Novosibirsk',
                dateFrom: 'Sep  2020',
                dateUntil: 'Nov 2020',
                details: [['I worked on complex content management system for large retail network, Angular 8.']]
            },
            {
                position: ['Fullstack developer', 'Axmor Software'],
                city: 'Novosibirsk',
                dateFrom: 'Jun 2019',
                dateUntil: 'Sep  2020',
                details: [
                    ['Projects:', 'bold'],
                    [
                        `WMS, flexible system that allows to track and control the complete life cycle of goods in warehouse.
                        Tech stack: TypeScript, React, StyledComponents, Go, MongoDB.`, 'li'
                    ],
                    [
                        `Data analysis system -- custom and flexible Apache Zeppelin analog. 
                        Tech stack: TypeScript, React, CSS Modules, Less, NodeJS, Express, MongoDB.`, 'li'
                    ],
                    [
                        `Construction company project management system.
                         Tech stack: TypeScript, React, Redux, Redux Saga, MaterialUI, JSS, Formik.`, 'li'
                    ]
                ]

            },
            {
                position: ['Teacher', 'Novosibirsk State University'],
                city: 'Novosibirsk',
                dateFrom: 'Sep 2016',
                dateUntil: 'Jun 2020',
                details: [
                    ['Higher College of Informatics of NSU -- algebra, geometry and discrete mathematics', 'li'],
                    ['Department of Mechanics and Mathematics of NSU -- differential geometry', 'li']
                ]
            },
            {
                position: [ 'Researcher', 'Sobolev Institute of Mathematics'],
                city: 'Novosibirsk',
                dateFrom: 'Sep  2016',
                dateUntil: 'Jun 2019',
                details: [
                    ['research in mathematics', 'li'],
                    ['writing scientific articles', 'li'],
                    ['participation in conferences', 'li'],
                    [
                        `I have a solo publication in Q2 math journal -- 
                        https://www.worldscientific.com/doi/10.1142/S0218216517420020`
                    ]
                ]
            }
        ] },
    sideInfo: {
        contacts: {
            label: 'Contacts',
            value: [
                ['Phone', '89137957209'],
                ['Email', 'gktin@yandex.ru'],
                ['Address', 'Novosibirsk, Russia']
            ]
        },
        languages: {
            label: 'Language',
            value: [
                ['Russian', 'native'],
                ['English', 'intermediate']
            ] },
        socialLinks: {
            label: 'Links',
            value: [
                ['Github', 'https://github.com/AdorableRedPanda'],
                ['Linkedin', 'https://www.linkedin.com/in/kgotin/']
            ]
        },
        skills: {
            label: 'Skills',
            value: [
                ['React'],
                ['Git'],
                ['HTML & CSS'],
                ['TypeScript'],
                ['JavaScript'],
                ['Webpack'],
                ['StyledComponents']
            ]
        }
    }
};