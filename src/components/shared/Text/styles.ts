import styled, { css } from 'styled-components';

interface IText {
  limit?: number;
}

const propsLimit = props =>
  props.limit &&
  css`
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.limit};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

export const H1 = styled.h1<IText>`
  ${propsLimit}
`;

export const H2 = styled.h2<IText>`
  ${propsLimit}
`;

export const H3 = styled.h3<IText>`
  ${propsLimit}
`;

export const H4 = styled.h4<IText>`
  ${propsLimit}
`;

export const H5 = styled.h5<IText>`
  ${propsLimit}
`;

export const H6 = styled.h6<IText>`
  ${propsLimit}
`;

export const Span = styled.span<IText>`
  ${propsLimit}
`;

export const Strong = styled.strong<IText>`
  ${propsLimit}
`;

export const Small = styled.small<IText>`
  ${propsLimit}
`;

export const P = styled.p<IText>`
  ${propsLimit}
`;
