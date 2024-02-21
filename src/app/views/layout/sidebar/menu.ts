export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  expanded?: boolean;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
}

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard',
  },
  {
    label: 'My Apps',
    isTitle: true,
  },
  {
    label: 'Electoral List',
    icon: 'list',
    link: '/electoral-list',
    subItems: [
      {
        label: 'Registration',
        link: '/elector/registration',
      },
    ],
  },
  {
    label: 'Candidates Management',
    icon: 'users',
    link: '/candidates',
  },
  {
    label: 'Election Session',
    icon: 'mail',
    link: '/election',
  },
];
