import { Button } from '@mui/material';
import { Label } from '../../atoms';
import { Container } from './style';
import {useHistory} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import * as React from "react";

export default function AuthButton({ pay, setPay }) {
    const history = useHistory();
    //const [pay, setPay] = React.useState(false);
  return (
    <Container>
        <Button onClick={() => setPay(true)}>
            <AiOutlineUser
                style={{ fontSize: '20px', cursor: 'pointer' ,color:'#fff'}}
            />
            <Label
                className={'expButton'}
                style={{
                    fontSize: 12,
                    color: '#fff',
                    fontWeight: 100,
                }}
            >
                ورود یا ثبت نام
            </Label>
        </Button>
    </Container>
  );
}
