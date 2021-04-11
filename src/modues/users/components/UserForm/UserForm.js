import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {Button, Input} from "@material-ui/core";
import {formStyle} from "./formStyles";


export function UserForm({user, onChangeValue, onCloseForm, onSave}) {

    function handleSubmit(e) {
        e.preventDefault()
        onSave(user)
        setTimeout(() => {
            onCloseForm()
        }, 1000)

    }

    return (
        <Container maxWidth='md'>
            <Grid container justify='center' alignItems='center'>
                <form style={formStyle.form} onSubmit={handleSubmit}>
                    <Grid item>
                        <Input
                            style={formStyle.input}
                            required
                            name='name'
                            placeholder='Name'
                            type="text"
                            value={user.name}
                            onChange={onChangeValue}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            style={formStyle.input}
                            required
                            name='phone'
                            placeholder='Phone'
                            type="text"
                            value={user.phone}
                            onChange={onChangeValue}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            style={formStyle.input}
                            required
                            name='email'
                            placeholder='Email'
                            type="text"
                            value={user.email}
                            onChange={onChangeValue}
                        />
                    </Grid>
                    <Grid container justify='space-around'>
                        <Button type='submit' variant="contained"> Add </Button>
                        <Button variant="contained" onClick={onCloseForm}>Cancel</Button>
                    </Grid>
                </form>
            </Grid>
        </Container>
    );
}

