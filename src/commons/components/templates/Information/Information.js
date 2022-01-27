import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { TabStepper } from '../../organisms';
import { MainContainer } from '../Experiment/style';
import CompleteInformation from './CompleteInformation';
import Uploader from './Uploader';
import { TabContents } from './style';
import Preview from './Preview';
import {
  InforMationContext,
  InformationStore,
} from '../../../services/Contexts/InformationStore.context';
import { useContext, useState } from 'react';
import { useFetchServiceQuery } from '../../../apis/information-slice-api';
import { Loading } from '../../molecules';

export default function Information() {
  const [step, setStep] = useState(0);

  return (
    <InformationStore>
      <MainContainer>
        <br />
        <Container maxWidth="md">
          <Grid item xs="12">
            <TabStepper step={step} setStep={setStep} />
          </Grid>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid item md="8" xs="12">
              <TabContents className={step === 0 ? 'active' : null}>
                <CompleteInformation setStep={setStep} />
              </TabContents>

              <TabContents className={step === 1 ? 'active' : null}>
                <Uploader setStep={setStep} />
              </TabContents>

              <TabContents className={step === 2 ? 'active' : null}>
                <Preview setStep={setStep} />
              </TabContents>
            </Grid>
          </div>
        </Container>
      </MainContainer>
    </InformationStore>
  );
}
