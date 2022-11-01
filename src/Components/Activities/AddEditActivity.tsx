import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {Activity} from "../../Models";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
// @ts-ignore
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {createActivity, updateActivity} from "../../Store/ActivitiesActions";

const AddEditActivity: React.FC<{ isDialogOpen: boolean, setDialogOpen: Function, activity: Activity | null }> = ({
                                                                                                                      isDialogOpen,
                                                                                                                      setDialogOpen,
                                                                                                                      activity
                                                                                                                  }) => {
    const dispatch = useDispatch();

    const [isSaveDisabled, setIsSaveDisabled] = useState<boolean>(true);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        if(activity) {
            setTitle(activity.title);
            setDescription(activity.description);
        }
    }, [])

    useEffect(() => {
        const titleValid = title.length > 0 && title.length < 30;
        const descriptionValid = description.length < 1000;

        let areChangesToSave:boolean = true;
        if(activity) {
            if(activity.title === title && activity.description === description) {
                areChangesToSave = false;
            }
        }

        setIsSaveDisabled(!titleValid || !descriptionValid || !areChangesToSave);
    }, [title, description])

    const handleCloseAddEditDialog = () => {
        setDialogOpen(false);
    }

    // @ts-ignore
    const handleChangeTitle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setTitle(e.target.value);

    // @ts-ignore
    const handleChangeDescription = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setDescription(e.target.value);

    const handleSave = () => {
        if(activity) {
            // @ts-ignore
            dispatch(updateActivity(activity.id)).then(()=>handleCloseAddEditDialog());
        } else {
            // @ts-ignore
            dispatch(createActivity()).then(()=>handleCloseAddEditDialog());
        }
    }

    return <Dialog open={isDialogOpen}>
        <DialogTitle id="form-dialog-title">{activity ? 'Edit' : 'Create'} activity</DialogTitle>

        <ValidatorForm onSubmit={handleSave}>
            <DialogContent>
                <TextValidator
                    label='Title'
                    margin='normal'
                    type='text'
                    value={title}
                    onChange={handleChangeTitle}
                    validators={['required', 'minStringLength:1', 'maxStringLength: 30']}
                    errorMessages={[
                        'The field is required',
                        'The field is required',
                        'You have reached the maximum limit. Please decrease the number of characters',
                    ]}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        endAdornment: <span className='char-count'>
                                        {title ? title.length : 0}/30
                                    </span>,
                    }}/>
                <TextValidator
                    label='Description'
                    margin='normal'
                    type='text'
                    value={description}
                    onChange={handleChangeDescription}
                    validators={['maxStringLength: 1000']}
                    errorMessages={[
                        'You have reached the maximum limit. Please decrease the number of characters',
                    ]}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        endAdornment: <span className='char-count'>
                                        {description ? description.length : 0}/1000
                                    </span>,
                    }}/>
            </DialogContent>

            <DialogActions>
                <Button variant={'text'}
                        onClick={handleCloseAddEditDialog}
                >
                    CANCEL
                </Button>
                <Button variant={'text'}
                        disabled={isSaveDisabled}
                        type="submit"
                >
                    {activity ? 'save' : 'create'}
                </Button>
            </DialogActions>
        </ValidatorForm>

    </Dialog>
}

export default AddEditActivity;