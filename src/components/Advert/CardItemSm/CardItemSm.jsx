import { Rating } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {
  Block,
  Img,
  Text,
  TextElem,
  TextItem,
  TextTitle,
  TextValue,
  Wrap,
  WrapImg,
  WrapStatic,
  WrapTitle,
} from './CardItemSm.styled';
import img from 'assets/images/no_img.jpeg';
import { useState } from 'react';

export const CardItemSm = () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <Wrap>
        <WrapImg>
          <Img src={img} alt="Card image" width={178} height={152} />
          <Text>ID 123123123</Text>
        </WrapImg>

        <div>
          <WrapTitle>
            <TextTitle>
              Quidem optio sint magnam necessitatibus enim est autem quia
            </TextTitle>
            <TextElem>
              Category <TextValue>Kindle e-readers and digital books</TextValue>
            </TextElem>
            <TextElem>
              Location <TextValue>Portmund</TextValue>
            </TextElem>
            <TextItem>
              Earum nihil eligendi a possimus. Vero dignissimos amet sequi
              debitis dolor. Est iure quae sit vel est laudantium eum placeat
              dolores. Repell
            </TextItem>
          </WrapTitle>
          <WrapStatic>
            <Block>
              <TextItem>Rating</TextItem>
              <Rating
                name="simple-controlled"
                value={value}
                size="small"
                // readOnly
                onChange={(_, v) => {
                  setValue(v);
                }}
              />
            </Block>
            <Block>
              <TextItem>Comments</TextItem>
              <TextItem>12345</TextItem>
            </Block>
            <Block>
              <ChatBubbleOutlineIcon fontSize="small" />
              <TextItem>1045</TextItem>
            </Block>
          </WrapStatic>
        </div>
      </Wrap>
    </>
  );
};
