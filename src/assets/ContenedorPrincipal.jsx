import AsideRight from "../AsideRight";
import Header from "../Header";
import AsideLeft from "./AsideLeft";

function ComponentePrincipal() {
  return (
    <div className="ComponentePrincipal">
      <Header />
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default ComponentePrincipal;
