import React, { CSSProperties } from 'react';

import * as S from './styles';

interface IText {
  element:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'strong'
    | 'small';
  className?: string;
  style?: CSSProperties;
  limit?: number;
  text?: string;
  children?: string | React.ReactNode;
}

const Text = ({ element, className, style, limit, text, children }: IText) => {
  const props = { className, style, limit };

  switch (element) {
    case 'h1':
      return <S.H1 {...props}>{children || text}</S.H1>;

    case 'h2':
      return <S.H2 {...props}>{children || text}</S.H2>;

    case 'h3':
      return <S.H3 {...props}>{children || text}</S.H3>;

    case 'h4':
      return <S.H4 {...props}>{children || text}</S.H4>;

    case 'h5':
      return <S.H5 {...props}>{children || text}</S.H5>;

    case 'h6':
      return <S.H6 {...props}>{children || text}</S.H6>;

    case 'p':
      return <S.P {...props}>{children || text}</S.P>;

    case 'span':
      return <S.Span {...props}>{children || text}</S.Span>;

    case 'strong':
      return <S.Strong {...props}>{children || text}</S.Strong>;

    case 'small':
      return <S.Small {...props}>{children || text}</S.Small>;

    default:
      return <S.P {...props}>{children || text}</S.P>;
  }
};

export default Text;
