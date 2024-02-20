import styled from 'styled-components';

export const Wrap = styled.div`
  height: 200px;
  border-top: none;
  box-shadow: 0 2px 1px 0 #d1d5eb;

  display: flex;
  /* justify-content: space-around; */
`;

export const WrapImg = styled.div`
  width: 178px;
  margin-right: 26px;
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
  align-items: center;
  gap: 10px;
`;

export const ValuesWrp = styled.div`
  /* display: flex; */
  /* fle */
`;

export const Values = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 26px;
  width: 326px;
  height: 152px;
  margin-bottom: 8px;
`;

export const RatingItem = styled.div`
  font-size: 12px;
  line-height: calc(15 / 12);
  text-align: center;
`;

export const ValuesTitle = styled.div`
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
`;

export const ValuesItem = styled.div`
  font-size: 12px;
  margin-top: 50px;
  text-align: center;
`;

export const BlokBtn = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;
