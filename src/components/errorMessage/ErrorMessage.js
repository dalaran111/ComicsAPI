import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

const ErrorMessage = () => {
    return(
        <Alert severity="error" variant='filled'>
            <AlertTitle>Error</AlertTitle>
            Упс, что-то пошло не так. Попробуйте снова.
        </Alert>
    )
}
export default ErrorMessage;