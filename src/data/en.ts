import { Resume } from '../types';

export const en: Resume = {

	profile: {
		about: {
			label: 'About me',
			value: [
				['strong math background', 'li'],
				['teaching experience', 'li'],
				['some full-stack experience', 'li'],
				[
					`I like to develop high-level APIs and components, which in turn are used to implement business 
                    functions, so I'm looking for a project with a complex interesting frontend and a strong team.
                    Open to relocation.`,
				],
			],
		},
		position: 'Frontend developer',
		name: 'Konstantin Gotin',
	},

	contacts: [
		['fa-regular fa-paper-plane fa-xl', 'https://t.me/ksgotin', 'ksgotin'],
		['fa-brands fa-github fa-xl', 'https://github.com/AdorableRedPanda', 'AdorableRedPanda'],
		['fa-brands fa-linkedin fa-xl', 'https://www.linkedin.com/in/kgotin/', 'kgotin'],
		['fa-regular fa-envelope fa-xl', 'mailto:gktin@yandex.ru', 'gktin@yandex.ru'],
		['fa-regular fa-phone fa-lg', 'tel:+374 93 117769', '+374 93 117769'],
	],
	skills: ['React', 'Redux', 'JS', 'TS', 'HTML', 'CSS', 'Webpack'],

	workExperience: {
		label: 'Work experience',
		value: [
			{
				position: ['Frontend developer', 'TecForce'],
				dates: ['Aug 2021', 'now'],
				details: [
					['TS, React, Redux, Redux-Saga, Redux Toolkit, Webpack, Jest, React Testing Library'],
					['Projects:', 'bold'],
					['Apache Zeppelin web-client customization (AngularJS version)', 'li'],
					['Document management system with complex interface', 'li'],
					['Achievements:', 'bold'],
					['Webpack config refactoring - reduce bundle size x5, reduce build time x2', 'li'],
					[`Rework store architecture - this allowed to completely remove code duplication in storage usages,
                     increase performance in feature realizations`, 'li'],
				],
			},
			{
				position: ['Frontend developer', 'Fit Service'],
				dates: ['Dec 2020', 'Jun 2021'],
				details: [
					[
						'TypeScript, React, Styled Components, GraphQL, ApolloClient,' +
						'MemoryRouter, ReactRouter, Formik, Webpack.',
					],
					['Projects:', 'bold'],
					['CRM to simplify the use of our services for partners.', 'li'],
					[
						`Service booking application, module that can be built as a React component in other projects, 
                        or can be deployed independently for use in partner projects as an IFrame.`, 'li',
					],
					[
						'Booking application adapter -- script for integrating the application' +
						`with minimal partners' efforts.
                        Implemented only by TypeScript, Webpack, Dom and Window api.`, 'li',
					],
				],
			},
			{
				position: ['Frontend Engineer', 'True Engineering'],
				dates: ['Nov 2019', 'Sep 2020'],
				details: [['I worked on complex content management system for large retail network, Angular 8.']],
			},
			{
				position: ['Fullstack developer', 'Axmor Software'],
				dates: ['Jun 2019', 'Sep 2020'],
				details: [
					[
						'A full cycle of feature development - clarification of requirements, implementation of both' +
						'the client and the server sides.',
					],
					['TypeScript, React, CSS Modules, Less, NodeJS, Express, Less, MongoDB, Go, Formik'],
					['Projects:', 'bold'],
					[ 'WMS, flexible system with complete control the life cycle of goods in warehouse', 'li' ],
					[ 'Data analysis system -- custom and flexible Apache Zeppelin analog', 'li' ],
					['Construction company project management system', 'li' ],
				],

			},
			{
				position: ['Teacher', 'Novosibirsk State University'],
				dates: ['Sep 2016', 'Jun 2020'],
				details: [
					['Higher College of Informatics of NSU -- algebra, geometry and discrete mathematics', 'li'],
					['Department of Mechanics and Mathematics of NSU -- differential geometry', 'li'],
				],
			},
			{
				position: [ 'Researcher', 'Sobolev Institute of Mathematics'],
				dates: ['Sep  2016', 'Jun 2019'],
				details: [
					['research in mathematics', 'li'],
					['writing scientific articles', 'li'],
					['participation in conferences', 'li'],
					[
						`I have a solo publication in Q2 math journal -- 
                        https://www.worldscientific.com/doi/10.1142/S0218216517420020`,
					],
				],
			},
		] },

	education: {
		label: 'Education',
		value: [
			{
				position: [ 'Bachelor', 'Novosibirsk State University'],
				dates: ['Sep 2010', 'Jun 2014'],
				details: [
					['Department of Mechanics and Mathematics'],
				],
			},
			{
				position: [ 'Master', 'Novosibirsk State University'],
				dates: ['Sep 2014', 'Jun 2016'],
				details: [
					['Department of Mechanics and Mathematics'],
				],
			},
		],
	},
};