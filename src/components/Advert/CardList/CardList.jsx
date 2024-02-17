import { CardItemSm } from '../CardItemSm';
import { Wrap } from './CardList.styled';

export const CardList = () => {
  return (
    <Wrap>
      <li>
        <CardItemSm />
      </li>
      <li>
        <CardItemSm />
      </li>
      <li>
        <CardItemSm />
      </li>
    </Wrap>
  );
};
