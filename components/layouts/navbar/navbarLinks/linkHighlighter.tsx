import { PulsatingCircle } from '@/components/generic/pulsatingCircle';

export const LinkHighlighterLight = ({ className }: { className?: string }) => {
  return (
    <PulsatingCircle
      key={'linkHighlighterLight'}
      className={`dark:hidden  bg-yellow-300 ${className}`}
      lightColor={'rgb(250, 202, 21)'}
    />
  );
};

export const LinkHighlighterDark = ({ className }: { className?: string }) => {
  return (
    <PulsatingCircle
      key={'linkHighlighterDark'}
      className={`bg-gray-500 hidden dark:block ${className}`}
      lightColor={'rgb(211,211,211)'}
    />
  );
};
