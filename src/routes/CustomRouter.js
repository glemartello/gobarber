import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

const CustomRouter = ({ basename, children, history }) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        >
            {children}
        </Router>
    );
};

CustomRouter.propTypes = {
    history: PropTypes.shape({
        action: PropTypes.string,
        location: PropTypes.shape({}),
        listen: PropTypes.func,
    }).isRequired,
    basename: PropTypes.string,
    children: PropTypes.node.isRequired,
};

CustomRouter.defaultProps = {
    basename: undefined,
};

export default CustomRouter;
