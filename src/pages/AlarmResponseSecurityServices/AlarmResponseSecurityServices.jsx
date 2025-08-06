import React from "react";
import HeroBanner from "../../components/HeroBanner";
import HeroImage from "../../assets/media/AlarmResponseSecurityServices/background_hero.webp";
import mainImg from "../../assets/media/AlarmResponseSecurityServices/mainImg.webp";
import AboutSection from "../../components/AboutSection";
import ReducedFalseAlarmConsequences from "../../assets/media/AlarmResponseSecurityServices/reduced_false_alarm_consequences.png";
import PeaceOfMindForPropertyOwners from "../../assets/media/AlarmResponseSecurityServices/peace_of_mind_for_property_owners.png";
import MonitoringAndSupport from "../../assets/media/AlarmResponseSecurityServices/monitoring_and_support.png";
import SecurityThreats from "../../assets/media/AlarmResponseSecurityServices/security_threats.png";
import MainImageWhyChoose from "../../assets/media/AlarmResponseSecurityServices/whyChooseUs.webp";
import RapidResponseToAnyAlarmTrigger from "../../assets/media/AlarmResponseSecurityServices/rapid_response_to_any_alarm_trigger.png";
import ExpertlyTrainedSecurityPersonnel from "../../assets/media/AlarmResponseSecurityServices/expertly_trained_security_personnel.png";
import ComprehensiveMonitoringSolutions from "../../assets/media/AlarmResponseSecurityServices/comprehensive_monitoring_solutions.png";
import MinimizingFalseAlarmIncidents from "../../assets/media/AlarmResponseSecurityServices/minimizing_false_alarm_incidents.png";
import PerthSecurityGuards from "../../assets/media/AlarmResponseSecurityServices/security_alarm_services_perth.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import InformationSection from "../../components/InformationSection";
import FAQSection from "../../components/FAQSection";

const AlarmResponseSecurityServices = () => {
  const aboutSectionList = [
    {
      title: "Immediate Action to Security Threats",
      description:
        "When an alarm is triggered, our team responds quickly to assess the situation and take necessary actions. This rapid response helps to minimize risks and potential damage.",
      icon: SecurityThreats,
    },
    {
      title: "24/7 Monitoring and Support",
      description:
        "Our alarm response service operates around the clock, ensuring that your property is monitored and protected day and night, with immediate support available in case of emergencies.",
      icon: MonitoringAndSupport,
    },
    {
      title: "Peace of Mind for Property Owners",
      description:
        "With professional alarm response services, you can rest easy knowing that any security incidents will be handled swiftly and efficiently by trained professionals.",
      icon: PeaceOfMindForPropertyOwners,
    },
    {
      title: "Reduced False Alarm Consequences",
      description:
        "Our team is skilled at differentiating between genuine threats and false alarms, ensuring that you avoid unnecessary disruptions while still maintaining top-level security.",
      icon: ReducedFalseAlarmConsequences,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Rapid Response to Any Alarm Trigger",
      description:
        "Our highly trained team is on standby 24/7 to respond immediately to any alarm triggers. This swift action reduces the risk of theft, vandalism, or unauthorized access and ensures your property is always secure.",
      icon: RapidResponseToAnyAlarmTrigger,
    },
    {
      title: "Expertly Trained Security Personnel",
      description:
        "Our alarm response team consists of experienced security professionals who are skilled in assessing situations, managing threats, and coordinating with emergency services when needed. Their expertise guarantees a high level of protection.",
      icon: ExpertlyTrainedSecurityPersonnel,
    },
    {
      title: "Comprehensive Monitoring Solutions",
      description:
        "We provide integrated monitoring solutions, combining alarm response with ongoing surveillance. This ensures that every alarm activation is met with a coordinated and thorough investigation to maintain the highest level of security.",
      icon: ComprehensiveMonitoringSolutions,
    },
    {
      title: "Minimizing False Alarm Incidents",
      description:
        "False alarms can cause unnecessary disruptions and expenses. Our team is trained to quickly assess the nature of an alarm and handle false alarms appropriately, reducing the likelihood of costly disturbances while maintaining your peace of mind.",
      icon: MinimizingFalseAlarmIncidents,
    },
  ];

  const FAQs = [
    {
      question: "How does your alarm response service work?",
      answer:
        "When an alarm is triggered at your property, our team receives an alert and immediately dispatches security personnel to assess the situation. We respond swiftly to investigate potential threats, coordinate with emergency services if needed, and ensure your property is safe and secure.",
    },
    {
      question: "What types of alarm systems do you support?",
      answer:
        "We support a wide range of alarm systems, including intruder alarms, fire alarms, panic alarms, and CCTV-integrated alarms. Whether it's for residential, commercial, or industrial use, our team is trained to handle all types of systems and provide comprehensive security coverage.",
    },
    {
      question: "Can you provide 24/7 alarm monitoring and response?",
      answer:
        "Yes, our alarm response services operate 24/7, ensuring that your property is monitored and protected at all times. Our team is ready to respond to any alarm activation, day or night, providing round-the-clock security.",
    },
  ];
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner
        heading={"Alarm Response Security Services"}
        subHeading={
          "Bayok State Security Service provides reliable Alarm Response Services in Perth, ensuring immediate action when alarms are triggered to safeguard your property and assets."
        }
        img={HeroImage}
      />
      <AboutSection
        heading={"Benefits of Alarm Response Security Perth Services"}
        subHeading={
          "Bayok State Security Service offers professional alarm response services to ensure your property is protected at all times."
        }
        serviceDetails={aboutSectionList}
        mainImg={mainImg}
      />

      <WhyChooseUs
        mainImg={MainImageWhyChoose}
        heading={"Why Choose Our Alarm Response Security in Perth"}
        subHeading={
          "Bayok State Security Service offers fast, reliable, and professional alarm response services that protect your property around the clock."
        }
        detailsList={whyChooseUsList}
      />

      <InformationSection
        img={PerthSecurityGuards}
        heading={"Which Alarm System Is Best for Your Needs?"}
        paragraph={
          "Choosing the right alarm system depends on the specific security requirements of your property. Options include intruder alarms that detect unauthorized access, fire alarms for early fire detection, and panic alarms for immediate assistance in emergencies. Additionally, CCTV-integrated alarm systems provide real-time video monitoring along with alerts. Each system can be tailored to provide optimal protection for residential, commercial, or industrial properties. Our alarm services are available for the following sectors:"
        }
        bulletPoints={[
          "Home Alarm System",
          "Commercial Alarm System",
          "Site Alarm System",
          "Monitored Alarm System",
          "Perimeter Alarm System",
        ]}
      />

      <FAQSection faqs={FAQs} />
    </div>
  );
};

export default AlarmResponseSecurityServices;
