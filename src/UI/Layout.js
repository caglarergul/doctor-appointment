import React from 'react';
import Header from '../UI/Header';
import { Grid } from 'semantic-ui-react'
const layout = (props) => {
    // Basic Layout like a master page.
    return (
        <div className={"m-t-10"}>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={14} >
                    <Header/>
                    <div className="container menu-top"> {props.children}</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default layout;