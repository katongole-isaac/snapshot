import { useParams } from "react-router-dom";

export default function (CustomComponent) {
  return function (props) {
    const params = useParams();
    
    return <CustomComponent params={params} {...props} />;
  };
}
