import GridBlock from "../../../components/gridBlock/GridBlock";
import ourServices from "../../../db/services.json"

const Services = () => {
  return (
    <GridBlock
      heading="Our Services"
      subText="Explore our cutting-edge digital products designed to transform industries."
      items={ourServices}
      navigateto={"/service/"}
    />
  );
};

export default Services;
