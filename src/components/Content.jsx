import React from 'react';
import { Typography, Grid, Button, Chip } from '@mui/material';
import ImageCard from './ImageCard';
import ColorCard from './ColorCard';
import TypographyCard from './TypographyCard';

const Content = () => {
    return (
        <div className="content" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <section id="wellnest" className="mt-20">
                <Typography variant="h3">
                    WellNest
                </Typography>
                <hr className="w-3/4" />
                <Typography variant="h4" sx={{ marginTop: '1rem' }}>
                    Embrace WellNess. Embrace WellNest.
                </Typography>
                <Typography ariant="body1" sx={{ marginTop: '1rem' }}>WellNest is your all-in-one solution to bridge the gap between mental health awareness,<br />
                    prevention, and treatment. Especially, if you are a young professional!</Typography>
            </section>
            <section id="style" className="mt-10">
                <Typography variant="h3">
                    Style Guide
                </Typography>
                <hr className="w-3/4" />
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>Gather 'round, WellNesters! Introducing WellNest's style guide -- a wizard's spellbook,<br />
                    conjuring enchantments to transform your mental health journey into a whimsical<br />
                    adventure. Here, pixels mingle with mindfulness, colors conspire for serenity,<br />
                    and fonts softly chant calming mantras. It's more than a manual; it's the gateway<br />
                    to unlock the hidden garden of WellNest's visual allure. Grab your creative wands,<br />
                    and together, let's paint the world in tranquil hues, pixel by pixel.</Typography>
            </section>
            <section id="logo" className="mt-10">
                <Typography variant="h3">
                    Logo
                </Typography>
                <hr className="w-3/4" />
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Our logo isn't just a heart in blue with nest-like lines; it's the visual encapsulation of WellNest's essence.<br />
                    The heart symbolizes the core of our mission: nurturing mental health and wellness.<br />
                    Blue, with its calming and serene aura, embodies trust, stability, and tranquility—the very emotions.<br />
                    we aim to evoke within our users. Now, those nest-like lines? They're more than just strokes; they represent.<br />
                    the safe haven, the cocoon of support and comfort that WellNest provides. Just as a nest cradles its inhabitants,<br />
                    our application nestles users in a space that fosters growth, resilience, and healing. So, this logo isn't just a symbol;<br />
                    it's a testament to our commitment—a visual embrace promising solace and empowerment on the journey to mental well-being.<br />
                </Typography>
                <ImageCard imageUrl={'../../public/WllNestLogo.png'} />
            </section>
            <section id="color" className="mt-10">
                <Typography variant="h3">
                    Colors
                </Typography>
                <hr className="w-3/4" />
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Ah, the blues! Not the melancholic kind, but the serene and calming hues that wrap WellNest in a cozy, <br />
                    comforting embrace. Blue isn't just a color choice; it's a deliberate selection echoing the essence of <br />
                    our mission. Think of a clear sky on a peaceful day or the gentle ripple of water—a symphony of <br />
                    tranquility and stability, just like the mental haven we strive to create. <br />
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Shades of blue evoke feelings of trust, serenity, and reliability, offering a visual balm for the soul. <br />
                    In the realm of mental wellness, these tones play a vital role, easing stress and inviting a sense of <br />
                    calm. So, why blue? Because it's more than a color; it's a canvas of comfort and trust, painting the backdrop <br />
                    against which WellNest thrives as a haven for mental well-being <br />
                </Typography>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ColorCard title={'Kingfisher Blue'} content={'#0087E8'} backgroundColor={'#0087E8'} textColor={'#FFFFFF'} />
                        </Grid>
                        <Grid item xs={6}>
                            <ColorCard title={'Calm Blue'} content={'#81C8FB'} backgroundColor={'#81C8FB'} textColor={'#000000'} />
                        </Grid>

                        <Grid item xs={6}>
                            <ColorCard title={'Deep Black'} content={'#000000'} backgroundColor={'#000000'} textColor={'#FFFFFF'} />
                        </Grid>
                        <Grid item xs={6}>
                            <ColorCard title={'Pure White'} content={'#FFFFFF'} backgroundColor={'#FFFFFF'} textColor={'#000000'} />
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section id="typography" className="mt-10">
                <Typography variant="h3">
                    Typography
                </Typography>
                <hr className="w-3/4" />
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Our choice of the Cabin font family was made in direct alignment with our mission. <br />
                    Cabin font clean yet friendly curves evoke a sense of approachability and warmth, mirroring <br />
                    the welcoming embrace we aim to offer within our platform. This font strikes a balance between <br />
                    modernity and tradition, echoing our commitment to bridging the gap between mental health <br />
                    awareness and innovative, user-friendly solutions. Much like a cozy cabin nestled in nature, <br />
                    this font brings a sense of refuge and familiarity, inviting users to feel at home while <br />
                    embarking on their wellness journey through WellNest <br />
                </Typography>
                <TypographyCard kind={"Heading 1"} size={"40px"} font={"Cabin"} backgroundColor={"#D9D9D9"} height={"200"} />
                <TypographyCard kind={"Heading 2"} size={"30px"} font={"Cabin"} backgroundColor={"#D9D9D9"} height={"180"} />
                <TypographyCard kind={"Heading 3"} size={"24px"} font={"Cabin"} backgroundColor={"#D9D9D9"} height={"160"} />
                <TypographyCard kind={"Sub Heading 1"} size={"16px"} font={"Cabin"} backgroundColor={"#D9D9D9"} height={"140"} />
                <TypographyCard kind={"Body"} size={"14px"} font={"Cabin"} backgroundColor={"#D9D9D9"} height={"120"} />
            </section>
            <section id="layout" className="mt-10">
                <Typography variant="h3">
                    Page Layout And Spacing
                </Typography>
                <hr className="w-3/4" />
            </section>
            <section id="design" className="mt-10">
                <Typography variant="h3">
                    Design Patterns
                </Typography>
                <hr className="w-3/4" />
                <Typography variant="h4" sx={{ marginTop: '1rem' }}>
                    Navigation Tabs
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Located at the bottom of each screen, the navigation tabs offer easy access to <br />
                    different features. The active tab is clearly highlighted, ensuring swift navigation. <br />
                </Typography>
                <Typography variant="h4" sx={{ marginTop: '1rem' }}>
                    Self-Monitoring
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Users engage in self-monitoring through WellNest's mood-tracking and journaling tools. <br />
                    These features allow users to document their emotions and thoughts, aiding in understanding their mental <br />
                    well-being.
                </Typography>
                <Typography variant="h4" sx={{ marginTop: '1rem' }}>
                    Input Prompt
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    Within the mood tracking feature, users are prompted with a clear and pre-filled question: <br />
                    "How are you feeling today?" This guidance reduces guesswork and encourages straightforward input. <br />
                </Typography>
                <Typography variant="h4" sx={{ marginTop: '1rem' }}>
                    Fixed Rewards
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    In the gamification section, users receive consistent rewards displayed on cards within <br />
                    each game. These fixed rewards reinforce positive behavior in alignment with the mental health focus. <br />
                </Typography>
                <Typography variant="h4" sx={{ marginTop: '1rem' }}>
                    Limited Choice
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    To streamline decision-making, the mood-tracking feature offers a dropdown menu with <br />
                    limited emotion options. This approach simplifies user input, reducing decision fatigue. <br />
                </Typography>
            </section>
            <section id="buttons" className="mt-10">
                <Typography variant="h3">
                    Buttons
                </Typography>
                <hr className="w-3/4" />
                <Button variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginTop: '10px',
                    marginBottom: '20px',
                    backgroundColor: '#0087E8'
                }}>Primary Button</Button>
                <br />
                <Button variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginBottom: '20px',
                    backgroundColor: '#81C8FB'
                }}>Secondary Button</Button>
                <br />
                <Button variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginBottom: '20px',
                    backgroundColor: '#FFB61D'
                }}>Secondary Action Button</Button>
                <br />
                <Button variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginBottom: '20px',
                    backgroundColor: '#E80000'
                }}>Negative Action Button</Button>
                <br />
                <Button variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginBottom: '20px',
                    backgroundColor: '#979797'
                }}>Disabled Button</Button>
                <br />
                <Button
                    variant="contained"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        backgroundColor: '#0087E8'
                    }}
                >
                    Big Button
                </Button>
            </section>
            <section id="chips" className="mt-10">
                <Typography variant="h3">
                    Chips
                </Typography>
                <hr className="w-3/4" />
                <Chip label="Default Chip" variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginTop: '10px',
                    marginBottom: '20px',
                    backgroundColor: '#0087E8'
                }}
                    sx={{
                        '& .MuiChip-label': {
                            color: '#FFFFFF',
                        },
                    }} />
                <br />
                <Chip label="Disabled Chip" variant="contained" style={{
                    width: '400px',
                    padding: '15px',
                    marginBottom: '20px',
                    backgroundColor: '#979797'
                }}
                    sx={{
                        '& .MuiChip-label': {
                            color: '#FFFFFF',
                        },
                    }} />
            </section>
            <section id="icons" className="mt-10">
                <Typography variant="h3">
                    Icons
                </Typography>
                <hr className="w-3/4" />
            </section>
            <section id="dialogs" className="mt-10">
                <Typography variant="h3">
                    Dialogs
                </Typography>
                <hr className="w-3/4" />
            </section>
            <section id="menus" className="mt-10">
                <Typography variant="h3">
                    Menus
                </Typography>
                <hr className="w-3/4" />
            </section>
            <section id="forms" className="mt-10">
                <Typography variant="h3">
                    Forms
                </Typography>
                <hr className="w-3/4" />
            </section>
            <section id="data" className="mt-10 mb-20">
                <Typography variant="h3">
                    Data Visualization
                </Typography>
                <hr className="w-3/4" />
            </section>
        </div>
    );
};

export default Content;
