import React, { CSSProperties } from 'react';

interface IText {
  element?:
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
  let textStyle: React.CSSProperties = style || {};

  if (limit) {
    textStyle = {
      ...textStyle,
      display: '-webkit-box',
      WebkitLineClamp: limit,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
  }

  switch (element) {
    case 'h1':
      return (
        <h1 style={textStyle} className={`${className}`}>
          {children || text}
        </h1>
      );

    case 'h2':
      return (
        <h2 style={textStyle} className={`${className}`}>
          {children || text}
        </h2>
      );

    case 'h3':
      return (
        <h3 style={textStyle} className={`${className}`}>
          {children || text}
        </h3>
      );

    case 'h4':
      return (
        <h4 style={textStyle} className={`${className}`}>
          {children || text}
        </h4>
      );

    case 'h5':
      return (
        <h5 style={textStyle} className={`${className}`}>
          {children || text}
        </h5>
      );

    case 'h6':
      return (
        <h6 style={textStyle} className={`${className}`}>
          {children || text}
        </h6>
      );

    case 'p':
      return (
        <p style={textStyle} className={`${className}`}>
          {children || text}
        </p>
      );

    case 'span':
      return (
        <span style={textStyle} className={`${className}`}>
          {children || text}
        </span>
      );

    case 'strong':
      return (
        <strong style={textStyle} className={`${className}`}>
          {children || text}
        </strong>
      );

    case 'small':
      return (
        <small style={textStyle} className={className}>
          {children || text}
        </small>
      );

    default:
      return (
        <p style={textStyle} className={`${className}`}>
          {children || text}
        </p>
      );
  }
};

export default Text;
