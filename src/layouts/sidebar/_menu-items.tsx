import routes from '@/config/routes';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { ExchangeIcon } from '@/components/icons/exchange';
import { LivePricing } from '@/components/icons/live-pricing';
import { LockIcon } from '@/components/icons/lock-icon';

export const defaultMenuItems = [
  {
    name: 'Swap',
    icon: <ExchangeIcon />,
    href: routes.swap,
  },
  {
    name: 'liquidity',
    icon: <PoolIcon />,
    href: routes.liquidity,
  },
  {
    name: 'Farm',
    icon: <LivePricing />,
    href: routes.livePricing,
  },
  {
    name: 'Profile',
    icon: <ProfileIcon />,
    href: routes.profile,
  },
];

export const otherPagesMenuItems = [
  {
    name: 'Authentication',
    icon: <LockIcon className="w-[18px]" />,
    href: routes.signIn,
    dropdownItems: [
      {
        name: 'Sign in',
        href: routes.signIn,
      },
      {
        name: 'Sign up',
        href: routes.signUp,
      },
      {
        name: 'Reset pin',
        href: routes.resetPin,
      },
      {
        name: 'Forget password',
        href: routes.forgetPassword,
      },
    ],
  },
];
