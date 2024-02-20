import { Button, Rating } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Block,
  BlokBtn,
  Img,
  RatingItem,
  Text,
  TextElem,
  TextItem,
  TextTitle,
  TextValue,
  Values,
  ValuesItem,
  ValuesTitle,
  ValuesWrp,
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
              <RatingItem>Rating</RatingItem>
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
              <RatingItem>Comments</RatingItem>
              <RatingItem>12345</RatingItem>
            </Block>
            <Block>
              <ChatBubbleOutlineIcon fontSize="small" />
              <RatingItem>1045</RatingItem>
            </Block>
          </WrapStatic>
        </div>
        <ValuesWrp>
          <Values>
            <div>
              <ValuesTitle>Price</ValuesTitle>
              <ValuesItem>1335460 грн</ValuesItem>
            </div>
            <div>
              <ValuesTitle>Quantity</ValuesTitle>
              <ValuesItem>153</ValuesItem>
            </div>
            <div>
              <ValuesTitle>Period of publication</ValuesTitle>
              <ValuesItem>01.01.2024-01.03.2024</ValuesItem>
            </div>
          </Values>
          <BlokBtn>
            <Button size="small" variant="outlined">
              Deactivate
            </Button>
            <Button size="small" variant="outlined">
              Delete
            </Button>
            <Button size="small" variant="outlined" startIcon={<EditIcon />}>
              Edit
            </Button>
          </BlokBtn>
        </ValuesWrp>
      </Wrap>
    </>
  );
};
