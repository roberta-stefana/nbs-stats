import React from 'react';
import {
    Grid,
    TextField,
    Button,
    Typography,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import Logo from '../../static/images/logo.jpg'

const TeamsForm = props => {

    const {classes, teamList, values, handleAutocompleteChange, nextStep} = props;
    const {team1, team2, category} = values;

    const uniqueNames = Array.from(new Set(teamList.map(x=>x.name)))
        .map(name=>{
            return {
                name: name,
            }
        });

        const uniqueCategory = Array.from(new Set(teamList.map(x=>x.category)))
        .map(category=>{
            return {
                category: category.toString(10),
            }
        });

        const propsName = {
            options: uniqueNames,
            getOptionLabel: option => option.name,
        };

        const propsCategory = {
            options: uniqueCategory,
            getOptionLabel: option => option.category,
        };
    
    return (
        <Grid container className={classes.mainContainer} >
            <div>
                <img src={Logo} alt='website logo' className={classes.logo} />
            </div>

            <div>
                <Typography variant="h3" className={classes.title}>Pick teams</Typography>
            </div>
            <div className={classes.fields}>
                <TextField
                    label="Team 1"
                    defaultValue={team1}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    fullWidth
                />
                <div className={classes.autocomplete}>
                    <Autocomplete
                        {...propsName}
                        autoSelect
                        onChange={handleAutocompleteChange('team2')}
                        getOptionDisabled={option => option.name === 'CS Universitatea NBS Cluj'}
                        renderInput={params => (
                        <TextField {...params} label="Team 2" margin="normal" fullWidth variant="standard"/>
                        )}
                        value={team2}
                    />
                 </div>
                 <div className={classes.autocomplete}>
                    <Autocomplete
                        {...propsCategory}
                        autoSelect
                        onChange={handleAutocompleteChange('category')}
                        renderInput={params => (
                        <TextField {...params} label="Category" margin="normal" fullWidth variant="standard"/>
                        )}
                        value={category}
                    />
                 </div>
                <br/>
                <Button
                    size="medium"
                    className={classes.button}
                    fullWidth
                    onClick={nextStep}
                >
                    CONTINUE
                </Button>
            </div>
        </Grid>
    );
}
 
export default TeamsForm;