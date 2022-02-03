import { CloseModal, Label } from '../../atoms';
import { ListLi, ListUl, ModalConteiner } from './style';
import {Link} from "@mui/material";

export default function MenuList({ open, setOpen }) {
  return (
    <>
      <ListUl className="menu-in-big" style={{ flexGrow: 1 }}>
     {/*   <ListLi>
          <Link to={'/dashboard'}><Label style={{ fontSize: 13 }}>پیشخوان</Label></Link>
        </ListLi>
        <ListLi>
          <Label style={{ fontSize: 13 }}>وبلاگ</Label>
        </ListLi>*/}
      </ListUl>

      <ModalConteiner className={open ? 'active' : ''}>
        <CloseModal onClick={() => setOpen(false)} />
        <ListUl
          style={{
            display: 'flex !important',
            flexDirection: 'column',
            rowGap: 20,
          }}
        >
          <ListLi>
            <Label style={{ fontSize: 15 }}>صفحه اصلی</Label>
          </ListLi>
          <ListLi>
            <Label style={{ fontSize: 15 }}>صفحه اصلی</Label>
          </ListLi>
          <ListLi>
            <Label style={{ fontSize: 15 }}>صفحه اصلی</Label>
          </ListLi>
          <ListLi>
            <Label style={{ fontSize: 15 }}>صفحه اصلی</Label>
          </ListLi>
        </ListUl>
      </ModalConteiner>
    </>
  );
}
