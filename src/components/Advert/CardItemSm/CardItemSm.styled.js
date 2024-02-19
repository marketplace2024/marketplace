import styled from 'styled-components';

export const Wrap = styled.div`
  height: 200px;
  border-top: none;
  box-shadow: 0 2px 1px 0 #d1d5eb;

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
  height: 152px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const TextTitle = styled.p`
  font-size: 14px;
  line-height: calc(17 / 14);
`;

export const TextElem = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey400};
`;

export const TextValue = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.black};
`;

export const TextItem = styled.p`
  font-size: 12px;
  line-height: calc(15 / 12);
  height: 30px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const WrapStatic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  gap: 10px;
`;
