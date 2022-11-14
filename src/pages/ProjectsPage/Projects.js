import { React, styled, motion } from "Dependencies";
import { Card } from "components/ComponentsMaster";

function Projects() {
  const colContent = [
    {
      src: "https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/SlickFox-Website-Promo-480.mov",
      title: "Slick-Fox",
      desc: "A modern theme for Firefox uses slick animations to create a collapsable url bar.",
      link: "https://github.com/Etesam913/slick-fox",
      video: true,
    },
    {
      src: "https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/xp-newtab.mp4",
      title: "XP Newtab",
      desc: "A new tab extension in the style of Windows XP/98.",
      link: "https://github.com/Etesam913/xp-newtab",
      video: true,
    },
    {
      src: "https://etesam.nyc3.digitaloceanspaces.com/Euismod/darkmode-display-480.mov",
      title: "Euismod",
      desc: "A website that teaches CSS Grid interactively.",
      link: "https://github.com/Etesam913/euismod",
      video: true,
    },
    {
      src: "https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/SwervyTextPromo-480.mov",
      poster:
        "https://res.cloudinary.com/dz5ashos1/image/upload/v1600237181/github/react-swervy-text/yhqkjucss1ahfztn0pw8.png",
      title: "React-Swervy-Text",
      desc: "A npm package that provides an easy way for text to be animated along shapes and curves.",
      link: "https://github.com/Etesam913/react-swervy-text",
      video: true,
    },
  ];

  const col1Content = [
    {
      Card1: {
        src: "https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/SlickFox-Website-Promo-480.mov",
        title: "Slick-Fox",
        desc: "A modern theme for Firefox uses slick animations to create a collapsable url bar.",
        link: "https://github.com/Etesam913/slick-fox",
        video: true,
      },
    },
    {
      Card2: {
        src: "https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/xp-newtab.mp4",
        title: "XP Newtab",
        desc: "A new tab extension in the style of Windows XP/98.",
        link: "https://github.com/Etesam913/xp-newtab",
        video: true,
      },
    },
  ];

  const colElements = colContent.map((item, index) => {
    return (
      <Card
        isFirst={index === 0}
        key={`card-${index}`}
        num={index}
        src={item.src}
        title={item.title}
        desc={item.desc}
        link={item.link}
        video={item.video}
      />
    );
  });

  return (
    <>
      <GridContainer
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        {colElements}
      </GridContainer>
    </>
  );
}

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem 4rem;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem 0;
  }
`;

export default Projects;
