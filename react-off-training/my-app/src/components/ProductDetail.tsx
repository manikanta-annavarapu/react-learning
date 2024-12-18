import { useParams } from "react-router-dom";
import Card from "./Card";

export default function ProductDetail() {
  const params: any = useParams();
  return (
    <Card>
      <h1>ProductDetail</h1>
      <h3>{params.pid}</h3>
    </Card>
  );
}
