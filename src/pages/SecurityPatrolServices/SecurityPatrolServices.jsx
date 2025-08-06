import React from "react";
import HeroBanner from "../../components/HeroBanner";
import HeroImage from "../../assets/media/SecurityPatrolServices/background_hero.webp";
import mainImg from "../../assets/media/SecurityPatrolServices/patrol_security_services.webp";
import AboutSection from "../../components/AboutSection";
import Flexibility from "../../assets/media/SecurityPatrolServices/flexibility.png";
import RapidResponseSecurity from "../../assets/media/SecurityPatrolServices/rapid_response_security.png";
import PropertyCoverage from "../../assets/media/SecurityPatrolServices/property_coverage.png";
import IncreasedDeterrence from "../../assets/media/SecurityPatrolServices/increased_deterrence_against_crime.png";
import MainImageWhyChoose from "../../assets/media/SecurityPatrolServices/whychooseus.webp";
import Professional from "../../assets/media/SecurityPatrolServices/professional_and_highly_trained_guards.png";
import AdvancedPatrol from "../../assets/media/SecurityPatrolServices/advanced_patrol_technology.png";
import CustomizablePatrol from "../../assets/media/SecurityPatrolServices/customizable_patrol_plans.png";
import Visible from "../../assets/media/SecurityPatrolServices/visible_and_effective_deterrence.png";
import MobilePatrolGuards from "../../assets/media/SecurityPatrolServices/mobile_patrol_guards.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import InformationSection from "../../components/InformationSection";
import FAQSection from "../../components/FAQSection";

const SecurityPatrolServices = () => {
  const aboutSectionList = [
    {
      title: "Increased Deterrence Against Crime",
      description:
        "The visible presence of mobile patrol units acts as a strong deterrent to potential criminals. Their frequent and unpredictable patrols reduce the likelihood of theft, vandalism, and other criminal activities.",
      icon: IncreasedDeterrence,
    },
    {
      title: "Comprehensive Property Coverage",
      description:
        "Mobile patrols ensure that all areas of your property are regularly checked and monitored. This thorough approach helps identify and address any security issues before they escalate.",
      icon: PropertyCoverage,
    },
    {
      title: "Rapid Response to Incidents",
      description:
        "With mobile patrols constantly moving through your site, any security incidents can be quickly addressed. This rapid response capability minimizes potential damage and enhances overall safety.",
      icon: RapidResponseSecurity,
    },
    {
      title: "Flexibility and Adaptability",
      description:
        "Mobile patrol services offer flexibility in security planning, adapting to the specific needs and dynamics of your property. Whether it's adjusting patrol routes or increasing frequency, our service is designed to meet your unique security requirements.",
      icon: Flexibility,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Professional and Highly Trained Guards",
      description:
        "Our mobile patrol security guards are professionally trained to handle various security challenges. Their expertise ensures effective surveillance and prompt response to any incidents.",
      icon: Professional,
    },
    {
      title: "Advanced Patrol Technology",
      description:
        "We utilize the latest technology in our patrol vehicles and equipment, enhancing the efficiency and effectiveness of our security operations. This includes real-time tracking and reporting systems.",
      icon: AdvancedPatrol,
    },
    {
      title: "Customizable Patrol Plans",
      description:
        "Our patrol services are tailored to meet the specific needs of your property. We design flexible patrol plans that adapt to the size, layout, and security requirements of your site.",
      icon: CustomizablePatrol,
    },
    {
      title: "Visible and Effective Deterrence",
      description:
        "The frequent and visible presence of our mobile patrols acts as a powerful deterrent to criminal activity. This proactive approach helps prevent potential threats and ensures a secure environment.",
      icon: Visible,
    },
  ];

  const FAQs = [
    {
      question:
        "How can I find a reputable mobile patrol security company near me?",
      answer:
        "To find a trustworthy mobile patrol security company, look for one with a strong reputation and proven track record. Bayok State Security Service offers top-notch patrol security services in Perth, ensuring reliable and effective protection for your property.",
    },
    {
      question: "How does mobile patrol security enhance property safety?",
      answer:
        "Mobile patrol security enhances property safety by providing a visible deterrent to criminal activity through frequent patrols. Our guards are equipped with advanced technology for real-time reporting and rapid response, addressing security issues before they escalate.",
    },
  ];
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner
        heading={"Mobile Patrol Security Perth"}
        subHeading={
          "Bayok State Security Service provides thorough and vigilant security patrol services, designed to enhance the safety and security of your premises through regular and effective patrols."
        }
        img={HeroImage}
      />
      <AboutSection
        heading={"Benefits of Mobile Patrol Security Services Perth"}
        subHeading={
          "Bayok State Security Service offers mobile patrol security services that provide dynamic and proactive protection for your property."
        }
        serviceDetails={aboutSectionList}
        mainImg={mainImg}
      />

      <WhyChooseUs
        mainImg={MainImageWhyChoose}
        heading={"Why Choose Our Mobile Patrol Security Guards in Perth"}
        subHeading={
          "Bayok State Security Service provides exceptional mobile patrol security guards that ensure comprehensive and reliable protection for your property."
        }
        detailsList={whyChooseUsList}
      />

      <InformationSection
        img={MobilePatrolGuards}
        heading={"Mobile Patrol Security Includes"}
        paragraph={
          "At Bayok State Security Service, our Mobile Patrol Security services offer dynamic and reliable protection tailored to meet the unique needs of your property. Our highly trained security guards conduct regular and random patrols to ensure comprehensive coverage, providing a strong deterrent against criminal activities. By utilizing advanced monitoring technology and strategic patrol routes, we ensure that your premises are safe and secure at all times."
        }
        bulletPoints={[
          "Regular and unscheduled patrols",
          "Real-time tracking and monitoring",
          "Quick response to security incidents",
          "Detailed security assessments",
          "24/7 emergency support",
        ]}
      />

      <FAQSection faqs={FAQs} />
    </div>
  );
};

export default SecurityPatrolServices;
