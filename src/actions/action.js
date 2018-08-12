let actions = {
    init: () => (dispatch, getState) => {},
    _init: resp => ({
        type: 'INIT_ARTICLE_LIST',
        payload: ''
    })
};
export default actions;
