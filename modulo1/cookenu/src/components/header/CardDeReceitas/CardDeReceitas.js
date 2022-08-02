import * as React from 'react';
import CardContainer from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 const ActionAreaCard = (props) => {
  return (
    <CardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt={props.title}
          height={"150"}
          image={props.image}
          title={props.title}
          
        />
        <CardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}

export default ActionAreaCard