import React from "react";
import { Typography, Grid, Button, Chip, Box } from "@mui/material";
import ImageCard from "./ImageCard";
import ColorCard from "./ColorCard";
import TypographyCard from "./TypographyCard";
import ChallengeCard from "./ChallengeCard";
import IconCard from "./IconCard";
import ActionAreaCard from "./ActionAreaCard";
import BasicSelect from "./DropDown";
import BasicModal from "./BasicModal";
import ReusableModal from "./ReusableModal";
import BottomNavbar from "./NavBar";
import DonutChart from "./DonutChart";

const Content = () => {
  const moods = [
    { value: "Really Happy", name: "Really Happy" },
    { value: "Happy", name: "Happy" },
    { value: "Sad", name: "Sad" },
    { value: "Really Sad", name: "Really Sad" }
  ];

  return (
    <div
      className="content"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <section id="wellnest" className="mt-20">
        <Typography variant="h3">WellNest</Typography>
        <hr className="w-3/4" />
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Embrace WellNess. Embrace WellNest.
        </Typography>
        <Typography ariant="body1" sx={{ marginTop: "1rem" }}>
          WellNest is your all-in-one solution to bridge the gap between mental
          health awareness,
          <br />
          prevention, and treatment. Especially, if you are a young
          professional!
        </Typography>
      </section>
      <section id="style" className="mt-10">
        <Typography variant="h3">Style Guide</Typography>
        <hr className="w-3/4" />
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Gather 'round, WellNesters! Introducing WellNest's style guide -- a
          wizard's spellbook,
          <br />
          conjuring enchantments to transform your mental health journey into a
          whimsical
          <br />
          adventure. Here, pixels mingle with mindfulness, colors conspire for
          serenity,
          <br />
          and fonts softly chant calming mantras. It's more than a manual; it's
          the gateway
          <br />
          to unlock the hidden garden of WellNest's visual allure. Grab your
          creative wands,
          <br />
          and together, let's paint the world in tranquil hues, pixel by pixel.
        </Typography>
      </section>
      <section id="logo" className="mt-10">
        <Typography variant="h3">Logo</Typography>
        <hr className="w-3/4" />
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Our logo isn't just a heart in blue with nest-like lines; it's the
          visual encapsulation of WellNest's essence.
          <br />
          The heart symbolizes the core of our mission: nurturing mental health
          and wellness.
          <br />
          Blue, with its calming and serene aura, embodies trust, stability, and
          tranquility—the very emotions.
          <br />
          we aim to evoke within our users. Now, those nest-like lines? They're
          more than just strokes; they represent.
          <br />
          the safe haven, the cocoon of support and comfort that WellNest
          provides. Just as a nest cradles its inhabitants,
          <br />
          our application nestles users in a space that fosters growth,
          resilience, and healing. So, this logo isn't just a symbol;
          <br />
          it's a testament to our commitment—a visual embrace promising solace
          and empowerment on the journey to mental well-being.
          <br />
        </Typography>
        <ImageCard imageUrl={"/WellNestLogo.png"} />
      </section>
      <section id="color" className="mt-10">
        <Typography variant="h3">Colors</Typography>
        <hr className="w-3/4" />
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Ah, the blues! Not the melancholic kind, but the serene and calming
          hues that wrap WellNest in a cozy, <br />
          comforting embrace. Blue isn't just a color choice; it's a deliberate
          selection echoing the essence of <br />
          our mission. Think of a clear sky on a peaceful day or the gentle
          ripple of water—a symphony of <br />
          tranquility and stability, just like the mental haven we strive to
          create. <br />
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Shades of blue evoke feelings of trust, serenity, and reliability,
          offering a visual balm for the soul. <br />
          In the realm of mental wellness, these tones play a vital role, easing
          stress and inviting a sense of <br />
          calm. So, why blue? Because it's more than a color; it's a canvas of
          comfort and trust, painting the backdrop <br />
          against which WellNest thrives as a haven for mental well-being <br />
        </Typography>
        <div>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={2} style={{ maxWidth: "800px" }}>
              <Grid item xs={6}>
                <ColorCard
                  title={"Kingfisher Blue"}
                  content={"#0087E8"}
                  backgroundColor={"#0087E8"}
                  textColor={"#FFFFFF"}
                />
              </Grid>
              <Grid item xs={6}>
                <ColorCard
                  title={"Calm Blue"}
                  content={"#81C8FB"}
                  backgroundColor={"#81C8FB"}
                  textColor={"#000000"}
                />
              </Grid>

              <Grid item xs={6}>
                <ColorCard
                  title={"Deep Black"}
                  content={"#000000"}
                  backgroundColor={"#000000"}
                  textColor={"#FFFFFF"}
                />
              </Grid>
              <Grid item xs={6}>
                <ColorCard
                  title={"Pure White"}
                  content={"#FFFFFF"}
                  backgroundColor={"#FFFFFF"}
                  textColor={"#000000"}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
      <section id="typography" className="mt-10">
        <Typography variant="h3">Typography</Typography>
        <hr className="w-3/4" />
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Our choice of the Cabin font family was made in direct alignment with
          our mission. <br />
          Cabin font clean yet friendly curves evoke a sense of approachability
          and warmth, mirroring <br />
          the welcoming embrace we aim to offer within our platform. This font
          strikes a balance between <br />
          modernity and tradition, echoing our commitment to bridging the gap
          between mental health <br />
          awareness and innovative, user-friendly solutions. Much like a cozy
          cabin nestled in nature, <br />
          this font brings a sense of refuge and familiarity, inviting users to
          feel at home while <br />
          embarking on their wellness journey through WellNest <br />
        </Typography>
        <TypographyCard
          kind={"Heading 1"}
          size={"40px"}
          font={"Cabin"}
          backgroundColor={"#D9D9D9"}
          height={"200"}
        />
        <TypographyCard
          kind={"Heading 2"}
          size={"30px"}
          font={"Cabin"}
          backgroundColor={"#D9D9D9"}
          height={"180"}
        />
        <TypographyCard
          kind={"Heading 3"}
          size={"24px"}
          font={"Cabin"}
          backgroundColor={"#D9D9D9"}
          height={"160"}
        />
        <TypographyCard
          kind={"Sub Heading 1"}
          size={"16px"}
          font={"Cabin"}
          backgroundColor={"#D9D9D9"}
          height={"140"}
        />
        <TypographyCard
          kind={"Body"}
          size={"14px"}
          font={"Cabin"}
          backgroundColor={"#D9D9D9"}
          height={"120"}
        />
      </section>
      <section id="layout" className="mt-10">
        <Typography variant="h3">Page Layout And Spacing</Typography>
        <hr className="w-3/4" />
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Conveying the intricacies of website layout and spacing in a web page verion of Style Guide <br />
          remains a complex task. Hence, we have not highlighted them in the web page version <br />
          of the Style Guide. Moreover, to offer developers flexibility, we've made page layout and <br />
          spacing slightly adaptable, allowing them to adjust for different devices and content <br />
          variations based on the broader design principles outlined in other sections of the guide <br />
        </Typography>
      </section>
      <section id="design" className="mt-10">
        <Typography variant="h3">Design Patterns</Typography>
        <hr className="w-3/4" />
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Navigation Tabs
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Located at the bottom of each screen, the navigation tabs offer easy
          access to <br />
          different features. The active tab is clearly highlighted, ensuring
          swift navigation. <br />
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <BottomNavbar></BottomNavbar>
        </div>
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Self-Monitoring
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Users engage in self-monitoring through WellNest's mood-tracking and
          journaling tools. <br />
          These features allow users to document their emotions and thoughts,
          aiding in understanding their mental <br />
          well-being.
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ width: "1000px" }}>
            <BasicSelect
              mt={"mt-5"}
              bgColor={"blue"}
              textColor={"white"}
              label={"How are you feeling now?"}
              list={moods}
              onChange={() => { }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <DonutChart></DonutChart>
        </div>
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Input Prompt
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Within the mood tracking feature, users are prompted with a clear and
          pre-filled question: <br />
          "How are you feeling today?" This guidance reduces guesswork and
          encourages straightforward input. <br />
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ width: "1000px" }}>
            <BasicSelect
              mt={"mt-5"}
              bgColor={"blue"}
              textColor={"white"}
              label={"How are you feeling now?"}
              list={moods}
              onChange={() => { }}
            />
          </div>
        </div>
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Fixed Rewards
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          In the gamification section, users receive consistent rewards
          displayed on cards within <br />
          each game. These fixed rewards reinforce positive behavior in
          alignment with the mental health focus. <br />
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ChallengeCard
            key={0}
            imgSrc={"./breathing_exercise.png"}
            imgAlt={"Breathing Exercise Image"}
            title={"Breathing Exercise"}
            coinCnt={100}
            isCompleted={false}
          />
        </div>
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Limited Choice
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          To streamline decision-making, the mood-tracking feature offers a
          dropdown menu with <br />
          limited emotion options. This approach simplifies user input, reducing
          decision fatigue. <br />
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ width: "1000px" }}>
            <BasicSelect
              mt={"mt-5"}
              bgColor={"blue"}
              textColor={"white"}
              label={"How are you feeling now?"}
              list={moods}
              onChange={() => { }}
            />
          </div>
        </div>
      </section>
      {/* BUTTON SECTION */}
      <section
        id="buttons"
        className="mt-10 grid grid-cols-1 place-items-center gap-4 "
      >
        <Typography variant="h3">Buttons</Typography>
        <hr className="w-3/4" />
        <Button
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginTop: "10px",
            marginBottom: "20px",
            backgroundColor: "#0087E8"
          }}
        >
          Primary Button
        </Button>
        <br />
        <Button
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#81C8FB"
          }}
        >
          Secondary Button
        </Button>
        <br />
        <Button
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#FFB61D"
          }}
        >
          Secondary Action Button
        </Button>
        <br />
        <Button
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#E80000"
          }}
        >
          Negative Action Button
        </Button>
        <br />
        <Button
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#979797"
          }}
        >
          Disabled Button
        </Button>
        <br />
        <Button
          variant="contained"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "#0087E8"
          }}
        >
          Big Button
        </Button>
        <ActionAreaCard
          imageLink={"gameification.svg"}
          featureName={"Gameification"}
          description={"Play to get rewards"}
        />
      </section>
      <section id="chips" className="mt-10">
        <Typography variant="h3">Chips</Typography>
        <hr className="w-3/4" />
        <Chip
          label="Default Chip"
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginTop: "10px",
            marginBottom: "20px",
            backgroundColor: "#0087E8"
          }}
          sx={{
            "& .MuiChip-label": {
              color: "#FFFFFF"
            }
          }}
        />
        <br />
        <Chip
          label="Disabled Chip"
          variant="contained"
          style={{
            width: "400px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#979797"
          }}
          sx={{
            "& .MuiChip-label": {
              color: "#FFFFFF"
            }
          }}
        />
      </section>
      <section id="icons" className="mt-10">
        <Typography variant="h3">Icons</Typography>
        <hr className="w-3/4" />
        <Box display="flex" justifyContent="center">
          <Grid
            container
            spacing={1}
            style={{ maxWidth: "800px", marginTop: "20px" }}
          >
            <Grid item xs={3}>
              <IconCard
                iconUrl={"/Profile.png"}
                iconName={"Profile Icon"}
              ></IconCard>
            </Grid>
            <Grid item xs={3}>
              <IconCard
                iconUrl={"/DarthVader.png"}
                iconName={"Darth Vader"}
              ></IconCard>
            </Grid>
            <Grid item xs={3}>
              <IconCard
                iconUrl={"/Instagram.png"}
                iconName={"Instagram Logo"}
              ></IconCard>
            </Grid>
            <Grid item xs={3}>
              <IconCard
                iconUrl={"/Arrow.png"}
                iconName={"Dropdown Icon"}
              ></IconCard>
            </Grid>

            <Grid item xs={3} style={{ marginTop: "20px" }}>
              <IconCard
                iconUrl={"/Party.png"}
                iconName={"Party Icon"}
              ></IconCard>
            </Grid>
            <Grid item xs={3} style={{ marginTop: "20px" }}>
              <IconCard
                iconUrl={"/Draw.png"}
                iconName={"Pencil Icon"}
              ></IconCard>
            </Grid>
            <Grid item xs={3} style={{ marginTop: "20px" }}>
              <IconCard
                iconUrl={"/Whatsapp.png"}
                iconName={"Whatsapp Logo"}
              ></IconCard>
            </Grid>
            <Grid item xs={3} style={{ marginTop: "20px" }}>
              <IconCard
                iconUrl={"/Upload.png"}
                iconName={"Upload Icon"}
              ></IconCard>
            </Grid>
          </Grid>
        </Box>
      </section>
      {/* Dialog sectionn */}
      <section id="dialogs" className="grid grid-cols-1 gap-4 mt-10 ">
        <Typography variant="h3">Dialogs</Typography>
        <hr className="w-3/4" />
        <ReusableModal
          showCancelButton={false}
          buttonText={"OK Modal"}
          mt={`mt-24`}
          modalText={`Oops! Coins not enough for 30-minutes session. Try to earn more
            coins?`}
        ></ReusableModal>

        <ReusableModal
          showCancelButton={true}
          buttonText={"Cancel Modal"}
          mt={`mt-24`}
          modalText={`You want to set/change your today’s mood to Really Happy ?`}
        ></ReusableModal>
      </section>
      {/* MENU SECTION */}
      <section id="menus" className="mt-10 justify-items-center">
        <Typography variant="h3">Menus</Typography>
        <hr className="w-3/4" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ width: "1000px" }}>
            <BasicSelect
              mt={"mt-5"}
              bgColor={"blue"}
              textColor={"white"}
              label={"How are you feeling now?"}
              list={moods}
              onChange={() => { }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <BottomNavbar></BottomNavbar>
        </div>
      </section>
      <section id="data" className="mt-10 mb-20 grid justify-items-center">
        <Typography variant="h3">Data Visualization</Typography>
        <hr className="w-3/4" />
        <DonutChart></DonutChart>
      </section>
    </div>
  );
};

export default Content;
