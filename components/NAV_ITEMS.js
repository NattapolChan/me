const NAV_ITEMS = [
    {
      label: 'Research',
      // href: '/Research',
      children: [
	{
		label: 'Eye Gaze Estimation',
		sublabel: 'MLDA Industrial Project',
		href: 'https://github.com/LeeXuanHua/Eyegaze-Estimation',
	},
        {
		label: 'Parallel Curves Detection Method based on Hough Transform',
		subLabel: 'see page 128',
		href: 'https://www.math.science.cmu.ac.th/tjcdcggg/Book-abstract.pdf#page=135',
        },
        {
		label: 'Deeply Supervised CNN with Attention Mechanism',
		subLabel: 'High school graduation project',
        },
      ],
    },
    {
      label: 'Project',
      children: [
        {
		label: 'SaraTree',
		subLabel: 'A submission to HACKVCIS hackathon',
		href: 'https://saratree.vercel.app/'
        },
        {
		label: 'Guitar Tab Generator',
		subLabel: 'A website to generate guitar tab from .wav file',
		href: 'https://nattapolguitartab.netlify.app/'
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
