import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import { Link as LinkScroll } from 'react-scroll';
import theme from '../Theme';

const styles = makeStyles({
    aboutSection: {
        background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 70%, ${theme.palette.secondary.main} 70%, #ffffff 70%, #ffffff 100%)`,
    },
    center: {
        textAlign: 'center',
    },
    justify: {
        textAlign: 'justify'
    },
    skillsContainer: {
        backgroundColor: '#fff',
        borderRadius: '50px',
        marginTop: theme.spacing(10)
    }
});

const About = (props) => {
    const classes = styles();
    const darkPrimaryColor = theme.palette.primary.dark;
    const texts = { ...props.texts };
    const currentPage = props.currentPage;

    const toolList = tools => {
        if (tools.title && tools.list) {
            return (
                <React.Fragment>
                    <Typography variant="h5" style={{ color: darkPrimaryColor }} >{tools.title}</Typography>
                    <List aria-label={tools.title}>
                        {tools.list.map((tool) => (
                            <ListItem key={tool} className={classes.center}>
                                <ListItemText>
                                    <Typography variant="body1">{tool}</Typography>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </React.Fragment>
            );
        }
    }

    return (
        <div className={classes.aboutSection} id="about">
            <Container maxWidth="lg">
                <Grid container className={classes.center} spacing={4}>
                    <Grid item xs={12} >
                        <LinkScroll
                            to={currentPage === "home" ? "about" : "home"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onSetActive={() => props.setCurrentPage(currentPage === "home" ? "about" : "home")}
                        >
                            {
                                currentPage === "home" ?
                                    <IconButton aria-label="Expand More" color="primary">
                                        <ExpandMoreIcon fontSize="large" />
                                    </IconButton>
                                    : <IconButton aria-label="Expand Less" color="primary">
                                        <ExpandLessIcon fontSize="large" />
                                    </IconButton>
                            }
                        </LinkScroll>
                    </Grid>
                    <Grid container item xs={12} justify="center" >
                        <Typography variant="h3" color="textSecondary" >{texts.title}</Typography>
                        <Grid item xs={8} className={classes.justify}>
                            <Typography variant="body1" color="textSecondary">{texts.description}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container
                        item xs={12}
                        justify="space-evenly"
                        className={classes.skillsContainer}
                    >
                        {texts.knowledge.map((knowledge, i) => (
                            <Grid item xs={12} lg={3} key={i} className={classes.center}>
                                <PhonelinkIcon fontSize="large" style={{ color: darkPrimaryColor }} />
                                <Typography variant="h4">{knowledge.title}</Typography>
                                <Typography variant="body1">{knowledge.description}</Typography>
                                <Typography variant="h5" style={{ color: darkPrimaryColor }} >{knowledge.listTitle}</Typography>
                                <List aria-label={knowledge.listTitle}>
                                    {knowledge.skillList.map((skill) => (
                                        <ListItem key={skill} className={classes.center}>
                                            <ListItemText>
                                                <Typography variant="body1">{skill}</Typography>
                                            </ListItemText>
                                        </ListItem>

                                    ))}
                                </List>
                                {toolList({ title: knowledge.toolsTitle, list: knowledge.toolsList })}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;