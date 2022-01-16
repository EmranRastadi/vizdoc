// import { Container } from '@mui/material';
import { Grid, TextField } from '@mui/material';
import { Container } from './style';
import {
  ExperimentButton,
  ImageSwipper,
  Modal,
  OutlineIconButton,
  ShowResultPrice,
  Tag,
} from '../../../molecules';
import { Card, Label } from '../../../atoms';
import { BiEdit } from 'react-icons/bi';
import { useState } from 'react';

export default function PreviewContainer() {
  const [labels, setLabels] = useState([
    {
      name: 'چکاپ کامل',
    },
    {
      name: 'کرونا',
    },
    {
      name: 'تست بارداری',
    },
    {
      name: 'تست بارداری',
    },
    {
      name: 'تست بارداری',
    },
    {
      name: 'تست بارداری',
    },
    {
      name: 'تست بارداری',
    },
    {
      name: 'تست بارداری',
    },
  ]);

  function onClickChip() {}
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs="12">
          <Card>
            <Grid container spacing={3}>
              <Grid item md={'8'} xs="12">
                <Label style={{ fontSize: 15 }}>
                  خانوم باردار 24 ساله از تهران
                </Label>
              </Grid>

              <Grid item md="4" xs="12">
                <OutlineIconButton
                  id="edit-button"
                  title="ویرایش"
                  icon={<BiEdit color="#212121" />}
                />
              </Grid>
              <Grid item md="3" xs="6">
                <Label style={{ fontSize: 13, marginBottom: 10 }}>
                  نوع تفسیر
                </Label>
                <Tag>غیراورژانسی</Tag>
              </Grid>
              <Grid item md="3" xs="6">
                <Label style={{ fontSize: 13, marginBottom: 10 }}>
                  نوع پزشک
                </Label>
                <Tag>متخصص</Tag>
              </Grid>

              <Grid item md="6" xs="12">
                <ImageSwipper chipData={labels} onClickChip={onClickChip} />
              </Grid>
            </Grid>
          </Card>

          <Grid
            item
            xs="12"
            style={{
              marginTop: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <TextField
              align="center"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            /> */}

            <ShowResultPrice />
          </Grid>
        </Grid>
      </Grid>

      <Modal id="modalsssss" />
    </Container>
  );
}
