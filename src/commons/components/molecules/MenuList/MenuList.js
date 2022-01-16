import { CloseModal, Label } from '../../atoms';
import { ListLi, ListUl, ModalConteiner } from './style';

export default function MenuList({ open, setOpen }) {
  return (
    <>
      <ListUl className="menu-in-big" style={{ flexGrow: 1 }}>
        <ListLi>
          <Label style={{ fontSize: 13 }}>صفحه اصلی</Label>
        </ListLi>
        <ListLi>
          <Label style={{ fontSize: 13 }}>صفحه اصلی</Label>
        </ListLi>
        <ListLi>
          <Label style={{ fontSize: 13 }}>صفحه اصلی</Label>
        </ListLi>
        <ListLi>
          <Label style={{ fontSize: 13 }}>صفحه اصلی</Label>
        </ListLi>
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
