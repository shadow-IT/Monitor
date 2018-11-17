import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const PageHeader = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                EKG
            </Typography>
        </Toolbar>
  </AppBar>
);

PageHeader.displayName = 'PageHeader';

export default PageHeader;
