import PropTypes from 'prop-types';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownRenderer({ markdown }) {

    return (
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    );
}

MarkdownRenderer.propTypes = {
    markdown: PropTypes.string.isRequired,
};

export default MarkdownRenderer;
