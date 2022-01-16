import { Container, Label } from './style';

export default function ShowResultPrice() {
  return (
    <Container>
      <Label className="title">مبلغ قابل پرداخت</Label>
      <Label className="value">870/000 تومان</Label>
    </Container>
  );
}
