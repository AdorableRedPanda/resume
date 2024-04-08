import type { Resume } from 'src/types';

export const en: Resume = {
	contacts: [
		['fa-regular fa-paper-plane fa-xl', 'https://t.me/ksgotin', 'ksgotin'],
		[
			'fa-regular fa-envelope fa-xl',
			'mailto:gktin@yandex.ru',
			'gktin@yandex.ru',
		],
		[
			'fa-brands fa-linkedin fa-xl',
			'https://www.linkedin.com/in/kgotin/',
			'kgotin',
		],
		['fa-regular fa-phone fa-lg', 'tel:+374 93 117769', '+374 93 117769'],
		[
			'fa-brands fa-github fa-xl',
			'https://github.com/AdorableRedPanda',
			'AdorableRedPanda',
		],
	],

	education: {
		label: 'Education',
		value: [
			{
				dates: ['Sep 2010', 'Jun 2014'],
				details: [['Department of Mechanics and Mathematics']],
				position: ['Bachelor', 'Novosibirsk State University'],
			},
			{
				dates: ['Sep 2014', 'Jun 2016'],
				details: [['Department of Mechanics and Mathematics']],
				position: ['Master', 'Novosibirsk State University'],
			},
		],
	},
	profile: {
		about: {
			label: 'About me',
			value: [
				['strong math background', 'li'],
				['teaching experience', 'li'],
				['some full-stack experience', 'li'],
				[
					`I like to develop low-level APIs and components, which in turn are used to implement business 
                    functions, so I'm looking for a project with a complex interesting frontend and a strong team.
                    Open to relocation.`,
				],
			],
		},
		location: 'Dilijan, Armenia',
		name: 'Konstantin Gotin',
		position: 'Frontend developer',
	},

	skills: ['React', 'Redux', 'JS/TS', 'HTML', 'CSS/SCSS', 'Webpack/Vite'],

	workExperience: {
		label: 'Work experience',
		value: [
			{
				dates: ['Apr 2023', 'Jan 2024'],
				details: [
					['TS, React, Redux, PWA, Webpack, Jest, Post messages'],
					['Yandex Games', 'bold'],
					['Partners integrations', 'li'],
					['Working on code review process', 'li'],
				],
				position: ['Frontend developer', 'Yandex'],
			},
			{
				dates: ['Aug 2021', 'Feb 2023'],
				details: [
					[
						'TS, React, Redux, Redux-Saga, Redux Toolkit, Webpack, Jest, React Testing Library',
					],
					['Projects:', 'bold'],
					[
						'Apache Zeppelin web-client customization (AngularJS version)',
						'li',
					],
					['Document management system with complex interface', 'li'],
					['Achievements:', 'bold'],
					[
						'Webpack config refactoring - reduce bundle size x5, reduce build time x2',
						'li',
					],
					[
						`Rework store architecture - realized DI and encapsulation principles, completely remove code 
					duplication in storage usages, increase performance in feature realizations`,
						'li',
					],
				],
				position: ['Frontend developer', 'TecForce'],
			},
			{
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
                        or can be deployed independently for use in partner projects as an IFrame and adapter for it.`,
						'li',
					],
				],
				position: ['Frontend developer', 'Fit Service'],
			},
			{
				dates: ['Jun 2019', 'Dec 2020'],
				details: [
					[
						'A full cycle of feature development - clarification of requirements, implementation of both' +
							'the client and the server sides.',
					],
					[
						'TypeScript, React, CSS Modules, Less, NodeJS, Express, Less, MongoDB, Go, Formik',
					],
					['Projects:', 'bold'],
					[
						'WMS, flexible system with complete control the life cycle of goods in warehouse',
						'li',
					],
					[
						'Data analysis system -- custom and flexible Apache Zeppelin analog',
						'li',
					],
					['Construction company project management system', 'li'],
				],
				position: ['Fullstack developer', 'Axmor Software'],
			},
			{
				dates: ['Sep 2016', 'Jun 2020'],
				details: [
					[
						'Higher College of Informatics of NSU -- algebra, geometry and discrete mathematics',
						'li',
					],
					[
						'Department of Mechanics and Mathematics of NSU -- differential geometry',
						'li',
					],
				],
				position: ['Teacher', 'Novosibirsk State University'],
			},
			{
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
				position: ['Researcher', 'Sobolev Institute of Mathematics'],
			},
		],
	},
};
