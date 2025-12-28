import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import serviceData from "../../db/services.json";
import "./ServiceDetail.scss";
import Banner from "../../components/Banner/Banner";
import Experties from "../home/Experties/Experties";
import { SplitBlock } from "../../components/splitBlock/SplitBlock";
import Process from "../home/process/Process";
import GridBlock from "../../components/gridBlock/GridBlock";
import FAQ from "../../components/faq/FAQ";
import Experience from "../home/experience/Experience";

const ServiceDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const selectedService = serviceData.find(
    (service) =>
      service.title.toLowerCase().replace(/[\s/]+/g, "-") ===
      title?.toLowerCase()
  );

  useEffect(() => {
    if (!selectedService) {
      navigate("/", { replace: true });
    }
  }, [selectedService, navigate]);

  if (!selectedService) return null;

  const handleNavigate = () => {
    const serviceSlug = selectedService.title
      .toLowerCase()
      .replace(/[\s/]+/g, "-");

    navigate(`/contact?service=${serviceSlug}`);
  };

  // Dynamic SEO variables
  const seoTitle = `${selectedService.title} | Sahil Infotech`;
  const seoDescription =
    selectedService.description 
  const seoKeywords = selectedService.keywords.join(", ")
   

  return (
    <>
      {/* SEO meta tags */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={selectedService.detail?.information[0]?.img ? `${window.location.origin}${selectedService.detail.information[0].img}?v=1` : `${window.location.origin}/media/logo.png?v=1`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={selectedService.detail?.information[0]?.img ? `${window.location.origin}${selectedService.detail.information[0].img}?v=1` : `${window.location.origin}/media/logo.png?v=1`} />

        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Banner
        background={"/media/hero-bg.png"}
        title={selectedService.title}
        description={selectedService.description}
      />
      <SplitBlock
        title={selectedService.detail.information[0].title}
        subtitle={selectedService.detail.information[0].description}
        image={selectedService.detail.information[0].img}
        buttonText="Get in Touch"
        buttonPath={`/contact?service=${selectedService.title
          .toLowerCase()
          .replace(/[\s/]+/g, "-")}`}
      />
      {selectedService.key !== "QA" ? (
        <Experties selectedKey={selectedService.key} />
      ) : (
        <Experience />
      )}

      <SplitBlock
        reverse={true}
        title={selectedService.detail.information[1].title}
        subtitle={selectedService.detail.information[1].description}
        list={selectedService.detail.information[1].points}
        image={selectedService.detail.information[1].img}
        dataAosLeft="fade-left"
        dataAosRight="fade-right"
      />
      <Process
        ourProcess={selectedService.detail.process}
        arrowOrder={
          selectedService.detail.process.length > 4
            ? ["→", "→", "_", "←", "↓"]
            : ["→", "→", "_", "↓"]
        }
      />
      <GridBlock
        heading={`Our ${selectedService.title} Services`}
        subText={selectedService.detail.services.description}
        items={selectedService.detail.services.list}
      />
      <SplitBlock
        title={selectedService.detail.information[2].title}
        subtitle={selectedService.detail.information[2].description}
        image={selectedService.detail.information[2].img}
        buttonText="Get Started"
        buttonPath={`/contact?service=${selectedService.title
          .toLowerCase()
          .replace(/[\s/]+/g, "-")}`}
      />
      <FAQ faqs={selectedService.detail.faq} />
    </>
  );
};

export default ServiceDetail;
