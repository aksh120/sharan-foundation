import { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: string;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation,
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('animate__animated', `animate__${animation}`);
              }, delay);
            } else {
              entry.target.classList.add('animate__animated', `animate__${animation}`);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={elementRef} className={`animate__animated animate__${animation} animate__paused ${className}`}>
      {children}
    </div>
  );
};