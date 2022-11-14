import { CardContainer, ImgContainer, CardDesc, CardVideo } from "./CardStyles";
import { Link, Paragraph } from "components/ComponentsMaster";
import { React, motion, LazyLoadImage, Fragment } from "Dependencies";
import { withTheme } from "styled-components";

function Card(props) {
  return (
    <section>
      {props.isFirst && (
        <Paragraph width='min(95%,24rem)' margin='0 auto'>
          I enjoy making open source projects using React.js.
        </Paragraph>
      )}
      <CardContainer>
        {props.video === true ? (
          <ImgContainer href={props.link}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <CardVideo
                poster={props.poster}
                onLoadedData={(e) => {
                  e.target.play();
                }}
                playsInline
                muted
                preload
                autoPlay
                loop
                src={props.src}
              />
            </motion.div>
          </ImgContainer>
        ) : (
          <ImgContainer href={props.link}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <LazyLoadImage
                alt={`project-${props.num}`}
                src={props.src}
                height='auto'
                width='100%'
              />
            </motion.div>
          </ImgContainer>
        )}

        <CardDesc>
          <Link
            href={props.link}
            underline
            color={props.theme.colors.mainBlue}
            underlineColor={props.theme.colors.mainBlue}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            {props.title}
          </Link>

          <Paragraph padding='0 0.35rem' textAlign='center'>
            {props.desc}
          </Paragraph>
        </CardDesc>
      </CardContainer>
    </section>
  );
}

export default withTheme(Card);
