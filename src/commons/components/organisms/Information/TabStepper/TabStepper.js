import { Progress } from '../../../atoms';
import { StepItem } from '../../../molecules';
import { Container, StepList } from './style';

export default function TabStepper(props) {
  const { step, setStep } = props;
  return (
    <Container>
      <StepList>
        <StepItem
          className={step === 1 || step === 2 || step === 3 ? 'active' : ''}
          // onClick={() => setStep(0)}
          num={1}
          title="تکمیل اطلاعات"
        />
        <StepItem
          className={step === 2 || step === 3 ? 'active' : ''}
          // onClick={() => setStep(1)}
          num={2}
          title="آپلود آزمایش"
        />
        <StepItem
          className={step === 3 ? 'active' : ''}
          // onClick={() => setStep(2)}
          num={3}
          title="بررسی نهایی"
        />
      </StepList>
      <Progress
        percentage={((step + 1) * 33 > 90 ? 100 : (step + 1) * 33) + '%'}
      />
    </Container>
  );
}
