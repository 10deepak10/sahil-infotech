import GridBlock from '../../../components/gridBlock/GridBlock'

const Perk = () => {
    const ourServices = [
    {
      id: 1,
      title: "Growth-Focused",
      img: "/media/icons/bar.svg",
      description:
        "We keep employee growth in mind, with each development step and project we take up.",
    },
    {
      id: 2,
      title: "Regular Outings",
      img: "/media/icons/plane.svg",
      description:
        "Outings like picnic, movie day, sports day and more are organized for mental and physical balance.",
    },
    {
      id: 3,
      title: "Bonus & Compensations",
      img: "/media/icons/money.svg",
      description:
        "Timely appraisals, bonus and compensations are made based on performance.",
    },
    {
      id: 4,
      title: "Periodic Upskilling Sessions",
      img: "/media/icons/education.svg",
      description:
        "We believe in constant learning and provide training sessions regularly to employees for their growth and development.",
    },
    {
      id: 5,
      title: "Competitive & Supportive Environment",
      img: "/media/icons/puzzle.svg",
      description:
        "The atmosphere at Sahil Infotech challenges and nurtures you at the same time with a supportive team.",
    },
    {
      id: 6,
      title: "Flexible Working Hours",
      img: "/media/icons/clock.svg",
      description:
        "Flexible work timing increases productivity and does not include stress for the team members.",
    },
    {
      id: 7,
      title: "Employee-First",
      img: "/media/icons/sparkels.svg",
      description:
        "Our team members take precedence over anything, every time - which helps them achieve their potential.",
    },
    {
      id: 8,
      title: "Paid Overtime",
      img: "/media/icons/paid.svg",
      description:
        "Deadlines are important, and we compensate for each deadline met through overtime appreciation.",
    },
    {
      id: 9,
      title: "Celebrations",
      img: "/media/icons/celebration.svg",
      description:
        "Celebrations for festivals and social days is a routine at Sahil Infotech.",
    },
   
  ];
  return (
        <GridBlock
      heading="Let Your Career Take Flight"
      subText="We don’t just offer jobs, we create a space where passion meets innovation."
      items={ourServices}
    />
  )
}

export default Perk