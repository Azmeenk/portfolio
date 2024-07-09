import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const StyledCard = styled.div`
  background-color: hsla(0, 0%, 100%, 0.025);
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, 0.05);
  height: 100%;
  overflow-y: auto;
`;

const DefaultCard = ({ children, className = '', ...others }: CardProps) => {
  return (
    <StyledCard
      className={`z-1 rounded-xl bg-white transition-all duration-300 ${className}`}
      {...others}
      style={{ overflowY: 'auto' }} // Ensure overflowY is set to auto
    >
      {children}
    </StyledCard>
  );
};

export default DefaultCard;
