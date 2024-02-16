import styled from 'styled-components';

export const Wrap = styled.div`
  height: 200px;
  border: 1px solid lightgray;
  border-top: none;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 26px;
`;

export const WrapImg = styled.div`
  width: 178px;
`;

export const Img = styled.img`
  object-fit: cover;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 12px;
  text-align: center;
`;

export const WrapTitle = styled.div`
  width: 386px;
  padding-top: 8px;
`;

export const TextTitle = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;

export const TextEl = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey400};

  margin: 10px 0;
`;

export const TextItem = styled.p`
  font-size: 12px;
`;

export const WrapRating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 13px;
`;
