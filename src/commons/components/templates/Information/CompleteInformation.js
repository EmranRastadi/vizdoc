// import { Container } from './style';
import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  TextField,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextareaAutosize,
} from '@mui/material';
import { toast } from 'react-toastify';

import { Label } from '../../atoms';
import { CheckBoxButton, LabelSwiper, Loading } from '../../molecules';
import { useAppDispatch } from '../../../../hooks';
import { setVisitInformation } from '../../../redux/information/information-slice';
import { useChangeInput } from '../../../hooks/ChangeInput';
import {
  useFetchServiceQuery,
  useGetLabels,
} from '../../../apis/information.api';
import { useDispatch } from 'react-redux';
import { InforMationContext } from '../../../services/Contexts/InformationStore.context';
import { useNotifyManager } from '../../../hooks/Toastify';

export default function CompleteInformation(props) {
  const { setStep } = props;
  const toastId = React.useRef(null);
  const { result: serviceData, isLoading: serviceLoading } =
    useFetchServiceQuery();
  const [filterWhy, setFilterWhy] = useState();
  const [filterHistory, setFilterHistory] = useState();
  const { state, dispatch } = useContext(InforMationContext);
  const { result: historyLabels, isLoading: historyLoading } =
    useGetLabels(filterHistory);
  const { result: whyLabels, isLoading: whyLoading } = useGetLabels(filterWhy);

  // const values = useSelector((state) => state?.information?.value);
  const [force, setForce] = useState(false);
  const [doctorType, setDoctorType] = useState('general');
  const { handleChange, data } = useChangeInput();
  const { notifyError } = useNotifyManager();

  function gotToNextLevel(e) {
    e.preventDefault();
    if (state.information.age) {
      setStep(1);
      dispatch({
        type: 'TAB_SELECTED',
        payload: 1,
      });
    } else {
      notifyError('سن را وارد کنید');
    }
  }

  function addChipForDesc(val) {
    const dataClone = { ...data };
    let newValue = '';
    if (dataClone.why) {
      newValue = dataClone.why + val + ' - ';
    } else {
      newValue = val + ' - ';
    }

    handleChange({
      target: {
        name: 'why',
        value: newValue,
      },
    });
  }

  useEffect(() => {
    dispatch({
      type: 'SERVICE_DATA',
      payload: serviceData,
    });
  }, [serviceData]);

  useEffect(() => {
    let params = {
      gender: data.gender ?? 'male',
      age: data.age ?? 0,
      pregnant: data.pregnant ?? '1',
      owner: null,
    };
    let whyParams = { ...params, owner: 'why' };
    let historyParams = { ...params, owner: 'history' };
    setFilterHistory(historyParams);
    setFilterWhy(whyParams);
  }, [data]);

  function addChipForResume(val) {
    const dataClone = { ...data };
    let newValue = '';
    if (dataClone.history) {
      newValue = dataClone.history + val + ' - ';
    } else {
      newValue = val + ' - ';
    }

    handleChange({
      target: {
        name: 'history',
        value: newValue,
      },
    });
  }

  useEffect(() => {
    dispatch({
      type: 'INFORMATION',
      payload: data,
    });
  }, [data]);

  return (
    <Container style={{ paddingBottom: '40px', position: 'relative' }}>
      {serviceLoading || whyLoading || historyLoading ? <Loading /> : null}
      <br />
      <Label style={{ marginBottom: 5, fontWeight: 'bolder' }}>
        مشخصات آزمایش دهنده
      </Label>
      <br />
      <Grid container spacing={3}>
        <Grid item xs="12">
          <TextField
            dir="rtl"
            fullWidth
            name="age"
            value={data?.age}
            onChange={(e) => handleChange(e)}
            id="outlined-basic"
            label="سن"
            variant="outlined"
          />
        </Grid>
        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={(e) => {
              handleChange({
                target: {
                  name: 'gender',
                  value: 'male',
                },
              });
            }}
            className={
              data.gender ? (data.gender === 'male' ? 'active' : '') : 'active'
            }
            title={'مرد هستم'}
          />
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={(e) => {
              handleChange({
                target: {
                  name: 'gender',
                  value: 'female',
                },
              });
            }}
            className={data.gender === 'female' ? 'active' : ''}
            title={'زن هستم'}
          />
        </Grid>
        {state.information.gender === 'female' ? (
          <Grid item xs="12">
            <FormControl component="fieldset">
              <RadioGroup
                row
                onChange={(e) => handleChange(e)}
                aria-label="gender"
                value={data.pregnant ? data.pregnant : '0'}
                name="pregnant"
              >
                <FormControlLabel
                  value={'1'}
                  control={<Radio />}
                  label="باردار هستم"
                />
                &nbsp;&nbsp;&nbsp;
                <FormControlLabel
                  value={'0'}
                  control={<Radio />}
                  label="باردار نیستم"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        ) : null}

        <Grid item xs="12">
          <Label style={{ fontSize: 15, fontWeight: 'bolder' }}>
            چرا آزمایش داده اید؟
          </Label>

          <Label style={{ fontSize: 13, color: '#ccc' }}>
            توضیحات خود را بنویسد یا از تگ ها استفاده کنید
          </Label>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            name="why"
            onChange={(e) => handleChange(e)}
            placeholder="توضیحات خود را بنویسید"
            style={{
              borderRadius: 10,
              width: '-webkit-fill-available',
              marginTop: 10,
              fontFamily: 'yekan',
              padding: 5,
            }}
            value={state.information.why}
          />

          <LabelSwiper
            chipData={whyLabels?.data?.data?.words ?? []}
            onClickChip={addChipForDesc}
          />
        </Grid>

        <Grid item xs="12">
          <Label style={{ fontSize: 15, fontWeight: 'bolder' }}>
            سابقه بیماری قبلی دارید ؟
          </Label>

          <Label style={{ fontSize: 13, color: '#ccc' }}>
            توضیحات خود را بنویسد یا از تگ ها استفاده کنید
          </Label>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            onChange={handleChange}
            name="history"
            placeholder="توضیحات خود را بنویسید"
            style={{
              width: '-webkit-fill-available',
              marginTop: 10,
              borderRadius: 10,
              fontFamily: 'yekan',
              padding: 5,
            }}
            value={state.information.history}
          />
          <LabelSwiper
            chipData={historyLabels?.data?.data?.words ?? []}
            onClickChip={addChipForResume}
          />
        </Grid>

        <Grid item xs="12">
          <Label style={{ fontSize: 15, fontWeight: 'bolder' }}>
            نوع تغییر
          </Label>
          <Label style={{ fontSize: 13, color: '#ccc' }}>
            {serviceData?.data?.data?.service?.metadata?.emergency_message}
          </Label>
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() => {
              handleChange({
                target: {
                  name: 'emergency',
                  value: true,
                },
              });
            }}
            className={state.information.emergency === true ? 'active' : ''}
            title={'اوراژنسی'}
            desc="پاسخ در کمتر از 30 دقیقه"
          />
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() =>
              handleChange({
                target: {
                  name: 'emergency',
                  value: false,
                },
              })
            }
            className={state.information.emergency === false ? 'active' : ''}
            title={'غیر اورژانسی'}
            desc="پاسخ بین 1 الی 10 ساعت"
          />
        </Grid>

        <Grid item xs="12">
          <Label style={{ fontSize: 15, fontWeight: 'bolder' }}>نوع پزشک</Label>
          <Label style={{ fontSize: 13, color: '#ccc' }}>
            {serviceData?.data?.data?.service?.metadata?.dr_specialist_message}
          </Label>
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() =>
              handleChange({
                target: {
                  name: 'specialist',
                  value: false,
                },
              })
            }
            className={state.information.specialist === false ? 'active' : ''}
            title={'پزشک عمومی'}
          />
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() =>
              handleChange({
                target: {
                  name: 'specialist',
                  value: true,
                },
              })
            }
            className={state.information.specialist === true ? 'active' : ''}
            title={'پزشک متخصص'}
          />
        </Grid>

        <Grid item xs="12">
          <CheckBoxButton
            onlyBtn={true}
            onClick={(e) => gotToNextLevel(e)}
            className="active"
            title={'مرحله بعد'}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
