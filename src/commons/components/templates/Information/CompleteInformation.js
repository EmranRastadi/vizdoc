// import { Container } from './style';
import React, { useContext, useState } from 'react';
import {
  Container,
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextareaAutosize,
} from '@mui/material';
import { Label } from '../../atoms';
import { CheckBoxButton, LabelSwiper } from '../../molecules';
import { InforMationContext } from '../../../services/Contexts/InformationStore.context';

export default function CompleteInformation(props) {
  const [gender, setGender] = useState('male');
  const [force, setForce] = useState(false);
  const [doctorType, setDoctorType] = useState('general');
  const { state, dispatch } = useContext(InforMationContext);
  const [data, setData] = useState(state.information);
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

  function onChange(e, name, value) {
    e.preventDefault();
    let dataClone = { ...data };
    dataClone[name] = value;
    setData(dataClone);
    dispatch({
      type: 'INFORMATION',
      payload: dataClone,
    });
  }
  return (
    <Container style={{ paddingBottom: '40px' }}>
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
            onChange={(e) => onChange(e, e.target.name, e.target.value)}
            id="outlined-basic"
            label="سن"
            variant="outlined"
          />
        </Grid>
        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={(e) => {
              onChange(e, 'gender', 'male');
              setGender('male');
            }}
            className={gender === 'male' ? 'active' : ''}
            title={'مرد هستم'}
          />
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={(e) => {
              onChange(e, 'gender', 'female');
              setGender('female');
            }}
            className={gender === 'female' ? 'active' : ''}
            title={'زن هستم'}
          />
        </Grid>
        <Grid item xs="12">
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Gender</FormLabel> */}
            <RadioGroup
              row
              onChange={(e) => onChange(e, e.target.name, e.target.value)}
              aria-label="gender"
              defaultValue={data?.bardar ? data.bardar : 'true'}
              name="bardar"
            >
              <FormControlLabel
                value={'true'}
                control={<Radio />}
                label="باردار هستم"
              />
              &nbsp;&nbsp;&nbsp;
              <FormControlLabel
                value={'false'}
                control={<Radio />}
                label="باردار نیستم"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

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
            placeholder="توضیحات خود را بنویسید"
            style={{
              borderRadius: 10,
              width: '-webkit-fill-available',
              marginTop: 10,
              fontFamily: 'yekan',
              padding: 5,
            }}
          />

          <LabelSwiper chipData={labels} />
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
            placeholder="توضیحات خود را بنویسید"
            style={{
              width: '-webkit-fill-available',
              marginTop: 10,
              borderRadius: 10,
              fontFamily: 'yekan',
              padding: 5,
            }}
          />

          <LabelSwiper chipData={labels} />
        </Grid>

        <Grid item xs="12">
          <Label style={{ fontSize: 15, fontWeight: 'bolder' }}>
            نوع تغییر
          </Label>
          <Label style={{ fontSize: 13, color: '#ccc' }}>
            10 درصد بخاطر اورژانسی
          </Label>
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() => setForce(true)}
            className={force === true ? 'active' : ''}
            title={'اوراژنسی'}
            desc="پاسخ در کمتر از 30 دقیقه"
          />
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() => setForce(false)}
            className={force === false ? 'active' : ''}
            title={'غیر اورژانسی'}
            desc="پاسخ بین 1 الی 10 ساعت"
          />
        </Grid>

        <Grid item xs="12">
          <Label style={{ fontSize: 15, fontWeight: 'bolder' }}>نوع پزشک</Label>
          <Label style={{ fontSize: 13, color: '#ccc' }}>
            20 درصد افزایش قیمت بخاطر پزشک متخصص
          </Label>
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() => setDoctorType('general')}
            className={doctorType === 'general' ? 'active' : ''}
            title={'پزشک عمومی'}
          />
        </Grid>

        <Grid item md={'6'} xs={'12'}>
          <CheckBoxButton
            onClick={() => setDoctorType('advanced')}
            className={doctorType === 'advanced' ? 'active' : ''}
            title={'پزشک متخصص'}
          />
        </Grid>

        <Grid item xs="12">
          <CheckBoxButton
            onlyBtn={true}
            className="active"
            title={'مرحله بعد'}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
