interface DecorativeAccentsProps {
  variant?: 'hero' | 'section' | 'sparse';
}

export default function DecorativeAccents({ variant = 'section' }: DecorativeAccentsProps) {
  // Use education-themed background layers instead of scattered logo images
  const getBackgroundClass = () => {
    switch (variant) {
      case 'hero':
        return 'edu-bg-hero';
      case 'section':
        return 'edu-bg-section';
      case 'sparse':
        return 'edu-bg-sparse';
      default:
        return 'edu-bg-section';
    }
  };

  return (
    <div 
      className={`decorative-accents-layer ${getBackgroundClass()}`} 
      aria-hidden="true"
    />
  );
}
