/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import ProjectCard from "./project-card"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
// import ProjectsMDX from "../sections/projects"
// import { attributes, html } from '../../content/about.md'

// const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  const Projects = ({ offset, factor = 2 }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, var(--theme-ui-colors-background) 0%, var(--theme-ui-colors-primary) 100%)"
    //   bg="linear-gradient(to right, #6a5acd 0%, #00bfff 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          {/* <ProjectsMDX /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
            <ProjectCard
              title="Computer Engineering"
              link="./"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              Bachelor of Science in Computer Engineering from
              California Polytechnic State University
            </ProjectCard>
            <ProjectCard
              title="Electrical Engineering"
              link="./"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              Electrical Engineering Contractor
            </ProjectCard>
            <ProjectCard
              title="3D Printing"
              link="./"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              3D Printing is not only a pasion of mine, but I also have experience working
              with CNC machines and modifying firmware reqired for 3D printing.
            </ProjectCard>
            <ProjectCard
              title="AI Research"
              link="./"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              I stay up to date on the latest AI Systems and Research. It is an increasingly
              impotant part of all Technical and Scientific fields, and I hope to be able to
              influence the study in a positive way.
            </ProjectCard>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="hexa" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="hexa" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg icon="hexa" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <Svg icon="hexa" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="hexa" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <Svg icon="hexa" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <Svg icon="hexa" width={16} color="icon_yellow" left="70%" top="90%" />
        <Svg icon="hexa" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <Svg icon="hexa" width={6} color="icon_brightest" left="75%" top="10%" />
        <Svg icon="hexa" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="hexa" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="hexa" width={12} color="icon_pink" left="80%" top="60%" />
      <Svg icon="hexa" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="hexa" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects