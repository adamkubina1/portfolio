import { PulsatingCircle } from '@/components/generic/pulsatingCircle';

export const LinkHighlighterLight = ({
  className,
  delay = 0.4,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <PulsatingCircle
      key={'linkHighlighterLight'}
      className={`dark:hidden  bg-yellow-300 ${className}`}
      lightColor={'rgb(250, 202, 21)'}
      delay={delay}
    />
  );
};

export const LinkHighlighterDark = ({
  className,
  delay = 0.4,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <PulsatingCircle
      key={'linkHighlighterDark'}
      className={`bg-gray-500 hidden dark:block ${className}`}
      lightColor={'rgb(211,211,211)'}
      delay={delay}
    />
  );
};
