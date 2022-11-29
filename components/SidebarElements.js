import { ChatBubbleLeftIcon, ShoppingBagIcon } from '@heroicons/react/20/solid';
import {
  CurrencyDollarIcon,
  HomeIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import GrowthFunding from './Funding';

const agencynav = [
  {
    name: 'Home',
    href: '../../dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Growth Tools',
    href: '../../dashboard/listen',
    icon: ChatBubbleLeftIcon,
    current: false,
  },
];

const ambassadornav = [
  { name: 'Home', href: '../../dashboard', icon: HomeIcon },
  {
    name: 'Ambassador Program',
    href: '../../dashboard/funding',
    icon: EyeIcon,
    current: false,
  },
  {
    name: 'Grow your Channel',
    href: '../../dashboard/listen',
    icon: ChartBarIcon,
    current: false,
  },
];

const navigation = [
  {
    name: 'Home',
    href: '../../dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Your Growth Fund',
    href: '../../dashboard/funding',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Grow your Brand',
    href: '../../dashboard/listen',
    icon: ChatBubbleLeftIcon,
  },
  {
    name: 'Sell your Brand',
    href: '../../dashboard/exit_strategy',
    icon: ShoppingBagIcon,
  },
];

const secondaryNavigation = [
  {
    name: 'My Brands',
    href: '#',
    icon: CogIcon,
  },
  {
    name: 'Help',
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Privacy',
    href: '#',
    icon: ShieldCheckIcon,
  },
];

export { agencynav, navigation, ambassadornav, secondaryNavigation };
