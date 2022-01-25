import { useContext } from 'react';
import { InforMationContext } from '../../../services/Contexts/InformationStore.context';
import { Container, Label } from './style';

export default function ShowResultPrice() {
  const { state } = useContext(InforMationContext);

  function _renderPrice() {
    let basePrice = state.serviceData?.data?.data?.service.price;
    let meta = state.serviceData?.data?.data?.service.metadata;
    let emergency = state.information.emergency;
    let specialist = state.information.specialist;
    if (emergency) {
      basePrice = parseInt(basePrice) + parseInt(meta.emergency_price);
    }

    if (specialist) {
      basePrice = parseInt(basePrice) + parseInt(meta.dr_specialist_price);
    }

    let spr = formatNumber(basePrice + '');
    return spr;
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return (
    <Container>
      <Label className="title">مبلغ قابل پرداخت</Label>
      <Label className="value">{_renderPrice()} تومان</Label>
    </Container>
  );
}
