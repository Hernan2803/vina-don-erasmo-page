import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './../context/ThemeContext';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import MarkdownRenderer from './../utils/MarkdownRenderer';

function ExpandedInfo ({data, expanded, setExpanded, icon}) {

    const { theme } = useContext(ThemeContext);
    const markdownContent = `${data.description}`

    return (
        <Dialog open={expanded} onClose={setExpanded} maxWidth='md'>
            <DialogTitle>{icon}{data.title}</DialogTitle>
            <DialogContent>
                <img style={{ maxWidth: "100%", height: 'auto' }} src="https://res.cloudinary.com/diullnftt/image/upload/v1720638995/xxnlzids7vpkzg1ehsj7.gif" alt="image"/>
                <DialogContentText>
                    <MarkdownRenderer markdown={markdownContent}/>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button className={"px-4 py-2 mt-4 rounded text-white" + theme.primaryButtonBg} onClick={() => setExpanded()}>Volver</button>
            </DialogActions>
        </Dialog>
    );
}

export default ExpandedInfo;

ExpandedInfo.propTypes = {
    data: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string,
        tag: PropTypes.string,
        title: PropTypes.string,
    }).isRequired,
    expanded: PropTypes.bool.isRequired,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    setExpanded: PropTypes.func.isRequired,
};
