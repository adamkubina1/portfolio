import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/gif';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '61% 39% 16% 84% / 57% 72% 28% 43%',
          animation: `${animationKeyframes} 5s infinite`,
          // animation: ''
        }}
      ></div>
    ),
    {
      ...size,
    }
  );
}

const animationKeyframes = `
    0%    { border-radius: 65% 35% 55% 45% / 55% 50% 55% 45%; }
    12.5% { border-radius: 60% 75% 40% 80% / 70% 70% 60% 65%; }
    25%   { border-radius: 55% 95% 65% 90% / 75% 65% 85% 70%; }
    37.5% { border-radius: 60% 40% 50% 45% / 60% 40% 60% 40%; }
    50%   { border-radius: 55% 95% 65% 90% / 75% 65% 85% 70%; }
    62.5% { border-radius: 60% 40% 50% 45% / 60% 40% 60% 40%; }
    75%   { border-radius: 60% 75% 40% 80% / 70% 70% 60% 65%; }
    87.5% { border-radius: 40% 60% 55% 45% / 50% 60% 40% 50%; }
    100%  { border-radius: 65% 35% 55% 45% / 55% 50% 55% 45%; }
`;
