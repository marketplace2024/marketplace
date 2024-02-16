import { Rating } from '@mui/material';
import {
  Img,
  Text,
  TextEl,
  TextItem,
  TextTitle,
  Wrap,
  WrapImg,
  WrapRating,
  WrapTitle,
} from './CardItemSm.styled';
import img from 'assets/images/no_img.jpeg';

export const CardItemSm = () => {
  return (
    <>
      <Wrap>
        <WrapImg>
          <Img src={img} alt="Card image" width={178} height={152} />
          <Text>ID 123123123</Text>
        </WrapImg>
        <WrapTitle>
          <TextTitle>
            Quidem optio sint magnam necessitatibus enim est autem quia
          </TextTitle>
          <TextEl>Category</TextEl>
          <TextEl>Location</TextEl>
          <TextItem>
            Earum nihil eligendi a possimus. Vero dignissimos amet sequi debitis
            dolor. Est iure quae sit vel est laudantium eum placeat dolores.
            Repell
          </TextItem>
          <WrapRating>
            <TextItem>Rating</TextItem>
            <Rating name="read-only" value={''} readOnly />
          </WrapRating>
        </WrapTitle>
      </Wrap>
    </>
  );
};
