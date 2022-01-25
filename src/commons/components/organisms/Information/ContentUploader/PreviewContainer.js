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
import { useContext, useState } from 'react';
import { InforMationContext } from '../../../../services/Contexts/InformationStore.context';

export default function PreviewContainer(props) {
  const { setStep } = props;
  const { state } = useContext(InforMationContext);

  function onClickChip() {}

  function _renderWhoIs() {
    let gender = state.information.gender === 'female' ? 'خانم' : 'آقا';
    let pregent = state.information.pregnant === '1' ? 'باردار' : '';
    let age = state.information.age + ' ساله';
    return gender + ' ' + pregent + ' ' + age;
  }
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs="12">
          <Card>
            <Grid container spacing={3}>
              <Grid item md={'8'} xs="12">
                <Label style={{ fontSize: 15 }}>{_renderWhoIs()}</Label>
              </Grid>

              <Grid item md="4" xs="12">
                <OutlineIconButton
                  id="edit-button"
                  onClick={() => setStep(0)}
                  title="ویرایش"
                  icon={<BiEdit color="#212121" />}
                />
              </Grid>
              <Grid item md="3" xs="6">
                <Label style={{ fontSize: 13, marginBottom: 10 }}>
                  نوع تفسیر
                </Label>
                <Tag>
                  {state.information.emergency === true
                    ? 'اورژانسی'
                    : 'غیر اورژانسی'}
                </Tag>
              </Grid>
              <Grid item md="3" xs="6">
                <Label style={{ fontSize: 13, marginBottom: 10 }}>
                  نوع پزشک
                </Label>
                <Tag>
                  {state.information.specialist === true ? 'متخصص' : 'عمومی'}
                </Tag>
              </Grid>

              <Grid item md="6" xs="12">
                <ImageSwipper
                  chipData={state.uploaded}
                  onClickChip={onClickChip}
                />
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
