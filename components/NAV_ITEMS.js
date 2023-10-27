const NAV_ITEMS = [
    {
      label: 'Research',
      // href: '/Research',
      children: [
	{
		label: 'Eye Gaze Estimation',
		subLabel: 'MLDA Industrial Project with Black Sesame Technologies, Singapore',
		href: 'https://github.com/LeeXuanHua/Eyegaze-Estimation',
	},
        {
		label: 'Parallel Curves Detection Method based on Hough Transform',
		subLabel: 'Presented in 23rd TJCDCG3 conference, see page 128',
		href: 'https://www.math.science.cmu.ac.th/tjcdcggg/Book-abstract.pdf#page=135',
        },
	/*
        {
		label: 'Deeply Supervised CNN with Attention Mechanism',
		subLabel: 'High school graduation project',
        },
	*/
      ],
    },
    {
      label: 'Project',
      children: [
        {
		label: 'SaraTree',
		subLabel: 'HACKVCIS hackathon',
		href: 'https://saratree.vercel.app/'
        },
        {
		label: 'Guitar Tab Generator',
		subLabel: 'A website to generate guitar tab from .wav file',
		href: 'https://nattapolguitartab.netlify.app/'
        },
	{
		label: 'MyNinja: personalized dashboard for consignee',
	        subLabel: 'Ninjavan Code Dojo hackathon',
		href: 'https://github.com/mcbebu/ALTER-TABLE',
	},
	{
		label: 'Others - school works, implementations (unofficial) of research paper, etc.',
		subLabel: 'see GitHub Profile',
		href: 'https://github.com/NattapolChan',
	},
      ]
    },
    {
      label: 'Resume',
      // href: 'https://docs.google.com/document/d/1GJzsIIE7Eez76El0f2XoZvN4Wolvu9-fxL5yCWRA200/edit?usp=sharing',
      // href: '/Resume',
      // href: '/Chanpaisit_Resume.pdf'
      // a: '/me/assets/Chanpaisit_Nattapol_Resume.pdf',
	a: '/me/assets/Chanpaisit_Resume-July-2023.pdf'
    },
    {
      label: 'About',
      href: '/About',
    },
  ];

  export default NAV_ITEMS
